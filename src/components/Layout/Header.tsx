"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/UI/Button"; // Adjust path if necessary

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

export default function Header() {
  // Mobile Navigation aur Language Dropdown States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Marquee text items
  const newsItems = [
    "CFA Franchisees' Choice Designation Winners 🎉",
    "This area can be used as offer/announcement/update posting.",
  ];
  const repeatedNews = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  // Mobile Menu open hone par Body scroll lock karna aur ESC key listener lagana
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
    <header className="w-full sticky top-0 z-50 bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] flex flex-col ">
      <div className="bg-ucmas-blue text-white w-full z-50 border-b border-gray-700/50 hidden xl:block">
        {/* Yahan se 'container' aur 'mx-auto' hata diya taaki left side screen ko touch kare */}
        <div className="flex items-start justify-between h-10 text-sm w-full">
          {/* CSS for perfectly smooth infinite scrolling marquee */}
          <style
            dangerouslySetInnerHTML={{
              __html: `@keyframes marquee{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}.animate-marquee{animation:marquee 30s linear infinite}                     `,
            }}
          />

          {/* Scrolling Ticker - Ab ye extreme left se start hoga (No padding on left) */}
          <div className="flex-1 overflow-hidden whitespace-nowrap flex items-center h-full group">
            <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center w-max">
              {repeatedNews.map((text, i) => (
                <React.Fragment key={i}>
                  {/* Yahan span ki jagah Link laga diya hai, apna exact path href me daal dena */}
                  <Link
                    href="#"
                    className="px-4 hover:text-gray-300 transition-colors cursor-pointer"
                  >
                    {text}
                  </Link>
                  <span className="text-gray-500 opacity-75 px-2">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Top Right Action Buttons - Hanging Tabs Effect */}
          {/* Right side me padding rakhi hai taaki niche ke nav items ke sath align rahe */}
          <div className="flex items-start pl-4 gap-3 shrink-0 relative z-20  md:mr-12 3xl:mr-32">
            <a
              href="tel:18778262795"
              className="h-12 px-5 lg:px-6 flex items-center gap-2 bg-ucmas-counter-franchise-yellow rounded-b-xl text-gray-900 font-bold hover:brightness-105 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              1877-UCMAS-95
            </a>
            <a
              href="/login"
              className="h-12 px-5 lg:px-6 flex items-center gap-2 bg-ucmas-counter-franchise-yellow rounded-b-xl text-gray-900 font-medium hover:brightness-105 shadow-sm transition-all"
            >
              Student Login
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. DESKTOP MAIN NAVIGATION */}
      <nav className="hidden my-container xl:flex items-center justify-between py-4  ">
        {/* Logo Placeholder */}
        <Link href="/" className="shrink-0 mr-8 ">
          <div className="   flex items-center justify-center ">
            <Image
              src="/images/logo-1.webp"
              alt="UCMAS Logo"
              width={140}
              height={45}
              className="h-14 w-auto"
            />
          </div>
        </Link>

        {/* Nav Links */}
        {/* Nav Links - Inline Mapping (No Separate Components) */}
        <ul className="flex items-center gap-4 lg:gap-6 flex-1 justify-center">
          {navigationData.map((item) => (
            <li key={item.title} className="relative group">
              <Link 
              href="#"
                className="
          flex items-center gap-1.5 py-2 text-ucmas-blue font-medium transition-colors focus:outline-none 
          hover:text-ucmas-themeblue relative
          after:content-[''] after:absolute after:-bottom-1 after:left-0 
          after:w-full after:h-[2px] after:bg-ucmas-themeblue 
          after:scale-x-0 hover:after:scale-x-100 
          after:origin-bottom-right hover:after:origin-bottom-left 
          after:transition-transform after:duration-300 after:ease-out
        "
                aria-expanded="false"
                aria-haspopup={item.hasMegaMenu ? "true" : "false"}
              >
                {item.title}
                {item.hasMegaMenu && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-ucmas-themeblue transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {/* Mega Menu Structural Placeholder */}
              {item.hasMegaMenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  <div className="w-[600px] h-[200px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 flex items-center justify-center">
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
          <Button
            variant="header_ucmas_sky_btn"
            href="#"
            icon={<MapPin size={17} strokeWidth={2} />}
            iconPosition="left"
            className="mx-auto"
          >
            Find Centre
          </Button>
          <Button
            variant="header_ucmas_red_btn"
            href="#"
            icon={<ArrowRight size={17} strokeWidth={2} />}
            iconPosition="right"
            className="mx-auto"
          >
            Book FREE Trial
          </Button>
          <Button
            variant="header_ucmas_white_btn_outline"
            href="#"
            icon={<ArrowRight size={17} strokeWidth={2} />}
            iconPosition="right"
            className="mx-auto"
          >
            Register Now
          </Button>

          {/* Desktop Language Selector */}
          <div
            className="relative "
            onMouseEnter={() => setIsLangDropdownOpen(true)}
            onMouseLeave={() => setIsLangDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5  py-2 text-gray-700 hover:text-gray-900 transition-colors focus:outline-none">
              <Globe className="w-4 h-4" />
              <span className="font-semibold text-sm">EN</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 top-full pt-1 z-50">
                <div className="w-32 bg-white rounded shadow-lg border border-gray-400 py-2 flex flex-col gap-2 overflow-hidden">
                  <Button
                    variant=""
                    href="#"
                    iconPosition="right"
                    className="mx-auto"
                  >
                    English
                  </Button>
                  <Button
                    variant=""
                    href="#"
                    iconPosition="right"
                    className="mx-auto"
                  >
                    Français
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 3. PREMIUM MOBILE NAVIGATION BAR & DRAWER */}
      <div className="xl:hidden">
        {/* Mobile Mini Header */}
        <div className="flex items-center justify-between p-4 bg-white">
          <Link href="/" className=" focus:outline-none">
            <div className="w-auto h-11.25  flex items-center justify-center  rounded">
              <Image
                src="/images/logo-1.webp"
                alt="UCMAS Logo"
                width={140}
                height={45}
                className="object-contain"
              />
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 text-gray-700 z-50 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-ucmas-themeblue rounded"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Slide-out Drawer */}
        <nav
          className={`fixed top-0 right-0 h-full w-[85vw] max-w-100 bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-24 pb-6 px-6 flex flex-col h-full">
            {/* Mobile Menu Navigation Links */}
            <ul className="flex-1">
              {navigationData.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.title ? null : item.title,
                      )
                    }
                    className="w-full flex items-center justify-between py-3  font-medium text-ucmas-blue"
                  >
                    {item.title}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          openMobileDropdown === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Smooth Mobile Dropdown Expand/Collapse */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openMobileDropdown === item.title
                        ? "grid-rows-[1fr] opacity-100 pb-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
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
              <Button
                variant="header_ucmas_sky_btn"
                href="#"
                icon={<MapPin size={17} strokeWidth={2} />}
                iconPosition="left"
                className=" !w-full"
              >
                Find Centre
              </Button>
              <Button
                variant="header_ucmas_red_btn"
                href="#"
                icon={<ArrowRight size={17} strokeWidth={2} />}
                iconPosition="right"
                className=" !w-full"
              >
                Book FREE Trial
              </Button>
              <Button
                variant="header_ucmas_white_btn_outline"
                href="#"
                icon={<ArrowRight size={17} strokeWidth={2} />}
                iconPosition="right"
                className=" !w-full"
              >
                Register Now
              </Button>

              {/* Mobile Language Switches */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-center gap-6">
                <button className="flex items-center gap-2 text-gray-900 font-semibold">
                  <Globe className="w-5 h-5" /> English
                </button>
                <span className="text-gray-300">|</span>
                <button className="text-gray-500 font-medium hover:text-gray-900">
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
