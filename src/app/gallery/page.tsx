"use client";

import { useState, useMemo } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

// LightGallery Core & Plugin Components
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgRotate from 'lightgallery/plugins/rotate';

// LightGallery Modular Stylesheets
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-rotate.css';

import {
  Search,
  Maximize2,
  FolderHeart,
  Sparkles
} from "lucide-react";

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

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return GALLERY_IMAGES.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="w-full bg-slate-50 text-slate-800 py-20 px-4 sm:px-8 md:px-16 min-h-screen select-none">
      <div className="my-container mx-auto space-y-10">

        {/* Navigation & Header Title Area */}
        <div className="border-b border-slate-200 pb-6">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-orange-500" /> High Performance Space
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-600 italic pr-2">Media Canvas</span>
          </h2>
        </div>

        {/* Combined Sorting Controller & Search Matrix Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">

          {/* Sort Left Side */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              Sort:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all duration-300 ${activeCategory === cat
                    ? "bg-linear-to-r from-amber-500 to-orange-600 text-white shadow-[0_4px_14px_rgba(245,158,11,0.3)] scale-105"
                    : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Searchbar Right Side */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search matrices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
            />
          </div>
        </div>

        {/* LightGallery Global Theme & Toolbar Sizing Controls Injection */}
        <style jsx global>{`.lg-backdrop{background-color:rgb(4 7 20 / .99)!important;backdrop-filter:blur(12px)}.lg-toolbar{gap:0.85rem!important;padding-right:1.5rem!important}.lg-toolbar .lg-icon,.lg-toolbar .lg-rotate-left,.lg-toolbar .lg-rotate-right,.lg-toolbar .lg-flip-hor,.lg-toolbar .lg-flip-ver,.lg-toolbar #lg-toggle-thumb{height:2.75rem!important;width:2.75rem!important;font-size:1.25rem!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}.lg-outer .lg-thumb-outer{background-color:#020617!important;border-top:1px solid #1e293b}.lg-outer .lg-thumb-item{border-radius:10px;border:2px solid #334155!important;transition:border-color 0.2s ease}.lg-outer .lg-thumb-item.active{border-color:#f59e0b!important}`}</style>

        {/* Standard Unified LightGallery Grid Container */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full py-28 flex flex-col items-center justify-center border border-dashed border-slate-300 rounded-2xl text-center bg-white"
            >
              <FolderHeart className="w-10 h-10 text-slate-300 mb-3" />
              <p className="text-sm font-bold text-slate-400">No assets matching filters located inside scope</p>
            </motion.div>
          ) : (
            <LightGallery
              speed={400}
              // plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate]}
              plugins={[lgThumbnail, lgZoom]}
              elementClassNames="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              licenseKey="0000-0000-0000-0000"
              download={true}
              autoplay={true}
              slideShowAutoplay={false}
              progressBar={true}
              mode="lg-fade"
              counter={true}
              rotate={true}
              flipHorizontal={true}
              flipVertical={true}
              toggleThumb={true}
              allowMediaOverlap={true}
            >
              {filteredItems.map((item) => (
                <a
                  key={item.id}
                  href={item.src}
                  data-src={item.src}
                  data-sub-html={`<h4 style="font-size: 1.5rem; font-weight:900; color:#f59e0b; margin-bottom:4px;">${item.title}</h4><p style="color:#cbd5e1; font-size:0.875rem;">${item.description}</p>`}
                  className="relative w-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl group cursor-pointer transition-all duration-300 aspect-4/3 block"
                >
                  <div className="relative w-full h-full">
                    <Image
                      quality={95}
                      width={600}
                      height={450}
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Interaction Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                      <span className="text-xs font-black text-white bg-amber-500 px-2.5 py-0.5 rounded uppercase tracking-wider w-max inline-block">
                        {item.category}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 flex items-center justify-between gap-2 leading-tight">
                        {item.title}
                        <span className="bg-white p-1.5 rounded-lg border border-slate-200 text-amber-600 shadow-sm">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </LightGallery>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}