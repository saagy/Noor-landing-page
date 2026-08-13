"use client";

import { useState } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MasterplanSection from "@/components/masterplan-section";
import SmartHomeSection from "@/components/smart-home-section";
import SmartLivingSection from "@/components/smart-living-section";
import SmartAccessSection from "@/components/smart-access-section";
import SmartCitySection from "@/components/smart-city-section";
import { VideoSection, InquiryModal } from "@/components/video-section";
import Footer from "@/components/footer";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#0E284A] selection:bg-[#0E284A] selection:text-white font-sans antialiased">
      {/* Dynamic Dual-State Navigation Header */}
      <Header onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Act 1: Cinematic Video Morph Hero */}
      <HeroSection />

      {/* Act 3: Interactive Masterplan & Floor Plan Brochures */}
      <MasterplanSection />

      {/* Act 4: In-Unit Intelligence & Micro-Loop Autoplay Animations */}
      <SmartHomeSection />

      {/* Act 5: Smart Access Control & Video Intercom Showcase */}
      <SmartAccessSection />

      {/* Act 6: The Noor Mobile App & Wallet (Hidden for now) */}
      {/* <SmartLivingSection /> */}

      {/* Act 7: Horizontal City Infrastructure Gallery with 5G Scroll Tracer */}
      <SmartCitySection />

      {/* Act 8: Official Film & Media */}
      <VideoSection onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Act 9: Footer & Inquiries */}
      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Interactive Sales Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </main>
  );
}
