"use client";

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  HelpCircle,
  ChevronRight,
  GraduationCap,
  Compass,
  ArrowLeft,
  MoveRight, ArrowRight, MapPin,
  MoveLeft
} from 'lucide-react';
import { motion } from "framer-motion";
import Button from "@/components/UI/Button";
import { section } from 'framer-motion/client';

const EducationIllustration = () => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto drop-shadow-2xl"
  >
    {/* Background Abstract Shapes */}
    <circle cx="300" cy="200" r="180" fill="url(#grad1)" opacity="0.4" />
    <path d="M150 100 Q 250 50 350 150 T 500 200" stroke="#E2E8F0" strokeWidth="4" fill="none" strokeDasharray="10 10" />
    <path d="M100 300 Q 200 350 300 250 T 550 150" stroke="#CBD5E1" strokeWidth="2" fill="none" strokeDasharray="5 5" />

    {/* Floating Elements */}
    <g>
      <rect x="120" y="80" width="40" height="40" rx="8" fill="#F87171" opacity="0.8" transform="rotate(15 140 100)" />
      <text x="140" y="105" fontSize="20" fill="white" textAnchor="middle" transform="rotate(15 140 100)">A+</text>
    </g>

    <g>
      <circle cx="480" cy="120" r="25" fill="#60A5FA" opacity="0.8" />
      <path d="M470 120 L490 120 M480 110 L480 130" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </g>

    <g>
      <polygon points="450,300 480,350 420,350" fill="#FBBF24" opacity="0.8" transform="rotate(-15 450 325)" />
    </g>

    {/* Main Illustration: Telescope/Discovery theme combined with books */}
    <g transform="translate(180, 150)">
      {/* Stack of Books */}
      <path d="M40 140 L200 140 L220 160 L60 160 Z" fill="#4F46E5" />
      <path d="M40 140 L60 160 L60 180 L40 160 Z" fill="#4338CA" />
      <path d="M60 160 L220 160 L220 180 L60 180 Z" fill="#E0E7FF" />

      <path d="M30 110 L190 110 L210 130 L50 130 Z" fill="#06B6D4" />
      <path d="M30 110 L50 130 L50 150 L30 130 Z" fill="#0891B2" />
      <path d="M50 130 L210 130 L210 150 L50 150 Z" fill="#CFFAFE" />

      {/* Graduation Cap resting on books */}
      <g transform="translate(60, 40) scale(0.8) rotate(-10)">
        <path d="M60 0 L120 30 L60 60 L0 30 Z" fill="#1E293B" />
        <path d="M60 60 L60 85 C60 95 90 95 90 85 L90 45" fill="#334155" />
        <path d="M30 45 L30 70 L5 70" stroke="#F59E0B" strokeWidth="4" fill="none" />
        <circle cx="5" cy="75" r="5" fill="#F59E0B" />
      </g>

      {/* 404 Text hovering */}
      <text x="120" y="30" fontSize="72" fontWeight="800" fill="#1E293B" opacity="0.1" textAnchor="middle" className="">404</text>
    </g>

    {/* Compass pointing off-course */}
    <g transform="translate(380, 220) scale(0.7)">
      <circle cx="50" cy="50" r="45" fill="white" stroke="#E2E8F0" strokeWidth="4" />
      <circle cx="50" cy="50" r="35" fill="#F8FAFC" />
      <path d="M50 15 L60 50 L50 85 L40 50 Z" fill="#EF4444" />
      <path d="M50 50 L60 50 L50 85 L40 50 Z" fill="#94A3B8" />
      <circle cx="50" cy="50" r="5" fill="#1E293B" />
    </g>

    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

// const PopularCategories = ({ isMounted }: { isMounted: boolean }) => {
//   const categories = [
//     { name: 'Computer Science', icon: <Compass className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600', href: '/category/cs' },
//     { name: 'Data Science', icon: <Search className="w-5 h-5" />, color: 'bg-emerald-100 text-emerald-600', href: '/category/data' },
//     { name: 'Business', icon: <GraduationCap className="w-5 h-5" />, color: 'bg-purple-100 text-purple-600', href: '/category/business' },
//   ];

