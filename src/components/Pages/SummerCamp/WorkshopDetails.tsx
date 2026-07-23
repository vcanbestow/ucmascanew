'use client';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Button from "@/components/UI/Button";
import SmallSectionHeading from '@/components/UI/SmallSectionHeading';
import { motion } from "framer-motion";

import { path } from "@/utils/path"; // Import the path utility

export default function WorkshopDetails() {
    return (
        <>
            {/* 
      The parent container requires a bottom margin (mb-32 or similar) 
      to account for the image breaking out of the box so it doesn't overlap 
      unintentionally with the next section of your website.
    */}
            <div className="w-full  ">

                <div className="">

                    <div className="flex flex-col lg:flex-row items-center relative z-10 w-full ">

                        {/* Left Side: Table & Text Content */}
                        <div className="w-full lg:w-3/5 xl:w-2/3 flex flex-col items-center pt-8 md:py-8 z-10">

                            {/* Heading */}
                            <SmallSectionHeading titleTop="Workshop" highlightText="Details" className="" />
                            {/* Table Wrapper */}
                            <div className="w-full max-w-2xl border border-ucmas-blue rounded-xl overflow-hidden bg-transparent shadow-2xl shadow-ucmas-blue/20 mb-8">
                                <motion.table className="w-full text-sm md:text-base text-center text-ucmas-blue "
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                >

                                    {/* Table Head */}
                                    <thead className="border-b border-ucmas-blue font-bold bg-light-offwhite">
                                        <tr>
                                            <th className="py-4 px-4 border-r border-ucmas-blue w-[45%]">Program</th>
                                            <th className="py-4 px-2 border-r border-ucmas-blue">Age</th>
                                            <th className="py-4 px-2 border-r border-ucmas-blue">Fee</th>
                                            <th className="py-4 px-2">Duration</th>
                                        </tr>
                                    </thead>

                                    {/* Table Body */}
                                    <tbody className="bg-light-offwhite">
                                        <tr className="border-b border-ucmas-blue">
                                            <td className="py-4 px-4 border-r border-ucmas-blue text-left font-normal">
                                                Summer Math Workshop
                                                <br />
                                                <span className=" text-ucmas-blue/80">(i-Maths & UCMAS)</span>
                                            </td>
                                            <td className="py-4 px-2 border-r border-ucmas-blue">4+ Years</td>
                                            <td className="py-4 px-2 border-r border-ucmas-blue">Free</td>
                                            <td className="py-4 px-2">2 Hours</td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 border-r border-ucmas-blue text-left font-normal">
                                                Summer STEM Workshop
                                                <br />
                                                <span className=" text-ucmas-blue/80">(OBotz Robotics & Coding)</span>
                                            </td>
                                            <td className="py-4 px-2 border-r border-ucmas-blue">6+ Years</td>
                                            <td className="py-4 px-2 border-r border-ucmas-blue">Free</td>
                                            <td className="py-4 px-2">2 Hours</td>
                                        </tr>
                                    </tbody>

                                </motion.table>
                            </div>

                            {/* Render User's Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                            >
                                <Button
                                    variant="ucmas_orange_btn"
                                    href="#"
                                    icon={<MoveRight size={20} strokeWidth={2} />}
                                    iconPosition="right"
                                    className="mx-auto"
                                >
                                    Register Today
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Side: Girl Image */}
                        {/* Mobile: Image uses negative margin to break out. Desktop: Absolute positioning */}
                        <div className="w-full lg:w-2/5 xl:w-1/3 mt-12 md:mt-0 flex justify-center md:static lg:ps-5">
                            <motion.div className="relative w-70 -mb-11 sm:-mb-14 md:-mb-16 lg:-mb-18 sm:w-80 md:w-100 lg:w-112.5   z-20"
                            initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                            >
                                <Image
                                    src={`${path}/images/Girl-image-1.webp`}

                                    alt="Girl holding abacus"
                                    width={500}
                                    height={700}
                                    className="w-full h-auto object-contain drop-shadow-xl pointer-events-none"
                                    priority
                                />
                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}