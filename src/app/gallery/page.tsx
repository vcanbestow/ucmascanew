"use client";

import { useState } from "react";
import Image from 'next/image';

import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { Eye, Layers, SlidersHorizontal } from "lucide-react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
const CATEGORIES = ["All", "STEM", "Abacus", "Campus Life"];
const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Advanced Autonomous Robotics",
    category: "STEM",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    description: "Students configuring microcontroller processing arrays for custom crawler kits.",
  },
  {
    id: 2,
    title: "Visual Math Training Sessions",
    category: "Abacus",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200",
    description: "Junior groups learning spatial bead tracking coordinates to build mental speed.",
  },
  {
    id: 3,
    title: "National Tech Exposition",
    category: "STEM",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    description: "Software compilation demonstrations on our dedicated sandbox terminal matrix.",
  },
  {
    id: 4,
    title: "Global Leadership Seminar",
    category: "Campus Life",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
    description: "Keynote presentation discussing computational skill requirements in active markets.",
  },
  {
    id: 5,
    title: "Team Collaborative Design",
    category: "Campus Life",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
    description: "Cross-department structural testing schedules running ahead of regional finals.",
  },
  {
    id: 6,
    title: "Early Logic Fundamentals",
    category: "Abacus",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200",
    description: "Kinesthetic teaching methods making arithmetic engaging for early age structures.",
  },
];

export default function AdvancedMegaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [index, setIndex] = useState(-1); // -1 means lightbox closed

  // Category sorting computation
  const filteredItems = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(item => item.category === activeCategory);

  // Formatting assets specifically for Yet-Another-React-Lightbox interface rules
  const slides = filteredItems.map((item) => ({
    src: item.src,
    title: item.title,
    description: item.description,
  }));

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-8 md:px-16">
      <div className="w-full max-w-[1920px] mx-auto">

        {/* Dynamic Navigation Headings */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-bg flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> High Performance Space
            </span>
            <h2 className="text-4xl font-black text-ucmas-blue mt-1 tracking-tight">
              Interactive <span className="text-ucmas-red italic">Media Canvas</span>
            </h2>
          </div>

          {/* Filtering Layout Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-2">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Sort:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 ${activeCategory === cat
                    ? "bg-orange-bg text-white shadow-[0_4px_14px_rgba(255,107,53,0.35)] scale-105"
                    : "bg-white text-ucmas-blue border border-slate-200 hover:bg-slate-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-Style Balanced Waterfall Masonry Grid */}
        <div className="w-full columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setIndex(idx)}
                className="break-inside-avoid relative w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl group cursor-pointer transition-all duration-300"
              >
                {/* Standard Asset Image Tag */}
                <Image
                  quality={100}
                  width={600}
                  height={800}
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Interaction Glass Mesh Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ucmas-blue/90 via-ucmas-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-black text-white bg-orange-bg px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2 flex items-center gap-2 leading-tight">
                      {item.title} <Eye className="w-4 h-4 opacity-75" />
                    </h4>
                    <p className="text-xs text-slate-200 mt-1.5 line-clamp-2 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pro Lightbox Engine Panel with Advanced Controls */}
        <Lightbox
          index={index}
          slides={slides}
          open={index >= 0}
          close={() => setIndex(-1)}
          // Registering Premium Feature Plugins
          plugins={[Zoom, Slideshow, Fullscreen, Download, Captions]}

          // Configuring Action Preferences
          zoom={{
            maxZoomPixelRatio: 4, // Up to 400% zoom capability
            scrollToZoom: true,   // Desktop mouse wheel scroll to zoom
          }}
          slideshow={{
            autoplay: false,
            delay: 4000,          // 4 seconds interval between images
          }}
          captions={{
            descriptionMaxLines: 3,
          }}

          // Customizing Tailwind Styles mapping over Lightbox variables
          styles={{
            container: { backgroundColor: "rgba(10, 15, 30, 0.96)" }, // Deep rich dark blur profile
            captionsTitle: { fontSize: "1.5rem", fontWeight: "700", color: "#ffffff" },
            captionsDescription: { color: "#94a3b8", fontSize: "0.875rem" },
          }}
        />

      </div>
    </section>
  );
}