"use client";

import { useState } from "react";
import Image from "next/image";
import { Wallet, Smartphone, Gauge, Users, FileText, QrCode, CreditCard, CheckCircle2 } from "lucide-react";

export default function SmartLivingSection() {
  const [activeModule, setActiveModule] = useState<"wallet" | "onboarding" | "utilities" | "clubs" | "services">("wallet");

  return (
    <section id="app" className="py-28 md:py-36 bg-[#F8F9FA] text-[#0E284A] relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-2">
            Smart City Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
            THE NOOR MOBILE APP
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-light mt-4">
            Your 24/7 digital concierge to all city services, payments, community clubs, and automated utility management.
          </p>
        </div>

        {/* Module Selector Navigation Bar */}
        <div className="flex items-center justify-center gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-6 mb-12">
          <button
            onClick={() => setActiveModule("wallet")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeModule === "wallet"
                ? "bg-[#0E284A] text-white shadow-md scale-105"
                : "bg-white text-[#0E284A]/70 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Wallet className="w-4 h-4" />
            <span>Noor Wallet & Cards</span>
          </button>

          <button
            onClick={() => setActiveModule("onboarding")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeModule === "onboarding"
                ? "bg-[#0E284A] text-white shadow-md scale-105"
                : "bg-white text-[#0E284A]/70 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>Digital Onboarding</span>
          </button>

          <button
            onClick={() => setActiveModule("utilities")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeModule === "utilities"
                ? "bg-[#0E284A] text-white shadow-md scale-105"
                : "bg-white text-[#0E284A]/70 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span>Smart Utilities</span>
          </button>

          <button
            onClick={() => setActiveModule("clubs")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeModule === "clubs"
                ? "bg-[#0E284A] text-white shadow-md scale-105"
                : "bg-white text-[#0E284A]/70 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Clubs & Lifestyle</span>
          </button>

          <button
            onClick={() => setActiveModule("services")}
            className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeModule === "services"
                ? "bg-[#0E284A] text-white shadow-md scale-105"
                : "bg-white text-[#0E284A]/70 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Permits & Requests</span>
          </button>
        </div>

        {/* Display Container: Clean Phone Mockup Left + Interactive Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">
          
          {/* Phone Display Column - Fixed Scaled Mockup Frame Alignment */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px] drop-shadow-xl bg-slate-900 rounded-[44px] border-4 border-slate-800 overflow-hidden flex flex-col">
              
              {/* Phone Status Bar Simulation */}
              <div className="h-6 bg-slate-900 flex items-center justify-between px-6 text-[10px] text-white/70 pt-1 shrink-0 z-20">
                <span>9:41</span>
                <div className="w-12 h-3 bg-black rounded-full mx-auto" />
                <span>5G</span>
              </div>

              {/* Inside Phone Screen Content */}
              <div className="flex-1 overflow-hidden bg-[#0E1D33] z-10 flex flex-col p-4 text-xs">
                {activeModule === "wallet" && (
                  <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-300">
                    <Image
                      src="/images/wallet.png"
                      alt="Noor App Wallet Screen"
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                )}

                {activeModule === "onboarding" && (
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-4 px-2 animate-in fade-in duration-300 text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                      <QrCode className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="font-bold text-sm">Scan Unit QR Code</div>
                    <p className="text-white/60 text-[11px]">
                      Instant auto-registration upon scanning your personalized unit handover code.
                    </p>
                    <div className="w-full py-2 bg-[#3A7D44] text-white rounded-xl font-bold text-xs">
                      Registered & Ready
                    </div>
                  </div>
                )}

                {activeModule === "utilities" && (
                  <div className="h-full flex flex-col justify-between p-2 animate-in fade-in duration-300 text-white">
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-emerald-400 uppercase">Monthly Usage</div>
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                        <span>Electricity</span>
                        <span className="font-mono text-emerald-400 font-bold">1,245 kWh (↓ 15%)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex justify-between items-center">
                        <span>Water Meter</span>
                        <span className="font-mono text-blue-400 font-bold">1,850 gal</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#3A7D44]/30 border border-[#3A7D44] text-center">
                      <span className="text-[10px] text-emerald-300 font-bold uppercase block">Eco Achievement</span>
                      <span className="text-xs text-white font-bold">Green Master Badge</span>
                    </div>
                  </div>
                )}

                {activeModule === "clubs" && (
                  <div className="h-full flex flex-col justify-around text-center p-2 animate-in fade-in duration-300 text-white">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/20 font-bold text-emerald-400">
                      New Clubhouse Open
                    </div>
                    <div className="space-y-2 text-left text-[11px]">
                      <div className="p-2 rounded-lg bg-white/5">🏆 Fitness Club — 120+ Members</div>
                      <div className="p-2 rounded-lg bg-white/5">📚 Readers Hub — 45 Members</div>
                      <div className="p-2 rounded-lg bg-white/5">🎾 Tennis Court 2 — Booked (6 PM)</div>
                    </div>
                  </div>
                )}

                {activeModule === "services" && (
                  <div className="h-full flex flex-col justify-center space-y-3 p-2 animate-in fade-in duration-300 text-left text-white">
                    <div className="text-xs font-bold text-white uppercase">Service Request #4812</div>
                    <div className="p-2.5 rounded-lg bg-white/10 text-[10px] text-white/80">
                      Category: Home Maintenance<br />
                      Status: <span className="text-emerald-400 font-bold">Technician Dispatched</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/10 text-[10px] text-white/80">
                      Category: Visitor Permit<br />
                      Status: <span className="text-blue-300 font-bold">Approved</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Module Detail Info Column */}
          <div className="lg:col-span-7 space-y-6">
            {activeModule === "wallet" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3A7D44] uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Go Cashless Across The Entire City</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A]">
                  Your Integrated Noor Wallet & City Card
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed text-sm">
                  Experience seamless digital payments. Every resident receives a personalized Noor City Premium Card. Pay for club fees, cafes, shuttle tickets, and utilities instantly from one secure wallet.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0E284A] text-sm">One-Touch Tap & Pay</div>
                    <div className="text-xs text-[#64748B] mt-1 font-light">NFC & QR code payments across all commercial centers</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0E284A] text-sm">Automated Billing</div>
                    <div className="text-xs text-[#64748B] mt-1 font-light">Auto-settle water, electricity, and maintenance fees</div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === "onboarding" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3A7D44] uppercase tracking-wider">
                  <QrCode className="w-4 h-4" />
                  <span>Instant 3-Step Unit Registration</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A]">
                  Frictionless Digital Handover
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed text-sm">
                  No paperwork or long waiting queues. Scan your unit handover QR code to auto-populate your residency credentials, facial recognition profiles, and parking access permits instantly.
                </p>
              </div>
            )}

            {activeModule === "utilities" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3A7D44] uppercase tracking-wider">
                  <Gauge className="w-4 h-4" />
                  <span>Real-Time Resource Monitoring</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A]">
                  Smart Meter Analytics & Energy Savings
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed text-sm">
                  Track hourly electricity and water consumption directly from your phone. Receive eco-alerts when consumption spikes and unlock community sustainability badges.
                </p>
              </div>
            )}

            {activeModule === "clubs" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3A7D44] uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Community Lifestyle & Sports</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A]">
                  Clubhouse & Event Reservations
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed text-sm">
                  Book tennis courts, swimming pool slots, and private event halls. Stay updated on neighborhood events, sports tournaments, and community news feeds.
                </p>
              </div>
            )}

            {activeModule === "services" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#3A7D44] uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>24/7 Digital Concierge</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A]">
                  Maintenance & Permit Requests
                </h3>
                <p className="text-[#64748B] font-light leading-relaxed text-sm">
                  Submit maintenance requests with photo attachments, issue visitor entry passes, and track dispatch status in real-time from your mobile device.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
