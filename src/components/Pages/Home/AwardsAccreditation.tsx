'use client';

import SectionTitle from "@/components/UI/SectionTitle";
import Image from 'next/image';
import { animate, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from 'react';
import { path } from "@/utils/path";

interface CounterProps {
    from?: number;
    to: number;
    decimals?: number;
}

// Animated Counter Sub-Component
function Counter({ from = 0, to, decimals = 0 }: CounterProps) {
    const nodeRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: 20.5,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = value.toFixed(decimals);
            },
        });

        return () => controls.stop();
    }, [from, to, decimals]);

    return <span ref={nodeRef}>{from}</span>;
}

export default function AwardsAccreditation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const statsData = [
        { image: "Layer 1.webp", year: "2026", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 2.webp", year: "2026", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 3.webp", year: "2026", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 4.webp", year: "2024", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 5.webp", year: "2020", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 6.webp", year: "2020", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
        { image: "Layer 7.webp", year: "2016", content: "16 Years of Franchisees Choice Excellence Canadian Franchise Association (2011 – 2026)", },
    ];

    if (!mounted) return null;

    // Seamless looping ke liye array ko duplicate render kiya jata hai
    const doubleStats = [...statsData, ...statsData];

    // Varied animation durations loop
    const durations = [800, 1000, 1200];

    return (
        <>
            <section className="">
                {/* Top Header Section Content Title */}
                <div className=''>
                    <SectionTitle ParaclassName="md:max-w-4/5 mx-auto"
                        titleTop={<><em>Awards</em></>}
                        titleBottom=""
                        highlightText={<>& <br className="hidden md:block" />Accreditation</>}
                        subtitle={[
                            <>
                                Awards don't happen by chance. UCMAS has earned global recognition and prestigious accreditations <br className="hidden lg:block" /> that reflect real commitment to quality, innovation, and impact that lasts.
                            </>
                        ]}
                        titleColor="text-ucmas-sky"
                        highlightColor="text-ucmas-blue"
                        subtitleColor="text-section-heading-paragraph"
                        lineColor="#1e2e54"
                    />
                </div>
                
                <div className="w-full mt-10">
                    <div className="w-full overflow-hidden">
                        <div className="flex w-max animate-marqueeawards">
                            {doubleStats.map((stat, index) => {
                                // Calculate staggered delay based on original array length (Converted to seconds for Framer Motion)
                                const staggeredDelay = ((index % statsData.length) * 150) / 1000;
                                // Alternating duration timing (Converted from ms to seconds)
                                const customDuration = durations[index % durations.length] / 1000;

                                return (
                                    <motion.div
                                        key={index}
                                        className="w-[20rem] shrink-0" 
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: customDuration, 
                                            delay: staggeredDelay, 
                                            ease: [0.16, 1, 0.3, 1] 
                                        }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    >
                                        <div className="text-center">
                                            <div className="h-32 flex items-center justify-center mb-5">
                                                <Image 
                                                    src={`${path}/images/${stat.image}`}
                                                    alt={stat.content}
                                                    width={120}
                                                    height={120}
                                                    className="max-h-full h-auto w-28 max-w-full object-contain drop-shadow-[0_0.5rem_1.5rem_rgba(149,157,165,0.2)] mb-4 pt-4"
                                                />
                                            </div>
                                            <div className="border-r px-5 border-gray-200">
                                                <span className="text-2xl lg:text-4xl font-bold text-ucmas-blue mt-4">
                                                    {stat.year}
                                                </span>
                                                <p className="mt-3 text-sm lg:text-base text-award-description">
                                                    {stat.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}