//   return (
//     <div className={`mt-12 transform transition-all duration-1000 ease-out delay-[600ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//       <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
//         Explore karne ke liye popular categories
//       </h3>
//       <div className="flex flex-wrap gap-3">
//         {categories.map((cat, index) => (
//           <a
//             key={index}
//             href={cat.href}
//             className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group cursor-pointer"
//           >
//             <span className={`p-1.5 rounded-full ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
//               {cat.icon}
//             </span>
//             <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
//               {cat.name}
//             </span>
//             <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Ye effect pure tailwind classes ka use karke fade-in animation trigger karta hai
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="bg-slate-50 relative before:absolute before:inset-0 before:bg-linear-to-tr before:from-indigo-50 before:to-cyan-50 before:opacity-30 after:*:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:to-white after:opacity-50">
      <div className="  flex items-center justify-center  overflow-hidden relative ">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-3xl opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-50 blur-3xl opacity-60"></div>
        </div>

        <div className="my-container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            {/* Left Column: Content */}
            <div className="flex-1 w-full max-w-2xl z-10">

              {/* Header/Breadcrumb area */}
              {/* <div className={`flex items-center gap-2 mb-8 transform transition-all duration-1000 ease-out delay-[100ms] ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">EduLearn</span>
            </div> */}

              {/* Error Message */}
              <div className={`transform transition-all flex flex-col gap-5 duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight  leading-[1.1] ">
                  Oops! This Page  <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-ucmas-red to-ucmas-themeblue">
                    Missed the Class.
                  </span>
                </h1>

                <p className="lg:text-lg text-slate-600 max-w-lg leading-relaxed">
                  The page you're looking for couldn't be found. It may have been moved, deleted, or the URL might be incorrect. Don't worry—you can continue your learning journey from here.
                </p>
                <div className={`flex flex-col sm:flex-row   gap-4 transform transition-all duration-1000 ease-out delay-400 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>


                  <motion.div className="" initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.2 }}>
                    <Button
                      variant="ucmas_red_btn"
                      href="/"
                      icon={<MoveLeft size={20} strokeWidth={2} />}
                      iconPosition="left"
                      className=""
                    >
                      Go to Homepage
                    </Button>
                  </motion.div>
                  {/* <motion.div className="" initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}>
                <Button
                  variant="header_ucmas_white_btn_outline"
                  href="#"
                  icon={<MoveRight size={20} strokeWidth={2} />}
                  iconPosition="right"
                  className="px-4 sm:px-8 py-2.75!"
                >
                  View All Events
                </Button>
              </motion.div> */}


                </div>

              </div>

              {/* Search Bar */}
              {/* <div className={`mb-8 transform transition-all duration-1000 ease-out delay-300ms ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <form onSubmit={handleSearch} className="relative max-w-md group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-32 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
                  placeholder="Courses search karein..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
                >
                  Search karein
                </button>
              </form>
            </div> */}

              {/* CTAs */}

              {/* Popular Categories */}
              {/* <PopularCategories isMounted={isMounted} /> */}
              <motion.h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-8" initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.2 }}>
                Ready to Start Your Learning Journey?
              </motion.h3>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                > <Button variant="header_ucmas_sky_btn" href="#" icon={<MapPin size={17} strokeWidth={2} />} iconPosition="left" className=" w-50! sm:w-max! font-medium">
                    Find Centre
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                > <Button variant="header_ucmas_red_btn" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className=" w-50! sm:w-max! font-medium">
                    Book FREE Trial
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                > <Button variant="header_ucmas_white_btn_outline" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className=" w-50! sm:w-max! font-medium">
                    Register Now
                  </Button>
                </motion.div>
              </div>
              {/* Support Link */}
              <motion.div className={`mt-12 flex flex-wrap items-center gap-2 text-sm text-slate-500 transform transition-all duration-1000 ease-out delay-800 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}>
                <span className="flex  gap-1">
                  <HelpCircle className="w-4 h-4 mt-1" />
                  <span>Need Help Finding Something?</span>
                </span>
                <a href="#" className="text-ucmas-sky/80 font-medium hover:underline hover:text-ucmas-sky transition-colors">
                  Contact Support
                </a>
              </motion.div>

            </div>

            {/* Right Column: Illustration */}
            <div className={`flex-1 w-full max-w-xl lg:max-w-none relative hidden md:block transform transition-all duration-1000    ease-out delay-500 ${isMounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
              {/* <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/60 shadow-2xl shadow-indigo-100/50 -z-10 transform rotate-3 scale-105"></div>
              <div className="absolute inset-0 bg-linear-to-tr from-indigo-50 to-cyan-50 rounded-[3rem] -z-20 transform -rotate-2 scale-105 "></div> */}

              <div className="relative">
                <EducationIllustration />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}