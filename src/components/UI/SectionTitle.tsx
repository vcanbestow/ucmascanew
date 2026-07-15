'use client';
import { motion } from "framer-motion";
import { ReactNode } from 'react';

// TypeScript के लिए Props का Interface डिफाइन किया
interface SectionHeadingProps {
    titleTop?: ReactNode;
    titleBottom?: ReactNode;
    highlightText?: ReactNode;
    subtitle?: string | ReactNode[]; // string या React Elements का array
    titleColor?: string;
    highlightColor?: string;
    subtitleColor?: string;
    lineColor?: string;
    className?: string;
    ParaclassName?: string;
}

export default function SectionHeading({
    titleTop = '',
    titleBottom = '',
    highlightText = '',
    subtitle = '',
    titleColor = 'text-ucmas-blue',
    highlightColor = 'text-ucmas-red',
    subtitleColor = 'text-section-heading-paragraph',
    lineColor = '#1e2e54',
    className = '',
    ParaclassName = '',
}: SectionHeadingProps) {  
    return (
        <>
            <div className="my-container  ">
                <div className={`${className} mb-10 lg:mb-18`}> 
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="md:flex gap-3 xl:gap-10 items-center justify-center w-full mx-auto"
                    >
                        {/* Left Line */}
                        <div className=" w-26 lg:w-48 hidden md:flex items-center  justify-end">
                            <div
                                className="w-full h-0.5 "
                                style={{
                                    background: `linear-gradient(to left, ${lineColor} 0%, transparent 100%)`,
                                }}
                            />
                        </div>

                        {/* Heading */}
                        <div className="text-center">
                            <h2>
                                {titleTop && (
                                    <span
                                        className={`font-extrabold leading-[1.1] tracking-[-0.02em] text-3xl md:text-4xl  ${titleColor} ${titleBottom || highlightText ? 'mb-1' : 'mb-0'
                                            }`}
                                        align-items="center">
                                        {titleTop}
                                    </span>
                                )}

                                {(titleBottom || highlightText) && (
                                    <span
                                        className={`font-extrabold leading-[1.1] tracking-[-0.02em] m-0 text-3xl md:text-4xl  ${titleColor}`}
                                    >
                                        <span>{titleBottom}</span>

                                        {highlightText && (
                                            <>
                                                {' '}
                                                <span className={`${highlightColor} `}>
                                                    {highlightText}
                                                </span>
                                            </>
                                        )}
                                    </span>
                                )}
                            </h2>
                        </div>

                        {/* Right Line */}
                        <div className="w-26 lg:w-48 hidden md:flex items-center  justify-start">
                            <div
                                className="w-full h-0.5 "
                                style={{
                                    background: `linear-gradient(to right, ${lineColor} 0%, transparent 100%)`,
                                }}
                            />
                        </div>
                    </motion.div>
 
                    {subtitle && (
                        <div className={ParaclassName}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="w-full text-center mt-4 "
                            >
                                {Array.isArray(subtitle) ? (
                                    subtitle.map((text, index) => (
                                        <div // p की जगह div यूज़ किया ताकि अंदर <br> या block elements एरर न दें
                                            key={index}
                                            className={`text-base font-normal tracking-[-0.01em] ${index > 0 ? "mt-2" : ""
                                                } ${subtitleColor}`}
                                        >
                                            {text}
                                        </div>
                                    ))
                                ) : (
                                    <div className={`text-base font-normal tracking-[-0.01em] ${subtitleColor}`}>
                                        {subtitle}
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}