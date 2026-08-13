"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function Footer({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  const { t, isArabic } = useLanguage();

  return (
    <footer className={`relative bg-[#0E284A] text-white pt-24 pb-12 overflow-hidden border-t border-white/10 ${isArabic ? 'font-arabic' : ''}`}>
      
      {/* Background Watermark Monogram */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none translate-x-1/4 translate-y-1/4 w-[600px] h-[600px]">
        <Image
          src="/images/Logo/Untitled design.png"
          alt="NOOR Monogram Watermark"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Call To Action Banner */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-[#0E284A] via-[#153866] to-[#0E284A] border border-white/15 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold">
              {t.nav.arabicTag}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mt-1">
              {t.hero.title}
            </h3>
            <p className="text-xs md:text-sm text-white/70 font-light mt-2 max-w-xl">
              {t.footer.about}
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="shrink-0 bg-white text-[#0E284A] font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-[#3A7D44] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <span>{t.nav.inquireNow}</span>
            <ArrowUpRight className={`w-4 h-4 ${isArabic ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10 text-xs">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-20 w-20">
              <Image
                src="/images/Logo/footer-logo.png"
                alt="NOOR Capital Gardens Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
            <div className="text-white/90 font-arabic font-semibold text-sm pt-2">
              {t.nav.arabicTag}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs mb-2">{t.footer.sections}</div>
            <div>
              <a href="#masterplan" className="text-white/60 hover:text-white transition-colors">{t.footer.masterplan}</a>
            </div>
            <div>
              <a href="#smarthome" className="text-white/60 hover:text-white transition-colors">{t.footer.smartHome}</a>
            </div>
            <div>
              <a href="#access" className="text-white/60 hover:text-white transition-colors">{t.footer.accessControl}</a>
            </div>
            <div>
              <a href="#city" className="text-white/60 hover:text-white transition-colors">{t.footer.cityTech}</a>
            </div>
          </div>

          {/* Col 3: Social & Media */}
          <div className="md:col-span-4 space-y-4">
            <div className="font-bold text-white uppercase tracking-wider text-xs mb-2">{isArabic ? "تابعنا" : "Follow Us"}</div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#3A7D44] hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#3A7D44] hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#3A7D44] hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#3A7D44] hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-light">
          <div>© {new Date().getFullYear()} {t.footer.rights} {t.footer.developer}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <a href="#" className="hover:text-white/80">{isArabic ? "الشروط والأحكام" : "Terms of Service"}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
