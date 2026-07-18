"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/UI/SectionTitle";
import Button from "@/components/UI/Button"; // Adjust path if necessary
import { MoveRight } from "lucide-react"; // Ensure lucide-react is installed
import Image from 'next/image';
import { path } from "@/utils/path"; // Import the path utility
// Dynamic Data Array
const PROGRAM_DATA = [
    {
        id: "age3-6",
        ageGroup: "Age 3-6",
        childImage: {
            src: "Age 3-6 child.webp",
            alt: "Child with backpack",
        },
        cards: [
            {
                logo: "i-Maths Logo B.webp",
                alt: "i-Maths Logo",
                title: "Early\nMath",
                link: "#",
                buttonText: "Know More",
            },
            {
                logo: "A2Z_English_Blue.webp",
                alt: "A2Z English Logo",
                title: "Comprehensive\nEnglish",
                link: "#",
                buttonText: "Know More",
            },
        ],
    },
    {
        id: "age6-8",
        ageGroup: "Age 6-8",
        childImage: {
            src: "Age 6-8 child.webp",
            alt: "Girl looking back",
        },
        cards: [
            {
                logo: "UCMAS logo.webp",
                alt: "UCMAS Logo",
                tag: "Junior",
                title: "Basics of\nAbacus",
                link: "#",
                buttonText: "Know More",
            },
            {
                logo: "Obots Nano.webp",
                alt: "OBOTZ Logo",
                title: "Basics of\nSTEM",
                link: "#",
                buttonText: "Know More",
            },
        ],
    },
    {
        id: "age9",
        ageGroup: "Age 9+",
        childImage: {
            src: "Age 9+ child.webp",
            alt: "Two older children",
        },
        cards: [
            {
                logo: "UCMAS logo.webp",
                alt: "UCMAS Logo",
                title: "Abacus\nMental Math",
                link: "#",
                buttonText: "Know More",
            },
            {
                logo: "Obotz Logo Blue Tagline.webp",
                alt: "OBOTZ Logo",
                title: "Robotics &\nCoding",
                link: "#",
                buttonText: "Know More",
            },
        ],
    },
];

