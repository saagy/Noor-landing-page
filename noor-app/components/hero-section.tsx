"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/language-context";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, isArabic } = useLanguage();

  // Bind scroll progress directly to container ref with zero React state re-renders
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Fast, immediate initial zoom out response (completes zoom-out by 40% scroll progress)
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.85]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [0, 32]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const progressWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[125vh] bg-[#F8F9FA] text-[#0E284A]">
      {/* Sticky Fullscreen to Floating Card Morph */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden p-0 md:p-4">
        
        {/* Dynamic GPU Hardware-Accelerated Container */}
        <motion.div
          className="relative w-full h-full overflow-hidden shadow-2xl border border-slate-200/80 will-change-transform"
          style={{
            scale,
            borderRadius,
          }}
        >
          {/* High-res Aerial Background Masterplan Image Fallback */}
          <Image
            src="/images/Noor-most-used-scaled.jpg"
            alt="Noor Smart City Masterplan Render"
            fill
            className="object-cover"
            priority
          />

          {/* Video Background / Embed */}
          <div className="absolute inset-0 z-1 pointer-events-none opacity-85">
            <iframe
              src="https://www.youtube-nocookie.com/embed/At6mBr74xHc?autoplay=1&mute=1&controls=0&loop=1&playlist=At6mBr74xHc&playsinline=1&enablejsapi=1"
              title="Noor Smart City Cinematic Trailer"
              className="w-full h-full scale-125 object-cover"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0E284A]/90 via-[#0E284A]/30 to-black/40 z-2" />

          {/* Foreground Hero Content Overlay */}
          <motion.div
            className={`relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-between py-16 md:py-24 text-center ${
              isArabic ? "font-arabic" : ""
            }`}
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
          >
            {/* Clean Sub-header Tag */}
            <div className="flex justify-center">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-white/90 uppercase border-b border-white/30 pb-1">
                {t.hero.presenter}
              </span>
            </div>

            {/* Central Monolithic Title & Arabic Tagline */}
            <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <div className="text-white font-arabic text-2xl md:text-4xl font-bold tracking-wide">
                {t.hero.arabicTagline}
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.95]">
                {t.hero.title}
              </h1>
              <p className="text-base md:text-xl font-light text-white/90 max-w-2xl mx-auto tracking-wide">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Bottom Scroll Cue */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                {t.hero.scroll}
              </div>
              <div className="w-7 h-11 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
                <div className="w-1.5 h-3 rounded-full bg-white animate-bounce" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Card Border Progress Cue */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#3A7D44] z-30"
            style={{ width: progressWidth }}
          />
        </motion.div>
      </div>
    </section>
  );
}
