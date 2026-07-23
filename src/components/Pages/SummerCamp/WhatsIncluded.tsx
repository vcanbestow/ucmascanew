
'use client';
import SmallSectionHeading from '@/components/UI/SmallSectionHeading';
import SummerCampRegistrationForm from '@/components/Forms/SummerCampRegistrationForm';
import { Calculator, LayoutGrid, Puzzle, Bot } from 'lucide-react'; // Example icons
import Image from 'next/image';
import { path } from "@/utils/path";
import { motion } from "framer-motion";

export default function WhatsIncluded() {

    const cards = [
        {
            icon: <Calculator className="w-10 h-10 text-ucmas-blue mx-auto mb-3" />,
            imageSrc: 'Layer1147.webp',
            altText: "Explore Abacus Math",
            title: <>Explore <br className='hidden sm:block' /> Abacus Math</>,
            desc: 'A hands-on intro to mental math',
        },
        {
            icon: <LayoutGrid className="w-10 h-10 text-ucmas-blue mx-auto mb-3" />,
            imageSrc: 'Layer1149.webp',
            altText: "Flash Cards",
            title: <>Flash <br className='hidden sm:block' /> Cards</>,
            desc: 'Quick visualization drills',
        },
        {
            icon: <Puzzle className="w-10 h-10 text-ucmas-blue mx-auto mb-3" />,
            imageSrc: 'Layer1150.webp',
            altText: "Math Games & Puzzles",
            title: <>Math Games <br className='hidden sm:block' /> & Puzzles</>,
            desc: 'Fun that builds fundamentals',
        },
        {
            icon: <Bot className="w-10 h-10 text-ucmas-blue mx-auto mb-3" />,
            imageSrc: 'Layer1151.webp',
            altText: "Intro to Robotics & Coding",
            title: <>Intro to Robotics <br className='hidden sm:block' /> & Coding</>,
            desc: 'A first taste of STEM thinking',
        },
    ];

    return (
        <>

            <div className="my-inner-container ">
                <div className="  mx-auto grid grid-cols-1 lg:grid-cols-12    lg:gap-x-6 gap-y-0 items-start">

                    {/* LEFT COLUMN */}
                    <div className='col-span-1 lg:col-span-12'>
                        <SmallSectionHeading titleTop="What's" highlightText="Included" className="text-center lg:text-start" />
                    </div>
                    <div className="lg:col-span-7 2xl:col-span-8 flex flex-col gap-12 mb-6 lg:mb-0 lg:pr-8">

                        {/* Top Section */}
                        <div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">

                                {cards.map((card, idx) => {
                                    // Calculate delay and duration INSIDE the loop using 'idx'
                                    const staggeredDelay = idx * 0.15;
                                    const customDuration = 0.8;

                                    return (
                                        <motion.div
                                            key={idx} // Changed from 'index' to 'idx'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: customDuration,
                                                delay: staggeredDelay,
                                                ease: [0.16, 1, 0.3, 1]
                                            }}
                                            viewport={{ once: true, amount: 0.1 }}
                                            className="w-full   shrink-0 border border-ucmas-orange bg-white rounded-xl p-4 py-6 text-center shadow-lg shadow-ucmas-red/20 transition-shadow"
                                        >
                                            {/* Agar aapko Icon aur Image dono chahiye */}
                                            {/* {card.icon} */}

                                            {/* Image Render karne ka tareeqa */}
                                            {card.imageSrc && (
                                                <div className="relative w-16 h-16 mx-auto mb-3 md:mb-4">
                                                    <Image
                                                        src={`${path}/images/${card.imageSrc}`}
                                                        alt={card.altText || "Card image"} // Use the string property here
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            )}

                                            <h4 className="font-bold text-lg leading-tight mb-1 text-ucmas-blue">
                                                {card.title}
                                            </h4>
                                            <p className="text-sm text-ucmas-blue">
                                                {card.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div>
                            <SmallSectionHeading titleTop="Why Choose the" highlightText="UCMAS Summer Workshop" className="" />
                            <motion.ul className="flex flex-col gap-3 text-sm md:text-base"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                            >
                                <li>
                                    <p className='text-ucmas-blue'><span className=" font-semibold">Targeted Skill Building:</span> Concentration, visualization, rapid mental calculation</p>
                                </li>
                                <li>
                                    <p className='text-ucmas-blue'><span className=" font-semibold">STEM-Focused Learning:</span> Bridging basic arithmetic and logical reasoning</p>
                                </li>
                                <li>
                                    <p className='text-ucmas-blue'><span className=" font-semibold">Be Prepared for Fall:</span> Students enter the new school year more confident</p>
                                </li>
                                <li>
                                    <p className='text-ucmas-blue'><span className=" font-semibold">Flexible Schedule:</span> High-value programming that fits busy summer schedules</p>
                                </li>
                            </motion.ul>
                        </div>

                    </div>

                    {/* RIGHT COLUMN - REGISTRATION FORM */}
                    <div className="lg:col-span-5 2xl:col-span-4 w-full">

                        <motion.div initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}>
                            <SummerCampRegistrationForm />

                        </motion.div>
                    </div>

                </div>
            </div>

        </>
    );
}
