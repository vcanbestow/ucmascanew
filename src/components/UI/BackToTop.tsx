"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Ensure lucide-react is installed

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor screen scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Button tabhi dikhega jab user 300px se zyada scroll karega
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-ucmas-red text-white shadow-lg transition-all duration-300 hover:bg-ucmas-blue hover:scale-110 active:scale-95 ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6 animate-pulse hover:animate-none" />
    </button>
  );
}