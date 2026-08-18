"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  FileDown,
  ArrowUpRight,
  Building2,
  Trees,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";

const masterplanHotspotConfigs = [
  { id: "residential", key: "residential" as const, icon: Building2, top: "42%", left: "35%" },
  { id: "park", key: "park" as const, icon: Trees, top: "30%", left: "58%" },
  { id: "club", key: "club" as const, icon: Sparkles, top: "65%", left: "52%" },
  { id: "commercial", key: "commercial" as const, icon: ShoppingBag, top: "76%", left: "61%" },
];

const unitBrochureConfigs = [
  { id: "apt-b", key: "aptB" as const, image: "/brochures/apt_b.jpg", pdf: "/brochures/B.pdf" },
  { id: "apt-c", key: "aptC" as const, image: "/brochures/apt_c.jpg", pdf: "/brochures/c.pdf" },
  { id: "apt-d", key: "aptD" as const, image: "/brochures/apt_d.jpg", pdf: "/brochures/d.pdf" },
  { id: "apt-e", key: "aptE" as const, image: "/brochures/apt_e.jpg", pdf: "/brochures/e.pdf" },
  { id: "villa-b", key: "villaB" as const, image: "/brochures/villa_b.jpg", pdf: "/brochures/VillaB.pdf" },
];

export default function MasterplanSection() {
  const { t, isArabic } = useLanguage();
  const [activeHotspotId, setActiveHotspotId] = useState("residential");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const activeSpotConfig = masterplanHotspotConfigs.find((s) => s.id === activeHotspotId) || masterplanHotspotConfigs[0];
  const activeSpotInfo = t.masterplan.hotspots[activeSpotConfig.key];

  // Smooth auto-scroll loop supporting both LTR and RTL directions
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animId: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPaused && container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const stepAmount = (25 * delta) / 1000;

        if (isArabic) {
          container.scrollBy({ left: -stepAmount });
          if (Math.abs(container.scrollLeft) >= maxScroll - 4) {
            container.scrollLeft = 0;
          }
        } else {
          container.scrollBy({ left: stepAmount });
          if (container.scrollLeft >= maxScroll - 4) {
            container.scrollLeft = 0;
          }
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isArabic]);

  return (
    <section id="masterplan" className={`py-28 md:py-36 bg-[#F8F9FA] text-[#0E284A] relative ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-2">
            {t.masterplan.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
            {t.masterplan.title}
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-light mt-4">
            {t.masterplan.subtitle}
          </p>
        </div>

        {/* Masterplan Image Showcase (Full Uncropped Image Frame) */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl p-4 md:p-6">
            
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/Noor-Master-new.jpg"
                alt="Full Uncropped Noor City Masterplan"
                fill
                className="object-contain"
                priority
              />

              {/* Interactive Hotspot Pins Overlay */}
              {masterplanHotspotConfigs.map((spot) => {
                const IconComponent = spot.icon;
                const spotInfo = t.masterplan.hotspots[spot.key];
                const isActive = activeHotspotId === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group ${
                      isActive ? "scale-125 z-20" : "hover:scale-110"
                    }`}
                    style={{ top: spot.top, left: spot.left }}
                    aria-label={spotInfo.title}
                  >
                    <div
                      className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isActive
                          ? "bg-[#0E284A] text-white ring-4 ring-[#3A7D44]"
                          : "bg-white/90 text-[#0E284A] border border-slate-200 hover:bg-[#0E284A] hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hotspot Info Drawer */}
            <div className="mt-6 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#3A7D44] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.masterplan.districtTag}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0E284A] uppercase">{activeSpotInfo.title}</h3>
                <p className="text-xs md:text-sm text-[#64748B] font-light mt-1 max-w-2xl leading-relaxed">
                  {activeSpotInfo.description}
                </p>
              </div>
              {activeHotspotId === "residential" && (
                <a
                  href="#brochures"
                  className="shrink-0 px-5 py-2.5 rounded-full bg-[#0E284A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3A7D44] transition-colors flex items-center gap-1.5"
                >
                  <span>{t.masterplan.viewFloorPlans}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isArabic ? 'rotate-90' : ''}`} />
                </a>
              )}
            </div>

          </div>
        </div>

        {/* Floor Plan & Unit Brochure Cards - Single Row Auto-Scrolling Carousel */}
        <div id="brochures" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-1">
                {t.masterplan.brochuresTag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#0E284A]">
                {t.masterplan.brochuresTitle}
              </h3>
            </div>
          </div>

          {/* Single Row Horizontal Scroll Container */}
          <div
            ref={scrollRef}
            dir={isArabic ? "rtl" : "ltr"}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex flex-nowrap gap-6 overflow-x-auto py-4 scroll-smooth cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {unitBrochureConfigs.map((unitConfig) => {
              const unitInfo = t.masterplan.units[unitConfig.key];
              return (
                <div
                  key={unitConfig.id}
                  className="w-[320px] md:w-[360px] shrink-0 bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#0E284A]/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Floor Plan Render Thumbnail */}
                    <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-slate-50 mb-6 border border-slate-100 p-2">
                      <Image
                        src={unitConfig.image}
                        alt={unitInfo.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[11px] font-bold text-[#3A7D44] uppercase tracking-wider block mb-1">
                      {unitInfo.category}
                    </span>
                    <h4 className="text-xl font-bold text-[#0E284A] uppercase tracking-tight mb-1">
                      {unitInfo.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#0E284A]/70 mb-3 font-mono">
                      {unitInfo.specs}
                    </div>
                    <p className="text-xs text-[#64748B] font-light leading-relaxed line-clamp-3">
                      {unitInfo.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={unitConfig.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 rounded-full bg-[#0E284A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#3A7D44] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <FileDown className="w-4 h-4 text-emerald-400" />
                      <span>{t.masterplan.downloadBrochure}</span>
                    </a>
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
