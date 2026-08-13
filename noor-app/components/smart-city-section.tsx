"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Cpu, ShieldCheck, Sun, Zap, Bus, Trash2, Radio, Droplets, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";

const cityFeatureConfigs = [
  { id: "command", key: "command" as const, image: "/images/control center.png", icon: Cpu },
  { id: "safety", key: "safety" as const, image: "/images/proactive_safety.png", icon: ShieldCheck },
  { id: "transport", key: "transport" as const, image: "/images/smart_transport_latest.png", icon: Bus },
  { id: "ev", key: "ev" as const, image: "/images/ev charging.png", icon: Zap },
  { id: "irrigation", key: "irrigation" as const, image: "/images/irrigator.jpg", icon: Droplets },
  { id: "solar", key: "solar" as const, image: "/images/solar_rooftops.png", icon: Sun },
  { id: "waste", key: "waste" as const, image: "/images/smart_waste_management.png", icon: Trash2 },
  { id: "wifi", key: "wifi" as const, image: "/images/480330775_971844698457260_5981762736876703084_n.jpg", icon: Radio },
];

export default function SmartCitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollTrackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      if (currentScroll >= 0 && currentScroll <= totalScroll) {
        const progress = currentScroll / totalScroll;
        const trackWidth = scrollTrackRef.current.scrollWidth - window.innerWidth + 120;
        // In RTL (Arabic), cards flow from right-to-left. Translating positively shifts cards to reveal items on the left.
        const targetX = isArabic ? progress * trackWidth : -progress * trackWidth;
        setTranslateX(targetX);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isArabic]);

  return (
    <section
      id="city"
      ref={containerRef}
      className={`relative h-[260vh] bg-[#F8F9FA] text-[#0E284A] ${isArabic ? 'font-arabic' : ''}`}
    >
      {/* Sticky Horizontal Track Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-16 overflow-hidden">
        
        {/* Section Header */}
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-1">
              {t.smartCity.tag}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
              {t.smartCity.title}
            </h2>
          </div>
          <div className="text-xs text-[#64748B] font-mono tracking-wider flex items-center gap-2">
            <span>{isArabic ? "اسحب لأسفل لتصفح تكنولوجيا المدينة" : "Scroll Down to Traverse Infrastructure"}</span>
            <ArrowRight className={`w-4 h-4 text-[#3A7D44] ${isArabic ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Horizontal Track Reel */}
        <div className="w-full overflow-hidden my-auto">
          <div
            ref={scrollTrackRef}
            className="flex gap-8 px-6 md:px-16 transition-transform duration-100 ease-out"
            style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
          >
            {cityFeatureConfigs.map((featureConfig) => {
              const IconComp = featureConfig.icon;
              const featureInfo = t.smartCity.features[featureConfig.key];

              return (
                <div
                  key={featureConfig.id}
                  className="w-[320px] md:w-[420px] shrink-0 rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0E284A]/40 transition-all duration-300 shadow-md group"
                >
                  <div>
                    <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={featureConfig.image}
                        alt={featureInfo.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E284A]/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 border border-slate-200 text-[#0E284A] shadow-sm">
                        <IconComp className="w-5 h-5 text-[#3A7D44]" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-[#3A7D44] uppercase tracking-wider block mb-1">
                      {featureInfo.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#0E284A] uppercase tracking-tight mb-2">
                      {featureInfo.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#64748B] font-light leading-relaxed">
                      {featureInfo.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
                    <span>{isArabic ? "بنية نور التحتية" : "Noor Infrastructure"}</span>
                    <span className="text-[#0E284A] font-bold font-mono">5G-Powered</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
