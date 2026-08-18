"use client";

import { useState } from "react";
import { Sliders, ShieldCheck, Flame, Droplets, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export default function SmartHomeSection() {
  const [activeTab, setActiveTab] = useState<"routines" | "panel" | "intercom" | "sensors">("routines");
  const { t, isArabic } = useLanguage();

  return (
    <section id="smarthome" className={`py-28 md:py-36 bg-[#F8F9FA] text-[#0E284A] relative ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-2">
            {t.smartHome.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
            {t.smartHome.title}
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-light mt-4">
            {t.smartHome.subtitle}
          </p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Hardware Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden bg-white p-5 md:p-6 text-[#0E284A] shadow-xl border border-slate-200 flex flex-col justify-between">
              
              {/* Dynamic Media Display (5:4 / 4:5 portrait frame) */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-100 flex items-center justify-center p-0 shadow-inner">
                {activeTab === "routines" && (
                  <video
                    key="routines-vid"
                    src="/videos/routines.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in duration-500 rounded-2xl"
                  />
                )}

                {activeTab === "panel" && (
                  <video
                    key="panel-vid"
                    src="/videos/smart-panel.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in duration-500 rounded-2xl"
                  />
                )}

                {activeTab === "intercom" && (
                  <video
                    key="intercom-vid"
                    src="/videos/hikvision-intercom.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in duration-500 rounded-2xl"
                  />
                )}

                {activeTab === "sensors" && (
                  <video
                    key="sensors-vid"
                    src="/videos/sensor-leakage.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in duration-500 rounded-2xl"
                  />
                )}
              </div>

              {/* Hardware Caption */}
              <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                <span className="font-bold text-[#0E284A] uppercase tracking-wider truncate pr-2">
                  {activeTab === "routines" && t.smartHome.captions.routines}
                  {activeTab === "panel" && t.smartHome.captions.panel}
                  {activeTab === "intercom" && t.smartHome.captions.intercom}
                  {activeTab === "sensors" && t.smartHome.captions.sensors}
                </span>
                <span className="text-[#64748B] shrink-0">{t.smartHome.captions.series}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Navigation Cards */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6">
            
            {/* Tab 1: Smart Routines */}
            <div
              onClick={() => setActiveTab("routines")}
              className={`p-6 md:py-6.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeTab === "routines"
                  ? "bg-white shadow-md border-[#3A7D44] ring-1 ring-[#3A7D44]"
                  : "bg-white/60 hover:bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0E284A] text-white shrink-0">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E284A] uppercase tracking-tight">
                    {t.smartHome.tabs.routines.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-light mt-1 leading-relaxed">
                    {t.smartHome.tabs.routines.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 2: Smart Panel */}
            <div
              onClick={() => setActiveTab("panel")}
              className={`p-6 md:py-6.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeTab === "panel"
                  ? "bg-white shadow-md border-[#3A7D44] ring-1 ring-[#3A7D44]"
                  : "bg-white/60 hover:bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0E284A] text-white shrink-0">
                  <Sliders className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E284A] uppercase tracking-tight">
                    {t.smartHome.tabs.panel.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-light mt-1 leading-relaxed">
                    {t.smartHome.tabs.panel.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 3: Video Intercom */}
            <div
              onClick={() => setActiveTab("intercom")}
              className={`p-6 md:py-6.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeTab === "intercom"
                  ? "bg-white shadow-md border-[#3A7D44] ring-1 ring-[#3A7D44]"
                  : "bg-white/60 hover:bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0E284A] text-white shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#3A7D44]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E284A] uppercase tracking-tight">
                    {t.smartHome.tabs.intercom.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-light mt-1 leading-relaxed">
                    {t.smartHome.tabs.intercom.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab 4: Leakage Sensors */}
            <div
              onClick={() => setActiveTab("sensors")}
              className={`p-6 md:py-6.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeTab === "sensors"
                  ? "bg-white shadow-md border-[#3A7D44] ring-1 ring-[#3A7D44]"
                  : "bg-white/60 hover:bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0E284A] text-white flex gap-1 shrink-0">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <Droplets className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0E284A] uppercase tracking-tight">
                    {t.smartHome.tabs.sensors.title}
                  </h3>
                  <p className="text-xs text-[#64748B] font-light mt-1 leading-relaxed">
                    {t.smartHome.tabs.sensors.desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
