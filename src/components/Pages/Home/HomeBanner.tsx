'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Removed Navigation module since we are using custom
import React, { useState } from "react";
import type { Swiper as SwiperType } from 'swiper'; // Import SwiperType for TypeScript

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Button from '@/components/UI/Button';
import { path } from '@/utils/path';

const slides = [
    {
        id: 1,
        title: "Welcome to Our Modern Website",
        description: "Experience the power of Next.js and Tailwind CSS working perfectly together.",
        image: "Banner-15.webp",
        btnText: "Get Started"
    },
    {
        id: 2,
        title: "Fast, Secure, and Scalable",
        description: "Built with the latest App Router, React Compiler, and advanced UI components.",
        image: "Banner-17.webp",
        btnText: "Learn More"
    },
    {
        id: 3,
        title: "Custom Brand Colors Setup",
        description: "Easily integrate your UCMAS colors with Tailwind CSS v4 seamlessly.",
        image: "Banner-18.webp",
        btnText: "View Colors"
    },
    {
        id: 4,
        title: "Custom Brand Colors Setup",
        description: "Easily integrate your UCMAS colors with Tailwind CSS v4 seamlessly.",
        image: "Banner-19.webp",
        btnText: "View Colors"
    }
];

export default function BannerSlider() {
    // State to hold the swiper instance
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <div className="w-full relative overflow-hidden group" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1500">
            {/* Previous Button */}
            <button
                onClick={() => swiperInstance?.slidePrev()}
                className="absolute z-10 top-1/2 -translate-y-1/2 -left-20 group-hover:left-4 transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-xl border border-ucmas-light-sky hover:bg-cyan-50 hover:border-ucmas-light-sky bg-white shadow-sm cursor-pointer"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-ucmas-light-sky h-6 w-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            {/* Next Button */}
            <button
                onClick={() => swiperInstance?.slideNext()}
                className="absolute z-10 top-1/2 -translate-y-1/2 -right-20 group-hover:right-4 transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-xl border border-ucmas-light-sky hover:bg-cyan-50 hover:border-ucmas-light-sky bg-white shadow-sm cursor-pointer"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-ucmas-light-sky h-6 w-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>


            <Swiper
                onSwiper={setSwiperInstance} // This connects your custom buttons to Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]} // Removed default Navigation
                className="w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full">
                            <Image
                                src={`${path}/images/${slide.image}`}
                                alt="Slide Image"
                                width={1920}
                                height={600}
                                quality={100}
                                className="w-full h-auto"
                            />

                            {/* <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                /> */}

                            {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div> */}

                            {/* <div className="relative z-10 max-w-3xl px-6 flex flex-col items-center gap-6">
                                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
                                        {slide.description}
                                    </p>

                                    <Button
                                        variant="primary"
                                        icon={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        }
                                        iconPosition="right"
                                        className="mt-4"
                                    >
                                        {slide.btnText}
                                    </Button>
                                </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
