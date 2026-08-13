"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Scan, Building2, UserCheck, KeyRound, QrCode, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/language-context";

interface JourneyStepConfig {
  id: string;
  stepKey: "step1" | "step2" | "step3" | "step4";
  icon: any;
  hasVideoSpotlight?: boolean;
  imageUrl?: string;
  imageAlt?: string;
}

const RESIDENT_STEP_CONFIGS: JourneyStepConfig[] = [
  {
    id: "res-1",
    stepKey: "step1",
    icon: Scan,
    imageUrl: "/images/QRcode.png",
    imageAlt: "Resident Digital QR Clearance",
  },
  {
    id: "res-2",
    stepKey: "step2",
    icon: Building2,
    hasVideoSpotlight: true,
  },
  {
    id: "res-3",
    stepKey: "step3",
    icon: UserCheck,
    imageUrl: "/images/smart_elevator_dispatch.png",
    imageAlt: "Smart Elevator Dispatch - Zero Lobby Wait",
  },
  {
    id: "res-4",
    stepKey: "step4",
    icon: ShieldCheck,
    imageUrl: "/images/guided_elevator_access.png",
    imageAlt: "Destination Floor Lift",
  },
];

const VISITOR_STEP_CONFIGS: JourneyStepConfig[] = [
  {
    id: "vis-1",
    stepKey: "step1",
    icon: QrCode,
    imageUrl: "/images/digital_qr_invitation.png",
    imageAlt: "Digital QR Invitation App Screen",
  },
  {
    id: "vis-2",
    stepKey: "step2",
    icon: KeyRound,
    imageUrl: "/images/QRcode.png",
    imageAlt: "Visitor Digital QR Verification",
  },
  {
    id: "vis-3",
    stepKey: "step3",
    icon: Building2,
    hasVideoSpotlight: true,
  },
  {
    id: "vis-4",
    stepKey: "step4",
    icon: ShieldCheck,
    imageUrl: "/images/guided_elevator_access.png",
    imageAlt: "Guided Elevator Access",
  },
];

export default function SmartAccessSection() {
  const [journeyTab, setJourneyTab] = useState<"resident" | "visitor">("resident");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [depth, setDepth] = useState<number[]>([0, 0, 0, 0]);
  const { t, isArabic } = useLanguage();

  const currentConfigs = journeyTab === "resident" ? RESIDENT_STEP_CONFIGS : VISITOR_STEP_CONFIGS;
  const currentTranslations = journeyTab === "resident" ? t.smartAccess.residentSteps : t.smartAccess.visitorSteps;

  useEffect(() => {
    function onScroll() {
      const STICKY_TOP = 110;
      const nextDepth = currentConfigs.map((_, i) => {
        let count = 0;
        for (let j = i + 1; j < currentConfigs.length; j++) {
          const el = cardRefs.current[j];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const stickyTopJ = STICKY_TOP + j * 24;
          if (rect.top <= stickyTopJ + 4) count++;
        }
        return count;
      });
      setDepth(nextDepth);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [journeyTab, currentConfigs.length]);

  // Pause video automatically when covered
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (depth[1] > 0) {
      if (!videoEl.paused) {
        videoEl.pause();
      }
    } else {
      const rect = videoEl.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible && videoEl.paused) {
        videoEl.play().catch(() => {});
      }
    }
  }, [depth]);

  return (
    <section id="access" className={`py-28 md:py-36 bg-[#F8F9FA] text-[#0E284A] relative ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-2">
            {t.smartAccess.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
            {t.smartAccess.title}
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-light mt-4">
            {t.smartAccess.subtitle}
          </p>

          {/* Journey Toggle Pills */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/80 border border-slate-300/60 mt-8 shadow-inner">
            <button
              onClick={() => {
                setJourneyTab("resident");
                setDepth([0, 0, 0, 0]);
              }}
              className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                journeyTab === "resident"
                  ? "bg-[#0E284A] text-white shadow-md"
                  : "text-[#0E284A]/70 hover:text-[#0E284A]"
              }`}
            >
              {t.smartAccess.tabs.resident}
            </button>
            <button
              onClick={() => {
                setJourneyTab("visitor");
                setDepth([0, 0, 0, 0]);
              }}
              className={`px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                journeyTab === "visitor"
                  ? "bg-[#0E284A] text-white shadow-md"
                  : "text-[#0E284A]/70 hover:text-[#0E284A]"
              }`}
            >
              {t.smartAccess.tabs.visitor}
            </button>
          </div>
        </div>

        {/* Sticky Stacking Step Cards Container */}
        <div className="relative space-y-6 pb-12" style={{ perspective: "1200px" }}>
          {currentConfigs.map((stepConfig, i) => {
            const Icon = stepConfig.icon;
            const stepInfo = currentTranslations[stepConfig.stepKey];
            const d = depth[i] || 0;
            const scale = 1 - d * 0.035;
            const translateY = d * 8;
            const stickyTop = 110 + i * 24;
            const hasMedia = Boolean(stepConfig.hasVideoSpotlight || stepConfig.imageUrl);

            return (
              <div
                key={stepConfig.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="sticky transition-all duration-200"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: 10 + i,
                }}
              >
                <div
                  style={{
                    transform: `scale(${scale}) translateY(${translateY}px)`,
                    transformOrigin: "top center",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    willChange: "transform",
                  }}
                  className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 md:p-7 overflow-hidden"
                >
                  <div className={`grid grid-cols-1 ${hasMedia ? "lg:grid-cols-12" : ""} gap-6 lg:gap-8 items-start`}>
                    
                    {/* Step Text Info */}
                    <div className={hasMedia ? "lg:col-span-6 space-y-3" : "space-y-3"}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#3A7D44] uppercase tracking-wider px-3 py-1 bg-[#3A7D44]/10 rounded-full">
                          {isArabic ? `الخطوة ${i + 1}` : `Step ${i + 1}`} • {stepInfo.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#0E284A] text-white flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold uppercase tracking-tight text-[#0E284A]">
                        {stepInfo.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed font-light">
                        {stepInfo.desc}
                      </p>
                    </div>

                    {/* Video Spotlight */}
                    {stepConfig.hasVideoSpotlight && (
                      <div className={`lg:col-span-6 transition-all duration-500 ${d > 0 ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-lg aspect-[16/10]">
                          <video
                            ref={videoRef}
                            src="/videos/hikvision-intercom.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    )}

                    {/* Image Spotlight for QR code */}
                    {stepConfig.imageUrl && (
                      <div className={`lg:col-span-6 transition-all duration-500 ${d > 0 ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"}`}>
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-lg aspect-[16/10]">
                          <Image
                            src={stepConfig.imageUrl}
                            alt={stepConfig.imageAlt || stepInfo.title}
                            fill
                            className="object-cover rounded-2xl"
                          />
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
