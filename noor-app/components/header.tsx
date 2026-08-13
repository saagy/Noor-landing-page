"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function Header({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage, isArabic } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-lg py-3 px-5 md:px-7 rounded-full text-[#0E284A]"
          : "bg-black/25 backdrop-blur-md border border-white/15 shadow-xl py-3.5 px-5 md:px-7 rounded-full text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo - Smooth Fade-In on Scroll */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`relative h-8 md:h-9 w-28 md:w-34 transition-all duration-500 group-hover:scale-105 ${
              scrolled
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Image
              src="/images/Logo/Untitled design (2).svg"
              alt="NOOR Capital Gardens Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-8 ${isArabic ? 'font-arabic' : ''}`}>
          <a
            href="#masterplan"
            className={`text-xs tracking-wider uppercase font-semibold transition-colors ${
              scrolled ? "text-[#0E284A]/70 hover:text-[#0E284A]" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.masterplan}
          </a>
          <a
            href="#smarthome"
            className={`text-xs tracking-wider uppercase font-semibold transition-colors ${
              scrolled ? "text-[#0E284A]/70 hover:text-[#0E284A]" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.smartHome}
          </a>
          <a
            href="#access"
            className={`text-xs tracking-wider uppercase font-semibold transition-colors ${
              scrolled ? "text-[#0E284A]/70 hover:text-[#0E284A]" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.accessControl}
          </a>
          <a
            href="#city"
            className={`text-xs tracking-wider uppercase font-semibold transition-colors ${
              scrolled ? "text-[#0E284A]/70 hover:text-[#0E284A]" : "text-white/90 hover:text-white"
            }`}
          >
            {t.nav.cityTech}
          </a>
        </nav>

        {/* Right Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              scrolled
                ? "bg-slate-100 text-[#0E284A] hover:bg-slate-200 border border-slate-200"
                : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
            }`}
            title={isArabic ? "Switch to English" : "التحويل إلى العربية"}
          >
            <Globe className="w-3.5 h-3.5 text-[#3A7D44]" />
            <span className={isArabic ? "font-sans" : "font-arabic"}>{t.nav.languageToggle}</span>
          </button>

          {/* Inquire Button */}
          <button
            onClick={onOpenInquiry}
            className={`relative group overflow-hidden rounded-full px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm ${
              isArabic ? "font-arabic" : ""
            } ${
              scrolled
                ? "bg-[#0E284A] text-white hover:bg-[#3A7D44]"
                : "bg-white text-[#0E284A] hover:bg-[#3A7D44] hover:text-white"
            }`}
          >
            <span>{t.nav.inquireNow}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isArabic ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle & Mobile Language Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
              scrolled ? "bg-slate-100 text-[#0E284A]" : "bg-white/20 text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#3A7D44]" />
            <span>{t.nav.languageToggle}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              scrolled ? "text-[#0E284A]" : "text-white"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden mt-4 pt-4 border-t flex flex-col gap-4 pb-2 text-center animate-in fade-in slide-in-from-top-2 duration-300 ${
            isArabic ? "font-arabic" : ""
          } ${
            scrolled ? "border-slate-200 text-[#0E284A]" : "border-white/15 text-white"
          }`}
        >
          <a
            href="#masterplan"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider font-semibold py-1"
          >
            {t.nav.masterplan}
          </a>
          <a
            href="#smarthome"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider font-semibold py-1"
          >
            {t.nav.smartHome}
          </a>
          <a
            href="#access"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider font-semibold py-1"
          >
            {t.nav.accessControl}
          </a>
          <a
            href="#city"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-wider font-semibold py-1"
          >
            {t.nav.cityTech}
          </a>
          <div className="pt-2 flex flex-col items-center gap-3">
            <span className="text-xs font-arabic">{t.nav.arabicTag}</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry?.();
              }}
              className="w-full max-w-xs bg-[#0E284A] text-white font-bold uppercase tracking-wider text-xs py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#3A7D44]"
            >
              <span>{t.nav.inquireNow}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
