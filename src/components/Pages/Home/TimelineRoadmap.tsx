import React from 'react';
import Image from 'next/image';
import { path } from "@/utils/path";

const timelineData = [
  {
    id: '1993',
    year: '1993',
    description: 'Founded in Malaysia\nin 1993 by Prof. Dr.\nDino Wong',
    image: '1993.webp',
    position: 'bottom',
    color: '#4B5A76',
  },
  {
    id: '2004',
    year: '2004',
    description: 'UCMAS started\noperations in Canada',
    image: '2004.webp',
    position: 'top',
    color: '#00A6DA',
  },
  {
    id: '2006',
    year: '2006',
    description: 'First UCMAS Abacus &\nMental Math National\nCompetition',
    image: '2006.webp',
    position: 'bottom',
    color: '#435370',
  },
  {
    id: '2011',
    year: '2011',
    description: 'Received the\nFirst CFA Award',
    image: '2011.webp',
    position: 'top',
    color: '#00A6DA',
  },
  {
    id: '2016',
    year: '2016',
    description: 'Best CEO in Education\nAward presented to\nMegha Karia',
    image: '2016.webp',
    position: 'bottom',
    color: '#4B5A76',
  },
  {
    id: '2017',
    year: '2017',
    description: 'Introduced the\nUCMAS 6-Finger\nTechnique',
    image: '2017.webp',
    position: 'top',
    color: '#00A6DA',
  },
  {
    id: '2018',
    year: '2018',
    description: 'Guinness World Record\n- Largest Abacus\nLesson',
    image: '2018.webp',
    position: 'bottom',
    color: '#4B5A76',
  },
  {
    id: '2024',
    year: '2024',
    description: "CFA Franchisees'\nChoice Winner for the\n14th Consecutive Year",
    image: '2024.webp',
    position: 'top',
    color: '#00A6DA',
  },
];

// Helper to calculate chevron shape for Desktop
const getClipPath = (index, totalItems) => {
  const arrowWidth = 20; // Adjusted for better fit on all desktop screens without scrolling
  if (index === 0) {
    return `polygon(0% 0%, calc(100% - ${arrowWidth}px) 0%, 100% 50%, calc(100% - ${arrowWidth}px) 100%, 0% 100%)`;
  }
  if (index === totalItems - 1) {
    return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, ${arrowWidth}px 50%)`;
  }
  return `polygon(0% 0%, calc(100% - ${arrowWidth}px) 0%, 100% 50%, calc(100% - ${arrowWidth}px) 100%, 0% 100%, ${arrowWidth}px 50%)`;
};

// Component for Desktop View (Horizontal, No Scroll, Fluid Width)
const DesktopTimelineItem = ({ item, index, totalItems }) => {
  const isTop = item.position === 'top';
  const isBottom = item.position === 'bottom';
  const marginOffset = index === 0 ? '0px' : '-20px';

  return (
    <div
      className="relative flex flex-col items-center flex-1 group"
      style={{ marginLeft: marginOffset }}
    >
      {/* Top Content */}
      <div className="h-45 xl:h-50 w-full flex flex-col justify-end items-center pb-9 xl:pb-11 relative">
        {isTop && (
          <>
            <div className="flex flex-col items-center justify-end h-full z-10 transition-transform duration-300 ">
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-2 xl:mb-3 overflow-hidden border border-gray-200 relative shrink-0">
                <Image src={`${path}/images/${item.image}`} alt={item.year} fill className="object-cover" />
              </div>
              <p className="text-[.8rem]  text-section-heading-paragraph leading-snug font-medium  text-center  whitespace-pre-line px-1 xl:px-2">
                {item.description}
              </p>
            </div>
            <div className="absolute bottom-0 w-0.5 h-6 xl:h-8 transition-all duration-300 " style={{ backgroundColor: item.color }}>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 xl:w-1.25 xl:h-1.25 rotate-45" style={{ backgroundColor: item.color }} />
            </div>
          </>
        )}
      </div>

      {/* Chevron Block */}
      <div
        className="h-12 xl:h-15 w-full flex items-center justify-center text-white text-base xl:text-xl font-semibold  relative z-20 shadow-sm transition-transform duration-300"
        style={{
          backgroundColor: item.color,
          clipPath: getClipPath(index, totalItems),
        }}
      >
        <span className={index !== 0 ? 'ml-2.5 xl:ml-3 font-semibold' : ''}>{item.year}</span>
      </div>

      {/* Bottom Content */}
      <div className="h-45 xl:h-50 w-full flex flex-col justify-start items-center pt-9 xl:pt-11 relative">
        {isBottom && (
          <>
            <div className="absolute top-0 w-0.5 h-6 xl:h-8 transition-all duration-300  " style={{ backgroundColor: item.color }}>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 xl:w-1.25 xl:h-1.25 rotate-45" style={{ backgroundColor: item.color }} />
            </div>
            <div className="flex flex-col items-center justify-start h-full z-10 transition-transform duration-300   mt-1 xl:mt-2">
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden border border-gray-200 mb-2 xl:mb-3 relative shrink-0">
                <Image  src={`${path}/images/${item.image}`} alt={item.year} fill className="object-cover" />
              </div>
              <p className="text-[.8rem]  text-section-heading-paragraph leading-snug font-medium  text-center  whitespace-pre-line px-1 xl:px-2">
                {item.description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Component for Mobile View (Vertical Cards with specific image style)
const MobileTimelineItem = ({ item }) => {
  return (
    <div className="my-container mx-auto mb-4   flex flex-col  overflow-hidden">
      {/* Header / Year Block with downward triangle */}
      <div
        className="relative w-full py-2 flex justify-center items-center rounded-xl "
        style={{ backgroundColor: item.color }}
      >
        <span className="text-white text-base font-semibold tracking-wide">{item.year}</span>
        {/* Downward Triangle */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-12"
          style={{ borderTopColor: item.color }}
        />
      </div>

      {/* Content Area */}
      <div className="flex items-center  gap-2  pt-7 pb-4 ">
        <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm   relative bg-white flex items-center justify-center border border-gray-200 shrink-0">
          <Image  src={`${path}/images/${item.image}`} alt={item.year} fill className="object-cover" />
        </div>
        <p className="text-[.95rem]  text-section-heading-paragraph leading-snug font-medium      px-1 xl:px-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default function TimelineRoadmap() {
  return (
    <div className="w-full ">
      <div className=" mx-auto ">

        {/* --- DESKTOP VIEW (Horizontal Chevron Line - No Scroll, Flex-1) --- */}
        <div className="hidden lg:flex flex-row items-center justify-between w-full pb-8">
          {timelineData.map((item, index) => (
            <DesktopTimelineItem
              key={item.id}
              item={item}
              index={index}
              totalItems={timelineData.length}
            />
          ))}
        </div>

        {/* --- MOBILE & TABLET VIEW (Vertical Stacked Cards) --- */}
        <div className="flex lg:hidden flex-col w-full py-4">
          {timelineData.map((item) => (
            <MobileTimelineItem key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}