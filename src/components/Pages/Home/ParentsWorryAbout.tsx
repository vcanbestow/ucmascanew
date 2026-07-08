"use client";
import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "@/components/UI/SectionTitle";
import Button from "@/components/UI/Button"; // Adjust path if necessary
import Link from "next/link";
import {
  Brain,
  Crosshair,
  Lightbulb,
  ShieldAlert,
  Target,
  Baby,
  Play,
  X,
  MoveRight,
  Calculator,
  Award,
  ArrowRight,
  TrendingUp,
  CloudLightning,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const TAB_DATA = [
  {
    id: "math-struggle",
    tab: {
      title: "Math is a struggle",
      subtitle: "My child is falling behind in school.",
      bgColor: "#61b5cf",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#61b5cf",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.2)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <Calculator className="w-5 h-5 md:w-6 md:h-6" />,

      // icon: (
      //     <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         width="20"
      //         height="20"
      //         viewBox="0 0 24 24"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeWidth="2"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         className="w-5 h-5 text-white"
      //     >
      //         <path d="M18 8L22 12L18 16" />
      //         <path d="M2 12H22" />
      //     </svg>
      // ),
    },
    content: {
      headingPart1: "Turn Math Struggles into ",
      headingPart1Color: "text-flagship-program-box-bg",
      headingPart2: "Math Mastery",
      headingPart2Color: "text-footer-bg",
      paragraph:
        "With the UCMAS Abacus program, your child strengthens their math foundation and builds exceptional number skills. Here’s what children gain at UCMAS.",
      paragraphColor: "text-flagship-program-box-bg",
      features: [
        // {
        //     icon: (
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="20"
        //             height="20"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //             stroke="currentColor"
        //             strokeWidth="2"
        //             strokeLinecap="round"
        //             strokeLinejoin="round"
        //             className="w-5 h-5 text-white"
        //         >
        //             <path d="M18 8L22 12L18 16" />
        //             <path d="M2 12H22" />
        //         </svg>
        //     ),
        //     text: "Strong Foundation of Numbers",
        // },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Strong Foundation of Numbers & Arithmetic Sense",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Accuracy and Speed in Doing Math Operations",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Children Stop Fearing Numbers and Start Enjoying Math",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Remarkable Improvement in Math Grades",
        },
      ],
      featureTextColor: "text-flagship-program-box-bg",
      featureBorderColor: "text-flagship-program-box-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
  {
    id: "focus-attention",
    tab: {
      title: "Reduced Focus & Attention",
      subtitle: "My child gets easily distracted.",
      bgColor: "#e4bf48",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#e4bf48",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.2)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <Crosshair className="w-5 h-5 md:w-6 md:h-6" />,
    },
    content: {
      headingPart1: "From Short Attention to ",
      headingPart1Color: "text-footer-bg",
      headingPart2: "Sharp Focus",
      headingPart2Color: "text-ucmas-red",
      paragraph:
        "Through structured exercises, UCMAS trains the brain to stay engaged for longer periods. Your child will gradually build focus and learn to stay attentive.",
      paragraphColor: "text-footer-bg",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Speed writing exercise for improved focus",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Flash card exercises build active attention",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Faster calculations strengthen sustained concentration",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Children stay attentive longer, both in class and at home",
        },
      ],
      featureTextColor: "text-footer-bg",
      featureBorderColor: "text-footer-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
  {
    id: "memory-retention",
    tab: {
      title: "Lower Memory & Retention",
      subtitle: "Remembering lessons is a big task",
      bgColor: "#f28c38",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#f28c38",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.25)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <CloudLightning className="w-5 h-5 md:w-6 md:h-6" />,
    },
    content: {
      headingPart1: "Train the ",
      headingPart1Color: "text-flagship-program-box-bg",
      headingPart2: "Brain to Remember",
      headingPart2Color: "text-ucmas-blue",
      paragraph:
        "UCMAS builds memory through visualization and recall. Your child learns to imagine numbers, store them in mind, and retrieve them accurately.",
      paragraphColor: "text-flagship-program-box-bg",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Visualization turns numbers and information into pictures ",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Regular practice makes recalling information quick & easy",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Repetition strengthens long-term memory power",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Sharper memory helps in every subject at school ",
        },
      ],
      featureTextColor: "text-flagship-program-box-bg",
      featureBorderColor: "text-flagship-program-box-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
  {
    id: "confidence",
    tab: {
      title: "Lacks Confidence",
      subtitle: "My child hesitates to participate in class",
      bgColor: "#42be9a",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#42be9a",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.2)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />,
    },
    content: {
      headingPart1: "Better Skills and ",
      headingPart1Color: "text-ucmas-blue",
      headingPart2: "Real Confidence",
      headingPart2Color: "text-flagship-program-box-bg",
      paragraph:
        "UCMAS children develop skills well beyond their age and grade. When your child genuinely performs better, self-esteem follows and boosts confidence.",
      paragraphColor: "text-ucmas-blue",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Children perform math calculations beyond their grade level",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Stronger performance naturally leads to more confidence",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Children become more active and participate in class activities",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Kids carry this confidence into everyday life, not just school ",
        },
      ],
      featureTextColor: "text-ucmas-blue",
      featureBorderColor: "text-footer-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
  {
    id: "challenge",
    tab: {
      title: "Needs More Challenge",
      subtitle: "Advance my child’s skills",
      bgColor: "#97d9da",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#97d9da",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.2)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    content: {
      headingPart1: "Designed for Kids Who Are ",
      headingPart1Color: "text-ucmas-blue",
      headingPart2: "Ready for More",
      headingPart2Color: "text-ucmas-red",
      paragraph:
        "A child who's already ahead needs more than standard practice. They need real challenges to stay sharp. UCMAS gives these students a space to push their limits through timed exercises and competitions.",
      paragraphColor: "text-ucmas-blue",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Timed challenges push children past their skill level",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Competitions test skills against peers ",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Advanced levels keep fast learners engaged and growing",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Children build a real drive to compete and improve",
        },
      ],
      featureTextColor: "text-ucmas-blue",
      featureBorderColor: "text-footer-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
  {
    id: "early-start",
    tab: {
      title: "Develop Strong Foundation",
      subtitle: "Give my child a head start",
      bgColor: "#f16167",
      inactiveBgColor: "#FFFFFF",
      inactiveIconBg: "#f16167",
      inactiveIconColor: "#FFFFFF",
      activeIconBg: "rgba(255,255,255,0.2)",
      activeIconColor: "#FFFFFF",
      activeTitleColor: "#FFFFFF",
      inactiveTitleColor: "#1E293B",
      activeSubtitleColor: "rgba(255,255,255,0.9)",
      inactiveSubtitleColor: "#64748B",
      icon: <Baby className="w-5 h-5 md:w-6 md:h-6" />,
    },
    content: {
      headingPart1: "Where Early Learning Becomes ",
      headingPart1Color: "text-flagship-program-box-bg",
      headingPart2: "Lifelong Skills",
      headingPart2Color: "text-ucmas-blue",
      paragraph:
        "Young children learn best through play. i-Maths, our early learning math program for kids aged 3-7 years, builds number sense and problem-solving, so your child develops critical & creative thinking skills.",
      paragraphColor: "#FFFFFF",
      features: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          text: "Establish a strong foundation for learning in the early years ",
        },
        {
          icon: <Brain className="w-6 h-6" />,
          text: "Stimulate brain development by making math fun ",
        },
        {
          icon: <Target className="w-6 h-6" />,
          text: "Help children make a smooth transition to school settings",
        },
        {
          icon: <Award className="w-6 h-6" />,
          text: "Encourage application of concepts in a real-time environment",
        },
      ],
      featureTextColor: "text-flagship-program-box-bg",
      featureBorderColor: "text-flagship-program-box-bg",
      button: {
        text: "Book a Free Session",
        bgColor: "bg-ucmas-blue",
        textColor: "text-white",
        arrowColor: "text-white",
      },
      video: {
        thumbnail:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
        url: "UCMAS.mp4",
      },
    },
  },
];

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden aspect-video ring-1 ring-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full backdrop-blur-md"
        >
          <X className="w-6 h-6" />
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default function DynamicTabSection() {
  const [activeTabId, setActiveTabId] = useState(TAB_DATA[0].id);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); 
const accordionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeIndex = TAB_DATA.findIndex((item) => item.id === activeTabId);
  const activeData = TAB_DATA[activeIndex];

  const handleAccordionClick = (id: string) => {
    setActiveTabId(id);
    setTimeout(() => {
      const element = (accordionRefs.current as Record<string | number, HTMLDivElement | null>)[id];
      if (element) {
        // Scroll with 5rem (80px) offset from top
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-parentproblem-bg-section  flex flex-col items-center">
      <section className="">
        <SectionTitle
          ParaclassName="md:max-w-4/5 mx-auto"
          titleTop={
            <>
              We understand
              <br className="hidden lg:block" /> what parents
            </>
          }
          titleBottom=""
          highlightText={
            <>
              <em>worry about</em>
            </>
          }
          subtitle={[
            <>
              When it comes to your child&#39;s academics, the challenges feel
              endless. <br className="hidden lg:block" />
              But here&#39;s the thing! You&#39;re not alone. This is something
              every parent deals with.
            </>,
          ]}
          titleColor="text-ucmas-blue"
          highlightColor="text-ucmas-red"
          subtitleColor="text-section-heading-paragraph"
          lineColor="#1e2e54"
        />
        <div className="my-container">
          {/* DESKTOP TABS */}
          <div className="hidden xl:flex w-full gap-4 items-center relative z-10">
            {TAB_DATA.map((item, index) => {
              const isActive = activeTabId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTabId(item.id)}
                  className={`flex-1 flex flex-col hover:shadow=[0_8px_25px_#1e2e5414] mb-6  pt-10 h-60 pb-6 cursor-pointer text-left relative outline-none p-4 rounded-t-[1.5rem] ${isActive ? "translate-y-6 z-20" : " hover:-mt-2 mt-0 bg-white border rounded-[1.5rem] border-gray-100 hover:bg-gray-50"}`}
                  style={{
                    backgroundColor: isActive ? item.tab.bgColor : "#FFFFFF",
                  }}
                >
                  {/* Left Connector */}
                  {isActive && index > 0 && (
                    <svg
                      className="absolute right-full bottom-0 w-8 h-8 pointer-events-none"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M100,0 Q100,100 0,100 L100,100 Z"
                        fill={item.tab.bgColor}
                      />
                    </svg>
                  )}
                  {/* Right Connector */}
                  {isActive && index < TAB_DATA.length - 1 && (
                    <svg
                      className="absolute left-full bottom-0 w-8 h-8 pointer-events-none"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,0 Q0,100 100,100 L0,100 Z"
                        fill={item.tab.bgColor}
                      />
                    </svg>
                  )}
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isActive
                        ? item.tab.activeIconBg
                        : item.tab.inactiveIconBg,
                      color: isActive
                        ? item.tab.activeIconColor
                        : item.tab.inactiveIconColor,
                    }}
                  >
                    {React.cloneElement(item.tab.icon, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <h3
                    className="font-bold text-lg"
                    style={{
                      color: isActive
                        ? item.tab.activeTitleColor
                        : item.tab.inactiveTitleColor,
                    }}
                  >
                    {item.tab.title}
                  </h3>
                  <p
                    className="text-xs font-medium opacity-90 mt-1"
                    style={{
                      color: isActive
                        ? item.tab.activeSubtitleColor
                        : item.tab.inactiveSubtitleColor,
                    }}
                  >
                    {item.tab.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* DESKTOP CONTENT */}
          <div className="hidden xl:block ">
            <div
              className="p-12"
              style={{
                backgroundColor: activeData.tab.bgColor,
                borderBottomLeftRadius: "24px",
                borderBottomRightRadius: "24px",
                borderTopLeftRadius: activeIndex === 0 ? "0" : "24px",
                borderTopRightRadius:
                  activeIndex === TAB_DATA.length - 1 ? "0" : "24px",
              }}
            >
              <ContentArea
                activeData={activeData}
                setIsVideoModalOpen={setIsVideoModalOpen}
              />
            </div>
          </div>

          {/* MOBILE ACCORDION */}
          <div className="xl:hidden flex flex-col gap-4">
            {TAB_DATA.map((item) => (
              <div
                key={item.id} 
                ref={(el) => {accordionRefs.current[item.id] = el; }}
              >
                <button
                  onClick={() => handleAccordionClick(item.id)}
                  className="w-full flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mr-4 shrink-0"
                    style={{
                      backgroundColor: item.tab.inactiveIconBg,
                      color: item.tab.inactiveIconColor,
                    }}
                  >
                    {item.tab.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-lg">{item.tab.title}</h3>
                    <p className="text-xs font-medium opacity-90 mt-1">
                      {item.tab.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`transition-transform duration-300 ${activeTabId === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {activeTabId === item.id && (
                  <div
                    className="mt-2 p-6 rounded-2xl"
                    style={{ backgroundColor: item.tab.bgColor }}
                  >
                    <ContentArea
                      activeData={item}
                      setIsVideoModalOpen={setIsVideoModalOpen}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={activeData?.content.video.url}
      />
    </div>
  );
}

interface ContentAreaProps {
  activeData: typeof TAB_DATA[number];
  setIsVideoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContentArea({ activeData, setIsVideoModalOpen }: ContentAreaProps) {
  // value: string डिफाइन किया
  const getColorProps = (value: string) => {
    const isTailwind =
      value &&
      typeof value === "string" &&
      !value.startsWith("#") &&
      !value.startsWith("rgba");
    return {
      className: isTailwind ? value : "",
      style: !isTailwind ? { color: value } : {},
    };
  };
  const getBgProps = (value: string) => {
    const isTailwind =
      value && typeof value === "string" && value.startsWith("bg-");

    return {
      className: isTailwind ? value : "",
      style: !isTailwind ? { backgroundColor: value } : {},
    };
  };
  const getTextProps = (value: string) => {
    const isTailwind =
      value && typeof value === "string" && value.startsWith("text-");

    return {
      className: isTailwind ? value : "",
      style: !isTailwind ? { color: value } : {},
    };
  };
  const { content } = activeData;
  const colorValue = activeData.content.headingPart2Color;

  // Logic: If it starts with 'text-', it's a Tailwind class. Otherwise, treat it as a color.
  const isTailwind = colorValue.startsWith("text-");
  const paragraphProps = getColorProps(content.paragraphColor);

  return (
    <div className="grid lg:grid-cols-12  gap-8 md:gap-12 items-center">
      <div className="lg:col-span-7">
        <div className="  lg:mb-14 mb-6">
          <h2 className=" mb-3 text-2xl md:text-3xl font-extrabold leading-tight">
            <span {...getColorProps(content.headingPart1Color)}>
              {content.headingPart1}
            </span>
            <span {...getColorProps(content.headingPart2Color)}>
              {content.headingPart2}
            </span>
          </h2>

          <p
            className={`lg:mb-10 mb-6 font-medium leading-relaxed ${paragraphProps.className}`}
            style={paragraphProps.style}
          >
            {content.paragraph}
          </p>

          {/* <div className="grid sm:grid-cols-2 gap-4 ">
                        {content.features.map((f, i) => (
                            // Use this approach in your JSX
                            <div
                                key={i}
                                className={`flex items-start gap-4 ${getColorProps(content.featureTextColor).className}`}
                                style={getColorProps(content.featureTextColor).style}
                            >
                                <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                                    {f.icon}
                                </div>
                                <p className="pt-2.5 font-semibold ">{f.text}</p>
                            </div>
                        ))}
                    </div> */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 ">
            {content.features.map((f, i) => {
              // Resolve dynamic border properties
              const isTailwindBorder =
                content.featureBorderColor &&
                !content.featureBorderColor.startsWith("#") &&
                !content.featureBorderColor.startsWith("rgba");
              const borderProps = {
                className: isTailwindBorder ? content.featureBorderColor : "",
                style: !isTailwindBorder
                  ? { borderColor: content.featureBorderColor }
                  : {},
              };

              return (
                <div
                  key={i}
                  className={`flex items-center  gap-4 ${getColorProps(content.featureTextColor).className}`}
                  style={getColorProps(content.featureTextColor).style}
                >
                  {/* Dynamically handles both Tailwind border utilities and Hex color codes */}
                  <div
                    className={`w-12 h-12 rounded-full  border-2 flex items-center justify-center shrink-0 ${borderProps.className}`}
                    style={borderProps.style}
                  >
                    {f.icon}
                  </div>
                  <p className=" font-semibold ">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          {/* <Link
            href=""
            className={`${getBgProps(content.button.bgColor).className} ${getTextProps(content.button.textColor).className} px-8 py-2 group font-semibold inline-flex gap-2 items-center rounded-[.45rem] transition-all duration-300`}
            style={{
              ...getBgProps(content.button.bgColor).style,
              ...getTextProps(content.button.textColor).style,
            }}
          >
            {content.button.text}
            <MoveRight
              size={20}
              strokeWidth={2}
              className={`w-5 h-5 ${getTextProps(content.button.arrowColor).className}`}
              style={getTextProps(content.button.arrowColor).style}
            />
          </Link>

          <Button
            variant="ucmas_red_btn_outline"
            href="/contact"
            icon={<MoveRight size={20} strokeWidth={2} />}
            iconPosition="right"
            className="mx-auto"
          >
            View All Events
          </Button> */}
          <Button
            href=""
            className={`${getBgProps(content.button.bgColor).className} ${getTextProps(content.button.textColor).className} px-8 py-2 group font-semibold border-none mx-auto rounded-[.45rem] transition-all duration-300`}
            style={{
              ...getBgProps(content.button.bgColor).style,
              ...getTextProps(content.button.textColor).style,
            }}
            icon={
              <MoveRight
                size={20}
                strokeWidth={2}
                className={`w-5 h-5 ${getTextProps(content.button.arrowColor).className}`}
                style={getTextProps(content.button.arrowColor).style}
              />
            }
            iconPosition="right"
          >
            {content.button.text}
          </Button>
        </div>
        {/* <div className="relative z-10">
                    <Button
                        className="mx-auto flex items-center ga-2 px-8 py-2 border border-solid hover:text-white group font-semibold"
                        style={{
                            backgroundColor: content.button.bgColor,
                            borderColor: content.button.bgColor, // Use borderColor specifically
                            color: content.button.textColor
                        }}
                    >
                        {content.button.text}
                        <ArrowRight className="w-5 h-5" style={{ color: content.button.arrowColor }} />
                    </Button>
                </div> */}
      </div>
      <div
        className="relative lg:col-span-5 xl:col-span-4 xl:col-start-9 2xl:col-span-3 2xl:col-start-10 group cursor-pointer w-full max-w-xl mx-auto"
        onClick={() => setIsVideoModalOpen(true)}
      >
        <div className="relative rounded-3xl lg:h-96 lg:min-h-96 overflow-hidden aspect-[4/3] w-full">
          <img
            src={activeData.content.video.thumbnail}
            alt="Video"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <Play
                className="w-8 h-8 ml-1"
                style={{ color: activeData.tab.bgColor }}
                fill={activeData.tab.bgColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
