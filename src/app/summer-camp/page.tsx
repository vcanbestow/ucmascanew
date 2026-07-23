'use client';
import InnerPageBanner from '@/components/UI/InnerPageBanner';
import { path } from '@/utils/path';
import SectionTitle from "@/components/UI/SectionTitle";
import WhatsIncluded from "@/components/Pages/SummerCamp/WhatsIncluded";
import WorkshopDetails from "@/components/Pages/SummerCamp/WorkshopDetails";
import Gallery from "@/components/Pages/SummerCamp/Gallery";
import FocusSummerWorkshop from "@/components/Pages/SummerCamp/FocusSummerWorkshop";
import InnerSectionFaqs from '@/components/UI/InnerSectionFaqs';
import { summerCampFaqs } from '@/components/ContentData/summerCampFaqs';
import SmallSectionHeading from '@/components/UI/SmallSectionHeading';
import { motion } from "framer-motion";


export default function Home() {
    return (
        <>
            <div className="pt-4 md:pt-6 bg-pagebg">
                {/* Hero Section Banner Slider */}
                <motion.div className="my-container"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                >
                    <InnerPageBanner
                        imageDesktop={`${path}/images/summer-camp-banner.webp`}
                        imageMobile={`${path}/images/summer-camp-banner.webp`}
                        alt="Banner Image"
                        link="" // Optional: Agar link nahi doge toh click nahi hoga aur default cursor rahega
                        width={1200}
                        height={500}

                        className="rounded-xl w-full h-auto"
                    />
                </motion.div>

                <section className="">
                    <SectionTitle
                        as="h1"
                        ParaclassName="xl:max-w-5/12 mx-auto"
                        titleTop={<>Summer</>}
                        titleBottom=""
                        highlightText={<>Workshop</>}
                        subtitle={[
                            "Beat the summer slide with STEM workshops and full summer camps   that keep young minds sharp all break long.",
                        ]}
                        titleColor="text-ucmas-blue"
                        highlightColor="text-ucmas-red"
                        subtitleColor="text-section-heading-paragraph"
                        lineColor="#1e2e54"
                        className="mb-10!"
                    />
                    <WhatsIncluded />



                </section>

                <div className='pt-0 bg-[#F5F2ED]'>
                    <div className='relative my-inner-container '>
                        <WorkshopDetails />
                    </div>
                </div>
                <FocusSummerWorkshop />
                <Gallery />
                <section className='pb-0! '>
                    <div className='relative my-inner-container '>
                        <SmallSectionHeading titleTop="Frequently Asked" highlightText="Question" className="text-center" />
                        <div className='lg:w-10/12 mx-auto'>
                            <InnerSectionFaqs
                                titlePrefix="Summer Camp"
                                titleHighlight="FAQs"
                                faqs={summerCampFaqs}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}   