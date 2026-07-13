"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/UI/SectionTitle";
import Button from '@/components/UI/Button';
import { MoveRight, X, Play } from 'lucide-react';
import { path } from "@/utils/path"; // Import the path utility
// --- Types & Data ---
interface Stat {
    id: number;
    value: number;
    suffix: string;
    label1: string;
    label2: string;
    decimals: number;
}

interface Franchisee {
    id: number;
    name: string;
    location: string;
    yearsNum: string;
    yearsText: string;
    image: string;
    videoUrl: string; // Added video URL field
}

const statsData: Stat[] = [
    { id: 1, value: 150, suffix: "+", label1: "Active", label2: "Franchises", decimals: 0 },
    { id: 2, value: 20, suffix: "+", label1: "Years", label2: "Presence", decimals: 0 },
    { id: 3, value: 10.8, suffix: "%", label1: "Annual", label2: "Growth", decimals: 1 },
];

const franchiseeData: Franchisee[] = [
    {
        id: 1,
        name: "Anton Arumainayagam",
        location: "AJAX Franchise",
        yearsNum: "20+",
        yearsText: "Years",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        videoUrl: "https://www.youtube.com/embed/w1_sShwseIc?autoplay=1",
    },
    {
        id: 2,
        name: "Shankar Sivashankar",
        location: "Scarborough Franchise",
        yearsNum: "13+",
        yearsText: "Years",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        videoUrl: "https://www.youtube.com/embed/w1_sShwseIc?autoplay=1",
    },
    {
        id: 3,
        name: "Raj Sewak",
        location: "Calgary Franchise",
        yearsNum: "10+",
        yearsText: "Years",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        videoUrl: "https://www.youtube.com/embed/w1_sShwseIc?autoplay=1",
    },
    {
        id: 4,
        name: "Krishna Puranik",
        location: "British Columbia Franchise",
        yearsNum: "08+",
        yearsText: "Years",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        videoUrl: "https://www.youtube.com/embed/w1_sShwseIc?autoplay=1",
    },
];

// --- Custom Animated Counter Component ---
const AnimatedNumber = ({ end, decimals, isVisible }: { end: number; decimals: number; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        const duration = 2000;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(end * easeProgress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, isVisible]);

    return <span>{count.toFixed(decimals)}</span>;
};

