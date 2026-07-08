'use client';

import React, { useEffect, useState, useRef } from 'react';

// Props का इंटरफ़ेस डिफाइन करें
interface CounterProps {
    from?: number;
    to: number;
    decimals?: number;
    start?: boolean;
}

// Animated Counter Sub-Component
function Counter({
    from = 0,
    to,
    decimals = 0,
    start = false,
}: CounterProps) {
    const [count, setCount] = useState(from);

    useEffect(() => {

        if (!start) return;

        let animationFrame: number;
        let startTime: number;
        const duration = 3500;

        const updateCounter = (timestamp: number) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min((timestamp - startTime) / duration, 1);
            const value = from + (to - from) * progress;
            setCount(value);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(updateCounter);
            }
        };

        animationFrame = requestAnimationFrame(updateCounter);

        return () => cancelAnimationFrame(animationFrame);
    }, [start, from, to]);

    return <span>{count.toFixed(decimals)}</span>;
}

export default function StatsSlider() {
    const [mounted, setMounted] = useState(false);
    const [countersVisible, setCountersVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCountersVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px 0px -80px 0px',
                threshold: 0,
            }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [mounted]);

    // HINT: Humne har item ke liye uske size ke mutabik 'wClass' add kiya hai 
    // taaki initial render (0) pe bhi width uske target number jitni hi rahe.
    const statsData = [
        { number: 10, decimals: 0, symbol: 'x', wClass: 'w-[2.5rem] lg:w-[3rem]', label: <>Faster <br />Mental Math</> },
        { number: 80, decimals: 0, symbol: '+', wClass: 'w-[2.5rem] lg:w-[4rem]', label: <>Countries <br />Worldwide</> },
        { number: 6000, decimals: 0, symbol: '+', wClass: 'w-[5rem] lg:w-[8.5rem]', label: <>Centres <br />Globally</> },
        { number: 150, decimals: 0, symbol: '+', wClass: 'w-[3.5rem] lg:w-[5.5rem]', label: <>Centres <br />in Canada</> },
        { number: 3, decimals: 0, symbol: '+', wClass: 'w-[1.5rem] lg:w-[1.75rem]', label: <>Million <br />Students Trained</> },
        { number: 32, decimals: 0, symbol: '+', wClass: 'w-[2.5rem] lg:w-[3.5rem]', label: <>Years <br />of Excellence</> },
        { number: 4.9, decimals: 1, symbol: 'star', wClass: 'w-[3.5rem] lg:w-[5rem]', label: <>Google <br />Rating</> },
    ];

    if (!mounted) return null;

    return (
        <div ref={sectionRef} className="overflow-hidden py-3 -mt-3 md:py-5 md:-my-5 relative">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite; 
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="stats-contentsec relative z-2 py-3 lg:py-6 before:absolute before:content-[''] before:h-full before:w-[200%] before:left-1/2 before:top-0 before:-translate-x-1/2 before:rotate-[-2deg] md:before:rotate-[-1deg] before:bg-[linear-gradient(90deg,#218794_0%,#3FA5B1_100%)] after:absolute after:content-[''] after:h-full after:rotate-2 md:after:rotate-1 after:w-[200%] after:left-1/2 after:top-0 after:-translate-x-1/2 after:bg-[linear-gradient(90deg,#fbb03b_0%,#e6761b_100%)]">

                <div className="relative w-full rotate-2 md:rotate-1 px-0 z-20 overflow-hidden group flex">
                    <div className="flex w-max animate-marquee">

                        {[...statsData, ...statsData].map((stat, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center px-4 sm:px-8 lg:px-12"
                            >
                                <div className="flex items-center text-left">
                                    <div className="flex items-baseline select-none">
                                        {/* FIX: Is container ko fixed/min width di hai, text-right ke sath taaki alignment sahi rahe */}
                                        <span className={`lg:text-5xl xl:text-6xl text-3xl font-extrabold text-white leading-none tracking-tight tabular-nums text-right inline-block ${stat.wClass}`}>
                                            <Counter
                                                to={stat.number}
                                                decimals={stat.decimals}
                                                start={countersVisible}
                                            />
                                        </span>

                                        {stat.symbol === 'star' ? (
                                            <svg
                                                className="w-4 xl:w-6 h-4 xl:h-6 text-ucmas-red ml-1 inline-block"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.87 1.4-8.168L.132 9.21l8.2-1.192z" />
                                            </svg>
                                        ) : (
                                            <span className="xl:text-3xl text-2xl font-semibold text-ucmas-red ml-0.5 leading-none">
                                                {stat.symbol}
                                            </span>
                                        )}
                                    </div>

                                    <div className="xl:text-xl text-base font-regular text-white leading-tight ml-3 text-left min-w-max">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}