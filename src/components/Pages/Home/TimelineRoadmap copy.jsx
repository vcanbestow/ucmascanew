"use client";

import React from "react";
import { motion } from "framer-motion";

const TIMELINE_DATA = [
  { year: "1993", text: "Founded in Malaysia in 1993 by Prof. Dr. Dino Wong", img: "https://via.placeholder.com/40" },
  { year: "2004", text: "UCMAS started operations in Canada", img: "https://via.placeholder.com/40" },
  { year: "2006", text: "First UCMAS Abacus & Mental Math National Competition", img: "https://via.placeholder.com/40" },
  { year: "2011", text: "Received the First CFA Award", img: "https://via.placeholder.com/40" },
  { year: "2016", text: "Best CEO in Education Award presented to Megha Karia", img: "https://via.placeholder.com/40" },
  { year: "2017", text: "Introduced the UCMAS i-Finger Technique", img: "https://via.placeholder.com/40" },
  { year: "2018", text: "Guinness World Record – Largest Abacus Lesson", img: "https://via.placeholder.com/40" },
  { year: "2024", text: "CFA Franchisees' Choice Winner for the 14th Consecutive Year", img: "https://via.placeholder.com/40" }
];

export default function TimelineRoadmap() {
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2.5, ease: "easeInOut" }
    }
  };

  const contentVariants = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: delay, duration: 0.5, ease: "easeOut" }
    }
  });

  return (
    <div className="w-full bg-[#E5E9EC] py-20 px-4 overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (Strict Tailwind Scaling Framework)                        */}
      {/* ========================================================================= */}
      <div className="hidden lg:block w-full max-w-7xl mx-auto">
        <div className="relative w-full aspect-[1200/500]">
          
          {/* Responsive SVG Line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.06)]"
            viewBox="0 0 1200 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 0 320 
                 H 130 
                 A 40 40 0 0 0 170 280 
                 V 180 
                 A 40 40 0 0 1 210 140 
                 H 310 
                 A 40 40 0 0 1 350 180 
                 V 400 
                 A 40 40 0 0 0 390 440 
                 H 510 
                 A 40 40 0 0 0 550 400 
                 V 260 
                 A 40 40 0 0 1 590 220 
                 H 670 
                 A 40 40 0 0 1 710 260 
                 V 400 
                 A 40 40 0 0 0 750 440 
                 H 830 
                 A 40 40 0 0 0 870 400 
                 V 130 
                 A 40 40 0 0 1 910 90 
                 H 1010 
                 A 40 40 0 0 1 1050 130 
                 V 280 
                 A 40 40 0 0 0 1090 320 
                 H 1200"
              stroke="#00A8E8"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </svg>

          {/* Absolute Nodes Positioned strictly using Aspect Scaling Percentages */}
          
          {/* 1. 1993 - Left side of the line, Text Right-Aligned */}
          <motion.div variants={contentVariants(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-end text-right w-52 -translate-x-1/2 -translate-y-1/2 pr-6" 
            style={{ left: "10.5%", top: "45%" }}
          >
            <img src={TIMELINE_DATA[0].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[0].text}</p>
            
            {/* Year Row containing the Dot centered precisely inline with Year text */}
            <div className="relative w-full mt-0.5">
              <h4 className="text-base font-black text-[#EF4444]">{TIMELINE_DATA[0].year}</h4>
              <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute right-[-24px] top-1/2 -translate-y-1/2 shadow-sm z-20" />
            </div>
          </motion.div>

          {/* 2. 2004 - Top First Node */}
          <motion.div variants={contentVariants(0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-center text-center w-44 -translate-x-1/2" 
            style={{ left: "23.5%", top: "4%" }}
          >
            <img src={TIMELINE_DATA[1].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[1].text}</p>
            <h4 className="text-base font-black text-[#EF4444] mt-0.5">{TIMELINE_DATA[1].year}</h4>
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute bottom-[-41px] shadow-sm z-20" />
          </motion.div>

          {/* 3. 2006 - Bottom First Node */}
          <motion.div variants={contentVariants(0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-center text-center w-44 -translate-x-1/2" 
            style={{ left: "29%", top: "54%" }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute top-[-42px] shadow-sm z-20" />
            <img src={TIMELINE_DATA[2].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[2].text}</p>
            <h4 className="text-base font-black text-[#EF4444] mt-0.5">{TIMELINE_DATA[2].year}</h4>
          </motion.div>

          {/* 4. 2011 - Bottom Middle Node */}
          <motion.div variants={contentVariants(0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-center text-center w-44 -translate-x-1/2" 
            style={{ left: "39.5%", top: "70%" }}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute top-[-43px] shadow-sm z-20" />
            <img src={TIMELINE_DATA[3].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[3].text}</p>
            <h4 className="text-base font-black text-[#EF4444] mt-0.5">{TIMELINE_DATA[3].year}</h4>
          </motion.div>

          {/* 5. 2016 - Center Peak Node */}
          <motion.div variants={contentVariants(1.0)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-center text-center w-44 -translate-x-1/2" 
            style={{ left: "52.8%", top: "20%" }}
          >
            <img src={TIMELINE_DATA[4].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[4].text}</p>
            <h4 className="text-base font-black text-[#EF4444] mt-0.5">{TIMELINE_DATA[4].year}</h4>
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute bottom-[-44px] shadow-sm z-20" />
          </motion.div>

          {/* 6. 2017 - Right side of the vertical drop, Text Left-Aligned */}
          <motion.div variants={contentVariants(1.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-start text-left w-52 -translate-x-1/2 -translate-y-1/2 pl-6" 
            style={{ left: "62.5%", top: "54%" }}
          >
            <img src={TIMELINE_DATA[5].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[5].text}</p>
            
            {/* Year Row containing the Dot centered precisely inline with Year text */}
            <div className="relative w-full mt-0.5">
              <h4 className="text-base font-black text-[#EF4444]">{TIMELINE_DATA[5].year}</h4>
              <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute left-[-24px] top-1/2 -translate-y-1/2 shadow-sm z-20" />
            </div>
          </motion.div>

          {/* 7. 2018 - Left side of the right vertical line, Text Right-Aligned */}
          <motion.div variants={contentVariants(1.4)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-end text-right w-52 -translate-y-1/2" 
            style={{ left: "64.5%", top: "60%" }}
          >
            <img src={TIMELINE_DATA[6].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[6].text}</p>
            
            {/* Year Row containing the Dot centered precisely inline with Year text */}
            <div className="relative w-full mt-0.5">
              <h4 className="text-base font-black text-[#EF4444]">{TIMELINE_DATA[6].year}</h4>
              <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute right-[-24px] top-1/2 -translate-y-1/2 shadow-sm z-20" />
            </div>
          </motion.div>

          {/* 8. 2024 - Top Final Apex Node */}
          <motion.div variants={contentVariants(1.6)} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            className="absolute flex flex-col items-center text-center w-48 -translate-x-1/2" 
            style={{ left: "81.8%", top: "0%" }}
          >
            <img src={TIMELINE_DATA[7].img} alt="" className="w-10 h-10 rounded-full mb-1 border border-white" />
            <p className="text-[10px] font-medium text-[#4A5568] leading-tight">{TIMELINE_DATA[7].text}</p>
            <h4 className="text-base font-black text-[#EF4444] mt-0.5">{TIMELINE_DATA[7].year}</h4>
            <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444] border-2 border-white absolute bottom-[-42px] shadow-sm z-20" />
          </motion.div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE RESPONSIVE LAYOUT                                                  */}
      {/* ========================================================================= */}
      <div className="block lg:hidden relative pl-8 border-l-4 border-[#00A8E8]/50 ml-6 mr-4 space-y-12">
        {TIMELINE_DATA.map((milestone, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-start bg-white p-5
             rounded-xl shadow-sm border border-gray-100"
          >
            <div className="absolute left-[-42px] top-6 w-4 h-4 rounded-full bg-[#EF4444] border-4 border-[#E5E9EC]" />
            <div className="flex items-center gap-3 mb-2">
              <img src={milestone.img} alt="" className="w-8 h-8 rounded-full border border-gray-200" />
              <span className="text-xl font-black text-[#EF4444]">{milestone.year}</span>
            </div>
            <p className="text-sm text-[#4A5568] font-medium leading-relaxed">{milestone.text}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}