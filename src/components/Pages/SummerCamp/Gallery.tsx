'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion"; // <-- Added framer-motion

// LightGallery Imports
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import SmallSectionHeading from '@/components/UI/SmallSectionHeading';
import { path } from '@/utils/path';

// LightGallery Stylesheets
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Placeholder images - Replace these with your actual local or remote image paths
const GALLERY_IMAGES = [
    { id: 1, src: "camp1-2.webp" },
    { id: 2, src: "camp2-1.webp" },
    { id: 3, src: "s-camp-2.webp" },
    { id: 4, src: "s.camp-1-2.webp" },
    { id: 5, src: "su-2.webp" },
    { id: 6, src: "sumer_camp-2.webp" },
    { id: 7, src: "sumer-2.webp" },
    { id: 8, src: "sumer123-2.webp" },
    { id: 9, src: "summer-2.webp" },
    { id: 10, src: "summercamp1-min.webp" },
    { id: 11, src: "summercamp2-min.webp" },
    { id: 12, src: "summercamp3-min.webp" },
]; 

export default function SummerWorkshopSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Duplicate array to create a seamless infinite marquee scroll effect
    const duplicatedGallery = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

    if (!mounted) return null;

    return (
        <section className="w-full py-0! overflow-hidden">

            <div className="w-full text-center">
                <SmallSectionHeading titleTop="Gallery" highlightText="" className="" />

                {/* Global styles for animation and LightGallery Backdrop */}
                <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-marquee{animation:35s linear infinite marquee}.group:hover .animate-marquee{animation-play-state:paused}.lg-backdrop{background-color:rgba(4,7,20,.95)!important;backdrop-filter:blur(.5rem)}`}</style>

                <div className="relative w-full group overflow-hidden mt-6">
                    {/* Notice elementClassNames applied directly to LightGallery. */}
                    <LightGallery
                        speed={400}
                        plugins={[lgZoom]}
                        elementClassNames="flex w-max animate-marquee gap-4 px-2"
                        download={false}
                        counter={false}
                        mode="lg-fade"
                    >
                        {duplicatedGallery.map((img, index) => {
                            // Har image ke liye alag duration aur delay calculate kar rahe hain
                            // Modulo (%) ka use kiya hai taaki values ek range mein rahein
                            const customDuration = 0.5 + (index % 4) * 0.25; // Ex: 0.5s, 0.75s, 1.0s, 1.25s
                            const customDelay = (index % GALLERY_IMAGES.length) * 0.1; // Stagger effect

                            return (
                                <motion.a
                                    // Combining ID and Index to ensure unique keys since we duplicated the array
                                    key={`${img.id}-${index}`}
                                    href={`${path}/images/summercampgallery/${img.src}`}
                                    
                                    // Framer Motion Animation Properties
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: customDuration,
                                        delay: customDelay,
                                        ease: "easeOut"
                                    }}
                                    
                                    className="relative shrink-0 block w-50 h-70 sm:w-60 sm:h-80 rounded-xl overflow-hidden border shadow-md cursor-pointer border-ucmas-blue"
                                >
                                    <Image
                                        src={`${path}/images/summercampgallery/${img.src}`}
                                        alt={`Gallery Image ${index + 1}`}
                                        fill
                                        sizes="(max-width: 40rem) 12.5rem, 15rem"
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </motion.a>
                            );
                        })}
                    </LightGallery>
                </div>
            </div>

        </section>
    );
}