export default function FlagshipPrograms() {
    const [activeTab, setActiveTab] = useState(0);

    // Step 1: Normal state change on click
    // Step 1: Normal state change on click
    const handleTabClick = (index: number, isMobile: boolean = false) => {
        if (isMobile) {
            setActiveTab(activeTab === index ? -1 : index);
        } else {
            setActiveTab(index);
        }
    };

    // Step 2: Smooth scroll triggers ONLY after expansion transition completes
    const handleTransitionEnd = (index: number, event: React.TransitionEvent) => {
        // Ensure we only look at the height/max-height transition ending
        if (event.propertyName === "max-height" && activeTab === index) {
            const element = document.getElementById(`accordion-${index}`);
            if (element) {
                const yOffset = -80; // Safe spacing from top screen
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <section className="bg-white pb-0! pt-16 px-4 sm:px-8 md:px-12 lg:px-20 ">
            <SectionTitle
                ParaclassName="xl:max-w-7/12 mx-auto"
                titleTop={<>Our Flagship</>}
                titleBottom=""
                highlightText={<><em>Programs</em></>}
                subtitle={[
                    "From early foundations in learning to advanced STEM-based robotic projects, we have programs designed to support every stage of your child's development.",
                ]}
                titleColor="text-ucmas-blue"
                highlightColor="text-ucmas-red"
                subtitleColor="text-section-heading-paragraph"
                lineColor="#1e2e54"
                className="  "
            />
            <div className="my-container">


                {/* Desktop Navigation Tabs */}
                <motion.div className="hidden md:flex justify-center items-center gap-4 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    {PROGRAM_DATA.map((tab, index) => {
                        const isActive = activeTab === index;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(index, false)}
                                className={`px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ${isActive
                                    ? "bg-orange-bg text-white border border-orange-bg shadow-[0_0.25rem_0.9375rem_rgba(255,107,53,0.4)]"
                                    : "bg-transparent text-ucmas-blue border border-ucmas-dark hover:bg-gray-50"
                                    }`}
                            >
                                {tab.ageGroup}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Content & Mobile Accordion Container */}
                <div className="  mt-8 md:mt-0 space-y-4 md:space-y-0">
                    {PROGRAM_DATA.map((tab, index) => {
                        const isOpen = activeTab === index;

                        return (
                            <div key={tab.id} id={`accordion-${index}`} className="md:border-none">

                                {/* Mobile Accordion Trigger Button */}
                                <button

                                    onClick={() => handleTabClick(index, true)}
                                    className={`w-full flex md:hidden justify-between items-center py-4 px-5 rounded-xl text-left font-bold text-lg transition-all duration-300 ${isOpen
                                        ? "bg-orange-bg text-white border border-orange-bg shadow-[0_0.25rem_0.9375rem_rgba(255,107,53,0.4)]"
                                        : "bg-transparent text-ucmas-blue border border-ucmas-dark"
                                        }`}
                                >
                                    <span>{tab.ageGroup}</span>
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Content Panel with onTransitionEnd listener */}
                                <div
                                    onTransitionEnd={(e) => handleTransitionEnd(index, e)}
                                    className={`transition-all pb-0 duration-500 overflow-hidden ${isOpen
                                        ? "max-h-[2500px] opacity-100 pt-8"
                                        : "max-h-0 opacity-0 md:hidden"
                                        }`}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7  ">

                                        {/* First Program Card */}
                                        <motion.div className="order-1 w-full xl:w-9/12 mx-auto"
                                            initial={{ opacity: 0, x: -60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                            viewport={{ once: true, amount: 0.2 }}>
                                            <div className="flex flex-col items-center text-center p-5 lg:p-7 bg-flagship-program-box-bg border border-orange-bg rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-auto md:min-h-70 md:mb-6   justify-center w-full">
                                                <div className="h-20 flex items-center justify-center mb-1">
                                                    <Image width={400} height={400} quality={100}
                                                        src={`${path}/images/${tab.cards[0].logo}`} alt={tab.cards[0].alt} className="h-20 max-w-36 object-contain" />
                                                </div>
                                                {tab.cards[0].tag && (
                                                    <span className="text-xs font-semibold text-[#3e4095] tracking-wide -mt-4 mb-3">
                                                        {tab.cards[0].tag}
                                                    </span>
                                                )}
                                                <h3 className="text-xl lg:text-xl font-semibold text-ucmas-blue mb-3 mt-6 whitespace-pre-line leading-tight">
                                                    {tab.cards[0].title}
                                                </h3>
                                                <Button
                                                    variant="ucmas_red_btn_outline"
                                                    href={tab.cards[0].link}
                                                    iconPosition="right"
                                                    className="mx-auto"
                                                >
                                                    {tab.cards[0].buttonText || "Know More"}
                                                </Button>
                                            </div>
                                        </motion.div>

                                        {/* Center Image (The Kid) */}
                                        <motion.div className="order-3 md:order-2 flex items-end justify-center mt-4 md:mt-0 w-full"
                                            initial={{ opacity: 0, y: 60 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                            viewport={{ once: true, amount: 0.2 }}>
                                            <div className="relative h-full flex items-end justify-center md:min-h-80">
                                                <Image
                                                    width={600}
                                                    height={800} quality={100}
                                                    src={`${path}/images/${tab.childImage.src}`}
                                                    alt={tab.childImage.alt}
                                                    className="max-w-full xl:h-112 w-auto"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Second Program Card */}
                                        <motion.div className="order-2 md:order-3   w-full xl:w-9/12 mx-auto"
                                            initial={{ opacity: 0, x: 60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                            viewport={{ once: true, amount: 0.2 }}
                                        >
                                            <div className="flex flex-col items-center text-center p-5 lg:p-7 bg-flagship-program-box-bg border border-orange-bg rounded-3xl shadow-sm hover:shadow-md transition-shadow min-h-auto md:min-h-70  md:mb-6  justify-center w-full">
                                                <div className="h-20 flex items-center justify-center mb-6">
                                                    <Image
                                                        width={600}
                                                        height={800} quality={100}
                                                        src={`${path}/images/${tab.cards[1].logo}`}
                                                        alt={tab.cards[1].alt} className="h-20 max-w-36 object-contain" />

                                                </div>
                                                <h3 className="text-xl lg:text-xl font-semibold text-ucmas-blue mb-3 mt-6 whitespace-pre-line leading-tight">
                                                    {tab.cards[1].title}
                                                </h3>
                                                <Button
                                                    variant="ucmas_red_btn_outline"
                                                    href={tab.cards[1].link}
                                                    iconPosition="right"
                                                    className="mx-auto"
                                                >
                                                    {tab.cards[1].buttonText || "Know More"}
                                                </Button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <motion.div className="py-5 mt-5 md:mt-0 bg-[#EDEAE6]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            ></motion.div>
        </section>
    );
}