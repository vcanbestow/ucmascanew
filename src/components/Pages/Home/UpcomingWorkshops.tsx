"use client";

import SectionTitle from "@/components/UI/SectionTitle";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Button from "@/components/UI/Button";
import { MoveRight } from "lucide-react";
// Import all required Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface Workshop {
  id: number;
  title: string;
  description: string;
  image: string;
  dateText: string;
  dayBadge: string;
  location: string;
  registerUrl: string;
}

const workshopData: Workshop[] = [
  {
    id: 1,
    title: "Summer Workshop",
    description:
      "Fun-filled activities that strengthen math skills and prevent summer slide during the summer break.",
    image: "/images/Event Image 1.webp",
    dateText: "June 14-15, 2026",
    dayBadge: "14",
    location: "Toronto, ON",
    registerUrl: "#",
  },
  {
    id: 2,
    title: "Back-to-School Workshop",
    description:
      "Introductory workshop to give first-hand experience of Abacus math calculations before the academic year begins.",
    image: "/images/Event Image 2.webp",
    dateText: "June 14-15, 2026",
    dayBadge: "14",
    location: "Toronto, ON",
    registerUrl: "#",
  },
  {
    id: 3,
    title: "Santa Math Workshop",
    description:
      "A festive learning experience where children enjoy holiday-themed math games, activities, and challenges.",
    image: "/images/Event Image 3.webp",
    dateText: "June 14-15, 2026",
    dayBadge: "14",
    location: "Toronto, ON",
    registerUrl: "#",
  },
  {
    id: 4,
    title: "Kids Robotics Bootcamp",
    description:
      "STEM-based learning camp where kids learn to design & build their own robotic models.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    dateText: "July 21-23, 2026",
    dayBadge: "21",
    location: "Toronto, ON",
    registerUrl: "#",
  },
];

export default function UpcomingWorkshops() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="">
        {/* SectionTitle implementation example */}
        <SectionTitle
          ParaclassName="md:max-w-4/5 mx-auto"
          titleTop={<>Upcoming</>}
          titleBottom=""
          highlightText="Workshops & Camps"
          subtitle={[
            "Join our workshops, camps, and special events where children get first-hand experience of our programs.",
          ]}
          titleColor="text-ucmas-blue"
          highlightColor="text-ucmas-sky"
          subtitleColor="text-section-heading-paragraph"
          lineColor="#1e2e54"
          className="!mb-0"
        />
      </div>

      <div className="flex md:flex-col flex-col-reverse">
        <div className="my-container ">
          {/* Navigation Controls (Top Right) */}
          <div className="flex justify-center md:justify-end mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-ucmas-light-sky hover:bg-cyan-50 hover:border-ucmas-light-sky transition-colors bg-white shadow-sm cursor-pointer"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="stroke-ucmas-light-sky h-6 w-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-ucmas-light-sky hover:bg-cyan-50 hover:border-ucmas-light-sky transition-colors bg-white shadow-sm cursor-pointer"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="stroke-ucmas-light-sky h-6 w-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="my-container 3xl:max-w-full lg:!px-2">   
          <div className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={setSwiperInstance}
              spaceBetween={24}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 3500000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                768: { slidesPerView: 1 },
                992: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
              className="md:!pb-6 select-none"
            >
              {workshopData.map((workshop) => (
                <SwiperSlide key={workshop.id} className="h-auto py-4">
                  {/* Horizontal Card Layout */}
                  <div className="group bg-upcomingevent-bg rounded-xl border border-ucmas-sky p-3 flex flex-col sm:flex-row gap-4 h-full hover:shadow-md hover:scale-[1.01] transition-all duration-300">
                    {/* Image Left */}
                    <div className="w-full sm:w-[40%] shrink-0 h-48 rounded-lg sm:h-44 pointer-events-none overflow-hidden">
                      <Image
                        width={600}
                        height={800}
                        quality={100}
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover group group-hover:scale-105 transition"
                        loading="lazy"
                      />
                    </div>

                    {/* Content Right */}
                    <div className="flex flex-col justify-between flex-grow py-1 pr-1">
                      <div>
                        <h3 className=" text-[1.15rem] font-bold text-ucmas-blue leading-tight">
                          {workshop.title}
                        </h3>
                        <p className="text-xs text-gray-600 min-h-13 mt-2 leading-4.5  line-clamp-3">
                          {workshop.description}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-col gap-3">
                        {/* Date & Location with Mini Calendar Icon */}
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col w-5 h-6 border border-slate-300 rounded-[.25rem] overflow-hidden bg-white shrink-0">
                            <span className="bg-red-600 h-1.5 w-full block"></span>
                            <span className="flex-grow flex items-center justify-center text-[.5625rem] font-bold text-slate-800">
                              {workshop.dayBadge}
                            </span>
                          </div>
                          <span className="text-[.6875rem] font-medium text-slate-600">
                            {workshop.dateText} • {workshop.location}
                          </span>
                        </div>

                        {/* Cyan Register Button */}
                        <div>
                          <Link
                            href={workshop.registerUrl}
                            className="inline-flex items-center justify-center gap-1.5 bg-ucmas-light-sky text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                          >
                            Register Now
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="text-center max-w-11/12 mx-auto px-6 lg:px-12">
        <Button
          variant="ucmas_red_btn_outline"
          href="/contact"
          icon={<MoveRight size={20} strokeWidth={2} />}
          iconPosition="right"
          className="mx-auto"
        >
          View All Events
        </Button>
      </div>
    </section>
  );
}
