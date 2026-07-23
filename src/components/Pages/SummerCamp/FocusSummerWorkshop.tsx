'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';

// LightGallery Imports
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import SmallSectionHeading from '@/components/UI/SmallSectionHeading';
import { motion } from "framer-motion"; // <-- Added framer-motion

// LightGallery Stylesheets
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Placeholder images - Replace these with your actual local or remote image paths
const GALLERY_IMAGES = [
    { id: 1, src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&h=800&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&h=800&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&h=800&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&h=800&fit=crop" },
    { id: 5, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=800&fit=crop" },
    { id: 6, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&h=800&fit=crop" },
];

export default function FocusSummerWorkshop() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Duplicate array to create a seamless infinite marquee scroll effect
    const duplicatedGallery = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

    if (!mounted) return null;

    return (
        <section className="my-inner-container  overflow-hidden">

            {/* 1. FOCUS SECTION */}
            <div className="my-inner-container max-w-6xl mx-auto    ">

                <div className="text-center pt-10 lg:pt-0">
                    <SmallSectionHeading titleTop="Focus" highlightText="of the Summer Workshop" className="" />
                </div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    {/* Column 1 */}
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Introduction to STEM concepts in a fun way
                        </li>
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Increased confidence
                        </li>
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Boosted creativity
                        </li>
                    </ul>

                    {/* Column 2 */}
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Building interest & long-term academic skills
                        </li>
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Multi-tasking skills
                        </li>
                        <li className="flex items-start gap-2 text-ucmas-blue font-semibold text-sm md:text-base">
                            <span className="text-ucmas-blue mt-1 text-xs">●</span>
                            Teamwork
                        </li>
                    </ul>
                </motion.div>
            </div>



        </section>
    );
}