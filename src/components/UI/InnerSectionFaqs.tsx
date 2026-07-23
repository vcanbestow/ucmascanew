'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from "framer-motion"; // <-- Added framer-motion

export interface FAQItem {
  question: string;
  answer: string;
}

interface InnerSectionFaqsProps {
  titlePrefix?: string;
  titleHighlight?: string;
  faqs: FAQItem[]; // Made required so every page passes its own content
}

export default function InnerSectionFaqs({
  titlePrefix = 'Frequently Asked',
  titleHighlight = 'Questions',
  faqs,
}: InnerSectionFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (


    <motion.div className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="w-full border border-ucmas-blue rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFaq(index)}
              className={`w-full flex justify-between items-center px-4 py-3 md:px-5   text-left font-semibold text-ucmas-blue transition-colors duration-300 ${isOpen ? 'bg-[#e7e8ef]' : 'bg-transparent hover:bg-gray-50'
                }`}
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base pr-4">{faq.question}</span>

              <div
                className={`shrink-0 w-6 h-6 border border-ucmas-blue rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                <ChevronDown size={14} strokeWidth={2.5} className="text-ucmas-blue" />
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 md:p-5 text-sm md:text-base text-ucmas-blue/80 bg-transparent border-t border-ucmas-blue">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>

  );
}