'use client';

import SectionTitle from "@/components/UI/SectionTitle";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


export default function CognitiveCalculator() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form Values States
  const [age, setAge] = useState(8); // Default state initial value
  const [selectedClass, setSelectedClass] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalSlides = 3;
  const minAge = 5;
  const maxAge = 15;

  /* ========================================================================
    BOTTOM-TO-TOP INCREMENT MATH LOGIC
    ========================================================================
    HTML5 range inputs elements elements visually fill left-to-right. 
    When we rotate -270deg, left maps to BOTTOM and right maps to TOP.
    To make sliding towards TOP increase the number, we invert the raw value:
  */
  const handleSliderChange = (e) => {
    const nativeValue = parseInt(e.target.value);
    // Invert calculation so pushing up increases value
    const bottomToTopValue = maxAge + minAge - nativeValue;
    setAge(bottomToTopValue);
  };

  // Visual tracking math for tailwind fill calculation background 
  const sliderPercentage = ((age - minAge) / (maxAge - minAge)) * 100;
  const nativeInputValue = maxAge + minAge - age;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (currentSlide === totalSlides - 1) {
      console.log("Form Completed Successfully!", { age, selectedClass, subject });
      setCurrentSlide(totalSlides);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <section className="CognitiveCalculator !pb-0">
        {/* Top Header Section Content Title */}
        <div className=''>
          {/* SectionTitle implementation example */}
          {/* <SectionTitle ParaclassName="md:max-w-4/5 mx-auto"
            titleTop={<>Not Just Tutoring.</>}
            titleBottom=""
            highlightText={<>A Proven <br className="hidden lg:block" />Brain Development Program</>}
            subtitle={[
              "UCMAS is a globally recognized brain development program based on Abacus and Mental Math for children aged 5–13 years.",
              "Founded in Malaysia in 1993 by Prof. Dr. Dino Wong, UCMAS has grown into one of the world's leading child development programs, helping children strengthen essential cognitive skills. Over the years, UCMAS has evolved from traditional abacus learning to offering the world's most advanced 6-Finger Abacus Technique. It enables children to perform complex math calculations with exceptional speed and accuracy.",
              "Since its introduction to Canada in 2003, UCMAS has earned the trust of thousands of parents. Today, the program is widely recognized as one of Canada's premier after-school programs, helping children build lifelong skills and success.",
            ]}
            titleColor="text-ucmas-blue"
            highlightColor="text-ucmas-sky"
            subtitleColor="text-section-heading-paragraph"
            lineColor="#1e2e54"
          /> */}
          <SectionTitle
            ParaclassName="md:max-w-4/5 mx-auto"
            titleTop={<>Not Just Tutoring.</>}
            titleBottom=""
            highlightText={<>A Proven <br className="hidden lg:block" />Brain Development Program</>}
            subtitle={[
              <>
                When it comes to afterschool classes for kids, as a parent, you want to choose only the best, result-oriented program for your child. That's exactly why parents across Canada choose UCMAS.
                <br /> 
                Since its inception, the UCMAS Abacus and Mental Math program has helped kids aged 5 to 13 build minds that are sharper, faster, and ready for anything. Founded in Malaysia, the program has grown into one of the world's most trusted child development programs, one that builds transferable skills like focus, memory, and problem-solving skills your child can carry into every subject, every challenge, and every stage of life.
              </>
            ]}
            titleColor="text-ucmas-blue"
            highlightColor="text-ucmas-sky"
            // यहाँ Tailwind की कॉलम और अलाइनमेंट क्लासेस जोड़ दी हैं
            subtitleColor="text-section-heading-paragraph md:columns-2 gap-10 text-justify leading-[1.8]"
            lineColor="#1e2e54"
          />
        </div>

        {/* MAIN LAYOUT WRAPPER */}


        <div className="my-container  grid grid-cols-12 relative mt-6 lg:mt-10">
          <div className="relative lg:col-start-3 col-span-12 lg:col-span-8">
            <div className="relative flex flex-col md:flex-row min-h-95 bg-[#162E51] rounded-tl-4xl rounded-tr-3xl p-8 md:p-12 lg:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.25)] z-10">

              {/* Left Side Kid Image - Absolute Outside Left */}
              <div className="absolute left-[-2.8125rem] lg:left-[-6.125rem] xl:left-[-5.5rem] 2xl:left-[-5.3125rem] bottom-6 h-[75%] max-h-[17.5rem] md:max-h-[21.25rem] 4xl:left-[-5.35rem] z-25 pointer-events-none hidden lg:block">
                <Image
                  width={400}
                  height={500}
                  src="/images/Child Left.webp"
                  alt="Girl Left"
                  className="h-full w-auto object-contain object-bottom"
                  priority
                />
              </div>

              {/* MAIN COMPONENT BOX BOX */}

              {/* LEFT SECTION INFO PANEL */}
              <div className="w-full md:w-[52%] md:pr-7 md:border-r border-white/10 flex flex-col text-center md:text-left items-center md:items-start pb-8 md:pb-0 justify-center">
                <h2 className="text-3xl lg:text-4xl font-extrabold w-full text-white leading-[1.15] mb-4 tracking-wide">
                 Get Personalized Learning Recommendations
                </h2>
                <h2 className="text-2xl font-extrabold text-white leading-[1.15] mb-4 tracking-wide">
                  Test Your Child's  <br className="hidden lg:block" /> Cognitive Strengths
                </h2>
                <p className="text-xs lg:text-base text-white/60 leading-relaxed max-w-sm">
                  3 questions. 60 seconds. A Free personalised recommendation for your child.
                </p>
              </div>

              {/* RIGHT SLIDER STEPPER BOX */}
              <div className="w-full md:w-[48%] md:pl-10 flex flex-col justify-center relative min-h-55">

                {/* Clickable Dash Pagination Indicators */}
                <div className="flex justify-center gap-3 mb-6">
                  {[...Array(totalSlides)].map((_, idx) => (
                    <button
                      key={idx}
                      disabled={currentSlide === totalSlides}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-14 h-0.75 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
                        }`}
                      aria-label={`Go to step ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Dynamic Steps Router Panels Container */}
                <div className="w-full h-full relative flex flex-col">

                  <div className="flex-grow">
                    {/* Step Slide 1: Inverted Vertical Counter */}
                    {currentSlide === 0 && (
                      <div className="animate-fade-in flex h-full justify-center items-center gap-10">
                        <div className="text-center">
                          <h3 className="text-base font-semibold text-[#8FD3D5] mb-2 tracking-wide">How old is your child?</h3>
                          <div className="text-white select-none">
                            <div className="text-7xl lg:text-8xl font-bold leading-none tracking-tighter tabular-nums">{age}</div>
                            <div className="text-2xl font-medium opacity-90 mt-1">years old</div>
                          </div>
                        </div>

                        {/* Pure CSS Track Rotated Input Range */}
                        <div className="relative h-[11rem] w-6 flex items-center justify-center">
                          <input
                            type="range"
                            min={minAge}
                            max={maxAge}
                            value={nativeInputValue}
                            step="1"
                            onChange={handleSliderChange}
                            className="absolute w-[11rem] h-1 rounded-lg appearance-none cursor-pointer outline-none rotate-90"
                            style={{
                              background: `linear-gradient(to right, rgba(255, 255, 255, 0.2) ${100 - sliderPercentage}%, #ffffff ${100 - sliderPercentage}%)`
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step Slide 2: Selection Field Menu */}
                    {currentSlide === 1 && (
                      <div className="animate-fade-in text-center py-4">
                        <h3 className="text-base font-semibold text-[#8FD3D5] mb-5 tracking-wide">What class are they in?</h3>
                        <select
                          value={selectedClass}
                          onChange={(e) => setSelectedClass(e.target.value)}
                          className="bg-transparent border-2 border-white/20 text-white rounded-xl px-4 py-3 w-[85%] mx-auto block outline-none focus:border-[#9AD5D6] focus:bg-white/5 transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="bg-[#162E51]">Select Class</option>
                          {[1, 2, 3, 4, 5].map((val) => (
                            <option key={val} value={val} className="bg-[#162E51]">Class {val}</option>
                          ))}
                          <option value="other" className="bg-[#162E51]">Other</option>
                        </select>
                      </div>
                    )}

                    {/* Step Slide 3: Subject Info Input Form */}
                    {currentSlide === 2 && (
                      <div className="animate-fade-in text-center py-4">
                        <h3 className="text-base font-semibold text-[#8FD3D5] mb-5 tracking-wide">What is their favorite subject?</h3>
                        <input
                          type="text"
                          placeholder="e.g., Math, Science, Art..."
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="bg-transparent border-2 border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 w-[85%] mx-auto block outline-none focus:border-[#9AD5D6] focus:bg-white/5 transition-colors"
                        />
                      </div>
                    )}

                    {/* Step Slide 4: Completion Confirmation Screen */}
                    {currentSlide === totalSlides && (
                      <div className="animate-fade-in text-center text-white py-4">
                        <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
                          <svg className="w-7 h-7 text-[#9AD5D6]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold mb-1">Thank You!</h3>
                        <p className="text-xs text-white/60">We are generating your custom cognitive analysis report...</p>
                      </div>
                    )}
                  </div>

                  {/* Cyan Action Trigger Next Button (Moved Here) */}
                  <button
                    onClick={handleNext}
                    disabled={currentSlide === totalSlides}
                    className="mx-auto mt-8 px-10 lg:px-16 py-3 bg-[#9AD5D6] text-[#162E51] font-bold text-base rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#b5e2e3] hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none w-fit cursor-pointer"
                  >
                    <span className="tracking-wide">
                      {currentSlide === totalSlides ? 'Submitted' : currentSlide === totalSlides - 1 ? 'Finish' : 'Next'}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
                      {currentSlide === totalSlides ? (
                        <polyline points="20 6 9 17 4 12" />
                      ) : (
                        <>
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </>
                      )}
                    </svg>
                  </button>

                </div>
              </div>

              {/* Right Side Kid Image - Absolute Outside Right */}
              <div className="absolute -right-11.25  lg:-right-43.75 xl:-right-42.75 2xl:-right-41.5 bottom-6 h-[72%] max-h-65 md:max-h-72.5 z-25 pointer-events-none hidden lg:block">
                <Image
                  width={400}
                  height={500}
                  src="/images/Child Right.webp"
                  alt="Girl Right"
                  className="h-full w-auto object-contain object-bottom"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}