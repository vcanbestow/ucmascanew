"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/UI/Button"; // Adjust path if necessary
import { path } from '@/utils/path';

import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ChevronDown,
  MapPin,
  Globe,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// --- Types & Interfaces ---
export interface NavItem {
  title: string;
  href: string;
  hasMegaMenu?: boolean;
}

// Navigation Data
const navigationData: NavItem[] = [
  { title: "Program", href: "/program", hasMegaMenu: true },
  { title: "Camps & Workshops", href: "/camps", hasMegaMenu: true },
  { title: "Events", href: "/events", hasMegaMenu: true },
  { title: "About", href: "/about", hasMegaMenu: true },
  { title: "Resources", href: "/resources", hasMegaMenu: true },
  { title: "Franchising", href: "/franchising", hasMegaMenu: true },
];

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function Header() {
  // Mobile Navigation aur Language Dropdown States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  // Track selected language (Default 'en')
  const [currentLang, setCurrentLang] = useState<"en" | "fr">("en");

  // Marquee text items
  const newsItems = [
    "CFA Franchisees' Choice Designation Winners 🎉",
    "This area can be used as offer/announcement/update posting.",
  ];
  const repeatedNews = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  // 1. Initialize Google Translate Script
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    addScript();
  }, []);

  // 2. Programmatic Translation Handler
  const changeLanguage = (langCode: "en" | "fr") => {
    setCurrentLang(langCode);
    setIsLangDropdownOpen(false);

    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    }
  };

  // Mobile Menu scroll lock & ESC listener
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-[0_.25rem_1.25rem_-.625rem_rgba(0,0,0,0.1)] flex flex-col ">
      {/* Hidden container needed by Google Translate engine core mechanics */}
      <div id="google_translate_element" className="hidden" />

      {/* Persistent global CSS overrides for clean layout */}
      <style dangerouslySetInnerHTML={{
        __html: `
          body { top: 0px !important; }
          .skiptranslate, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
          .goog-text-highlight { background: transparent !important; box-shadow: none !important; }
        `
      }} />

      <div className="bg-ucmas-blue text-white w-full z-50 border-b border-gray-700/50 hidden xl:block">
        <div className="flex items-start justify-between h-10 text-sm w-full">
          <style dangerouslySetInnerHTML={{
            __html: `@keyframes marquee{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}.animate-marquee{animation:marquee 30s linear infinite}`,
          }} />

          {/* Scrolling Ticker */}
          <div className="flex-1 overflow-hidden whitespace-nowrap flex items-center h-full group">
            <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center w-max">
              {repeatedNews.map((text, i) => (
                <React.Fragment key={i}>
                  <Link href="#" className="px-4 hover:text-gray-300 transition-colors cursor-pointer">
                    {text}
                  </Link>
                  <span className="text-gray-500 opacity-75 px-2">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Top Right Action Buttons */}
          <div className="flex items-start pl-4 gap-3 shrink-0 relative z-20 md:mr-12 3xl:mr-32">
            <Link href="tel:18778262795" className="h-12 px-5 lg:px-6 flex items-center gap-2 bg-ucmas-counter-franchise-yellow rounded-b-xl text-gray-900 font-bold hover:brightness-105 shadow-sm transition-all text-[1.02rem]">
              <Phone className="w-4 h-4 fill-current" /> 1877-UCMAS-95
            </Link>
            <Link href="/login" className="h-12 px-5 lg:px-6 flex items-center gap-2 bg-ucmas-counter-franchise-yellow rounded-b-xl text-gray-900 font-medium hover:brightness-105 shadow-sm transition-all">
              Student Login <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP MAIN NAVIGATION */}
      <nav className="hidden my-container xl:flex items-center justify-between py-4">
        <Link href="/" className="shrink-0 mr-8 ">
          <div className="flex items-center justify-center">
            <Image src={`${path}/images/logo-1.webp`} alt="UCMAS Logo" width={140} height={45} className="h-14 w-auto" />
          </div>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          {navigationData.map((item) => (
            <li key={item.title} className="relative group">
              <Link
                href="#"
                className="flex items-center gap-1.5 py-2 text-ucmas-blue font-medium transition-colors focus:outline-none hover:text-ucmas-themeblue relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-ucmas-themeblue after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out"
                aria-expanded="false"
                aria-haspopup={item.hasMegaMenu ? "true" : "false"}
              >
                {item.title}
                {item.hasMegaMenu && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-ucmas-themeblue transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {item.hasMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  <div className="w-150 h-50 bg-white shadow-xl rounded-lg border border-gray-100 p-6 flex items-center justify-center">
                    <span className="text-gray-400 border border-dashed border-gray-300 p-4 rounded">
                      Mega Menu Content Placeholder for {item.title}
                    </span>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right CTA Buttons & Language Selector */}
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <Button variant="header_ucmas_sky_btn" href="#" icon={<MapPin size={17} strokeWidth={2} />} iconPosition="left" className="mx-auto font-medium">
            Find Centre
          </Button>
          <Button variant="header_ucmas_red_btn" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className="mx-auto font-medium">
            Book FREE Trial
          </Button>
          <Button variant="header_ucmas_white_btn_outline" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className="mx-auto font-medium">
            Register Now
          </Button>

          {/* Desktop Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => setIsLangDropdownOpen(true)}
            onMouseLeave={() => setIsLangDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 py-2 text-gray-700 hover:text-gray-900 transition-colors focus:outline-none">
              <Globe className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase">{currentLang}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 top-full pt-1 z-50">
                <div className="w-32 bg-white rounded shadow-lg border border-gray-200 py-1 flex flex-col overflow-hidden">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLang === "en" ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentLang === "fr" ? "bg-gray-100 font-semibold text-gray-900" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    Français
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 3. PREMIUM MOBILE NAVIGATION BAR & DRAWER */}
      <div className="xl:hidden">
        <div className="flex items-center justify-between p-4 bg-white">
          <Link href="/" className="focus:outline-none">
            <div className="w-auto h-11.25 flex items-center justify-center rounded">
              <Image src={`${path}/images/logo-1.webp`} alt="UCMAS Logo" width={140} height={45} className="object-contain" />
            </div>
          </Link>
          {!isMobileMenuOpen && (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -mr-2 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-ucmas-themeblue rounded"
              aria-label="Open Menu"
            >
              {/* <Menu className="w-6 h-6" /> */}
              <svg width="569" height="395" className="w-6 h-6" viewBox="0 0 569 395" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="231" width="338" height="65" rx="32.5" fill="#2A2A2A"/>
<rect y="165" width="569" height="65" rx="32.5" fill="#2A2A2A"/>
<rect x="231" y="330" width="338" height="65" rx="32.5" fill="#2A2A2A"/>
</svg>

            </button>
          )}
        </div>

        {/* Mobile Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Slide-out Drawer */}
        <nav className={`fixed top-0 right-0 h-full w-[85vw] max-w-100 bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="absolute top-4 right-4 z-50">
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-ucmas-themeblue rounded" aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="pt-18 pb-6 px-6 flex flex-col h-full">
            <ul className="flex-1">
              {navigationData.map((item) => (
                <li key={item.title} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between py-3 font-medium text-ucmas-blue"
                  >
                    {item.title}
                    {item.hasMegaMenu && (
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openMobileDropdown === item.title ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${openMobileDropdown === item.title ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="pl-4 border-l-2 border-gray-100 text-gray-500 text-sm italic">
                        [Mega Menu Content Placeholder for {item.title}]
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile Action Utility CTAs */}
            <div className="mt-8 space-y-3 shrink-0">
              <Button variant="header_ucmas_sky_btn" href="#" icon={<MapPin size={17} strokeWidth={2} />} iconPosition="left" className="!w-full font-medium">
                Find Centre
              </Button>
              <Button variant="header_ucmas_red_btn" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className="!w-full font-medium">
                Book FREE Trial
              </Button>
              <Button variant="header_ucmas_white_btn_outline" href="#" icon={<ArrowRight size={17} strokeWidth={2} />} iconPosition="right" className="!w-full font-medium">
                Register Now
              </Button>

              {/* Mobile Language Switches */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-center gap-6">
                <button
                  onClick={() => { changeLanguage("en"); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors ${currentLang === "en" ? "text-gray-900" : "text-gray-400"}`}
                >
                  <Globe className="w-5 h-5" /> English
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => { changeLanguage("fr"); setIsMobileMenuOpen(false); }}
                  className={`text-sm font-semibold transition-colors ${currentLang === "fr" ? "text-gray-900" : "text-gray-400"}`}
                >
                  Français
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}