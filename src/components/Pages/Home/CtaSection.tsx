"use client";

import { useState, useRef } from "react";
import Button from "@/components/UI/Button"; // Adjust path if necessary
import { MoveRight, Play, Pause } from "lucide-react"; // Added Play/Pause icons for the video UI
import { path } from "@/utils/path"; // Import the path utility
export default function CtaVideoHero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative w-full lg:min-h-56 bg-(--brand-navy-dark,#0B1A30) overflow-hidden flex flex-col lg:flex-row lg:items-stretch group/hero"  data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">

            <div
                className="hidden lg:block absolute top-0 left-0 bottom-0 w-[53.5%] z-10 bg-white pointer-events-none md:[clip-path:polygon(0%_0%,99.1%_0%,88%_100%,0_100%)]"
            />

            <div
                className="relative lg:absolute lg:top-0 lg:left-0 lg:bottom-0 w-full lg:w-[53%]  h-auto z-20  overflow-hidden group/video md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" >
                {/* <div className="w-full h-full relative bg-[url('/images/Banner-cta-bg.webp')] bg-cover bg-center"> */}
                <div className="w-full h-full relative">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover  aspect-video transition-all duration-300"
                        loop
                        playsInline
                        poster={`${path}/images/Banner-cta-bg.webp`}
                        onClick={togglePlay}
                    >
                        <source src={`${path}/images/UCMAS International Competition 2019.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Video Control Overlay (Shows when paused) */}
                    <div
                        className={`absolute inset-0 bg-[#0B1A30]/45 hover:bg-[#0B1A30]/25 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 z-30 ${isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}
                        onClick={togglePlay}
                    >
                        <div className="w-20 h-20 bg-[#E63946] rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(230,57,70,0.6)] hover:bg-[#D62828] hover:scale-110 hover:shadow-[0_15px_35px_rgba(230,57,70,0.8)] transition-all duration-300 border-[.1875rem] border-white/20">
                            <Play fill="currentColor" className="text-white w-8 h-8 ml-1" />
                        </div>
                        <span className="text-white text-[0.95rem] font-semibold tracking-.0625rem uppercase mt-3.75 [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] opacity-90 pointer-events-none">
                            Watch Video
                        </span>
                    </div>

                    {/* Action Hint (Shows on hover when playing) */}
                    <div
                        className={`absolute bottom-5 left-5 z-40 bg-[#051021]/85 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 pointer-events-none border border-white/10 transition-all duration-300 ${isPlaying ? "opacity-0 translate-y-2.5 group-hover/video:opacity-100 group-hover/video:translate-y-0" : "opacity-0"
                            }`}
                    >
                        <Pause className="w-4 h-4" /> Click to pause
                    </div>
                </div>
            </div>

            {/* ========================================= */}
            {/* 3. RIGHT CTA PANEL                        */}
            {/* Replaces .right-cta-panel               */}
            {/* ========================================= */}
            <div className="w-full lg:w-[50%] lg:ml-auto px-6 xl:pl-26 py-10  lg:pr-12 lg:pl-12 bg-linear-to-br from-[var(--brand-navy,#0A1A44)] to-[var(--brand-navy-dark,#0B1A30)] lg:bg-none relative z-30 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

                {/* Animated Background Effect Placeholder (Pulse) */}
                <div className="absolute -bottom-10 -right-10 w-120 text-center h-120 pointer-events-none opacity-30 z-0 animate-pulse bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                <div className="  ">

                    <h2 className="relative z-10 font-semibold text-white leading-8 text-2xl  mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.15)] max-w-150 lg:max-w-none">
                        Nurturing National Champions with <br className="hidden sm:block" /> Harvard & Stanford Proven Methods
                    </h2>

                    <div className="relative z-10">
                        <Button
                            variant="ucmas_red_btn"
                            href="#"
                            icon={<MoveRight size={20} strokeWidth={2} />}
                            iconPosition="right"
                            className="mx-auto"
                        // If you need the modal trigger instead of a link:
                        // onClick={() => document.getElementById('registrationModal')?.classList.add('show')} 
                        >
                            Book a Free Session
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}