// --- Main Section Component ---
export default function FranchiseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [countersVisible, setCountersVisible] = useState(false);

    // --- Modal State ---
    const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

    // Trigger exactly 5rem (80px) from the bottom of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCountersVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -80px 0px",
                threshold: 0,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (activeVideoUrl) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeVideoUrl]);

    return (
        <section
            ref={sectionRef}
            className="bg-[url('https://vcantech.in/ucmasnext/images/mgh-bg.webp')] bg-cover bg-center bg-no-repeat !pb-0 relative"
        >
            <div className=''>
                {/* SectionTitle implementation example */}
                <SectionTitle ParaclassName="md:max-w-4/5 mx-auto"
                    titleTop={<>Own a </>}
                    titleBottom={<><em className="text-ucmas-yellow">Franchise</em></>}
                    highlightText={<>in your city.</>}
                    // subtitle={[
                    //     "Every recognition earned by UCMAS reflects the success stories of thousands of children who have grown into more confident, focused, and capable learners. Through its globally trusted abacus and mental development programs, UCMAS has been honored for transforming the way children learn, helping them build essential life skills while making education engaging and enjoyable.",
                    // ]}
                    titleColor="text-white"
                    highlightColor="text-white"
                    subtitleColor="text-section-heading-paragraph"
                    lineColor="#fcc244"
                />
            </div>

            <div className="relative z-10 flex items-center flex-col-reverse xl:flex-col   ">

                {/* LEFT COLUMN: Woman Image (Spans 4 cols) */}
                <div className="h-full xl:h-4/5 2xl:h-10/12 3xl:h-full  xl:absolute bottom-0 left-0  pointer-events-none  " data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <Image
                        width={1200}
                        height={2400}
                        quality={100}
                        src={`${path}/images/megha.webp`}
                        alt="UCMAS Representative"
                        className="h-full w-auto  object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] z-10"
                    />
                </div>

                <div className="my-container  grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-6 items-stretch pb-10 lg:pb-16">
                    <div className="xl:col-span-2 flex flex-col md:flex-row  justify-center mb-5 xl:flex-col xl:col-start-4 items-center" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        {statsData.map((stat, index) => (
                            <div key={stat.id} className="relative flex flex-col md:flex-row xl:flex-col items-center text-center w-full">
                                <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h3 className="text-5xl font-bold text-ucmas-counter-franchise-yellow leading-none tracking-tight drop-shadow-md">
                                        <AnimatedNumber
                                            end={stat.value}
                                            decimals={stat.decimals}
                                            isVisible={countersVisible}
                                        />
                                        {stat.suffix}
                                    </h3>
                                    <div>
                                        <p className="text-white font-bold text-2xl text-start ml-24 italic leading-tight mt-1">
                                            <span className="text-ucmas-counter-franchise-yellow"> {stat.label1} <br /></span>
                                            <span> {stat.label2}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Connecting Vertical Line */}
                                {index !== statsData.length - 1 && (
                                    <div className="w-px block md:hidden xl:block h-16 bg-slate-500 my-3"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="xl:col-span-7 xl:ps-16 xl:col-start-6 flex flex-col justify-center  w-full pb-10 lg:pb-0 z-20" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        {/* 2x2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full" >
                            {franchiseeData.map((person) => (
                                <div
                                    key={person.id}
                                    onClick={() => setActiveVideoUrl(person.videoUrl)}
                                    className="cursor-pointer group rounded-2xl border border-[#3b4c75] overflow-hidden shadow-lg flex flex-col transition-transform hover:scale-[1.02] duration-300"
                                >
                                    {/* Image Section */}
                                    <div className=" w-full h-40 lg:h-52 overflow-hidden relative">
                                        <Image
                                            width={600}
                                            height={800}
                                            quality={100}
                                            src={`${path}/images/${person.image}`}
                                            alt={person.name}
                                            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                                                <Play className="text-white fill-white w-6 h-6 " />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="px-5 relative bg-ucmas-franchise-bluebox py-6 flex flex-row justify-between items-end flex-grow after:absolute after:inset-0 after:content-[''] after:bg-gradient-to-b after:from-black/50 after:to-transparent">
                                        <div className="flex flex-col pr-2 z-10">
                                            <h4 className="text-ucmas-counter-franchise-yellow font-ucmasfont font-bold text-xl leading-snug group-hover:text-white transition-colors">
                                                {person.name}
                                            </h4>
                                            <p className="text-slate-300 font-ucmasfont mt-0.5  ">
                                                {person.location}
                                            </p>
                                        </div>

                                        {/* Years Overlay/Text */}
                                        <div className="text-right shrink-0 z-10 absolute bottom-1.5 right-1.5 opacity-50">
                                            <span className="text-white font-semibold  text-2xl leading-3 block">
                                                <span> {person.yearsNum} </span> <br />
                                                <span className="text-base"> {person.yearsText}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Right Aligned below grid */}
                        <div className="flex justify-center xl:justify-end w-full mt-6">
                            <Button
                                variant="yellow_btn"
                                href="#"
                                icon={<MoveRight size={20} strokeWidth={2} />}
                                iconPosition="right"
                                className=" !py-1  font-semibold"
                            >
                                Book 1:1 Business Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Video Modal --- */}
            {activeVideoUrl && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
                    onClick={() => setActiveVideoUrl(null)} // Close when clicking backdrop
                >
                    <div
                        className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden aspect-video shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video container
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors cursor-pointer"
                            onClick={() => setActiveVideoUrl(null)}
                            aria-label="Close video"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Video iFrame */}
                        <iframe
                            src={activeVideoUrl}
                            title="Franchisee Video"
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}