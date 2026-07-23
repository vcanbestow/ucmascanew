'use client';
import { motion } from "framer-motion";

interface SmallSectionHeadingProps {
  titleTop?: string;
  highlightText?: string;
  titleBottom?: string;
  className?: string;
}

export default function SmallSectionHeading({
  titleTop = '',
  highlightText = '',
  titleBottom = '',
  className = '',
}: SmallSectionHeadingProps) {
  return (
    <motion.h2 className={`text-2xl xl:text-[1.65rem] font-bold text-ucmas-blue mb-8 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
    >
      {titleTop}{' '}
      {highlightText && <span className="text-ucmas-red">{highlightText}</span>}{' '}
      {titleBottom}
    </motion.h2>
  );
}