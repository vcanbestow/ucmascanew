"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Home, 
  Mail, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react";

export default function ThankYouPage() {
  return (
    /* 1. CHANGED FROM bg-slate-50 TO bg-white:
         This makes the page background blend completely invisible against the white footer curve.
    */
    <div className="w-full min-h-[85vh] bg-white text-slate-800 flex items-center justify-center relative overflow-hidden px-4 py-20 selection:bg-amber-500 selection:text-white antialiased">
      
      {/* Premium Cinematic Mesh Gradients (These still look stunning on a white canvas) */}
      <div className="absolute top-[-20%] left-[-10%] w-150 h-150 rounded-full bg-linear-to-br from-amber-400/20 via-orange-400/10 to-transparent blur-[7.5rem] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 rounded-full bg-linear-to-tl from-ucmas-sky/20 via-blue-400/10 to-transparent blur-[7.5rem] pointer-events-none" />

      {/* Main Container Core Box (Slightly darker slate background so the card pops on the white page) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl bg-slate-50/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-[0_1.5rem_3rem_rgba(15,23,42,0.04)] relative z-10 text-center space-y-8"
      >
        
        {/* Sleek Success Icon Container */}
        <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/10 flex items-center justify-center relative z-10"
          >
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute inset-0 rounded-2xl border-2 border-emerald-500/30 z-0"
          />
        </div>

        {/* Dynamic Headings */}
        <div className="space-y-3">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Dispatch Successful
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-none"
          >
            Thank You for Connecting
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-sm md:text-base text-slate-500 font-normal leading-relaxed max-w-sm mx-auto"
          >
            Your dynamic transmission matrix has been logged cleanly. We have deployed a confirmation packet straight to your inbox index.
          </motion.p>
        </div>

        {/* Informational Action Card Capsule */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-5 text-left flex items-start gap-4 shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-slate-50 text-slate-500 border border-slate-200/60 shadow-inner shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-950">Next Node Activation Sequence</h4>
            <p className="text-[11px] text-slate-500 leading-normal font-normal">
              Didn't receive the data envelope inside 2 minutes? Please check your account span/junk arrays or re-initialize submission logs.
            </p>
          </div>
        </motion.div>

        {/* Dual Actions Button Layout Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 pt-2"
        >
          <Link 
            href="/"
            className="w-full sm:w-1/2 py-3.5 px-6 bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:-translate-y-0.5"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" /> Return Home
          </Link>

          <Link 
            href="/blog"
            className="w-full sm:w-1/2 py-3.5 px-6 bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 group"
          >
            Explore Knowledge Matrix
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Subtle Tracking ID Footer Metric */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="pt-4 flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400 select-none"
        >
          <span>SECURE TOKEN INITIALIZED</span>
          <span>•</span>
          <span className="flex items-center gap-0.5 text-slate-600 font-bold">UCMAS-2026 <ArrowUpRight className="w-2.5 h-2.5" /></span>
        </motion.div>

      </motion.div>
    </div>
  );
}