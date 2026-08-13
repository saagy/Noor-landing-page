"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-context";

export function VideoSection({ onOpenInquiry }: { onOpenInquiry?: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t, isArabic } = useLanguage();

  return (
    <section className={`py-24 md:py-32 bg-[#F8F9FA] text-[#0E284A] relative ${isArabic ? 'font-arabic' : ''}`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-2">
            {t.video.tag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0E284A]">
            {t.video.title}
          </h2>
          <p className="text-[#64748B] text-sm md:text-base font-light mt-4">
            {t.video.subtitle}
          </p>
        </div>

        {/* Video Player Display Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/9] group bg-slate-900">
          {!isPlaying ? (
            <>
              <Image
                src="/images/Noor-most-used-scaled.jpg"
                alt="Noor City Video Cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E284A]/80 via-black/30 to-transparent" />
              
              {/* Central Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0E284A] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#3A7D44] group-hover:shadow-emerald-500/20"
                aria-label="Play Official Trailer Video"
              >
                <Play className={`w-8 h-8 md:w-10 md:h-10 fill-current text-white ${isArabic ? 'mr-1' : 'ml-1'}`} />
              </button>

              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{t.video.tag}</div>
                  <div className="text-lg md:text-2xl font-bold">{t.video.title}</div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/At6mBr74xHc?autoplay=1&controls=1"
              title="Noor Smart City Official Presentation"
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

      </div>
    </section>
  );
}

export function InquiryModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", unitType: "Apartment" });
  const { t, isArabic } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className={`relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200 text-[#0E284A] ${isArabic ? 'font-arabic' : ''}`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 ${isArabic ? 'left-6' : 'right-6'} p-2 rounded-full bg-slate-100 text-[#0E284A] hover:bg-slate-200 transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <span className="text-xs uppercase tracking-wider text-[#3A7D44] font-semibold block mb-1">
              {t.nav.inquireNow}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0E284A] mb-2">
              {t.video.modal.title}
            </h3>
            <p className="text-xs text-[#64748B] font-light mb-6">
              {t.video.modal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0E284A] mb-1">
                  {t.video.modal.fullName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isArabic ? "مصطفى محمود" : "e.g. Mostafa Mahmoud"}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#3A7D44] focus:ring-1 focus:ring-[#3A7D44]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0E284A] mb-1">
                  {t.video.modal.phone}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+20 100 000 0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#3A7D44] focus:ring-1 focus:ring-[#3A7D44]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0E284A] mb-1">
                  {t.video.modal.unitType}
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#3A7D44] focus:ring-1 focus:ring-[#3A7D44]"
                >
                  <option value="Apartment">{t.video.modal.apt}</option>
                  <option value="Villa">{t.video.modal.villa}</option>
                  <option value="Commercial">{t.video.modal.commercial}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#0E284A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#3A7D44] transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
              >
                <span>{t.video.modal.submit}</span>
                <Send className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#3A7D44] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold uppercase text-[#0E284A]">{t.video.modal.successTitle}</h3>
            <p className="text-xs text-[#64748B] max-w-xs mx-auto font-light">
              {t.video.modal.successDesc}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-slate-100 text-[#0E284A] font-bold text-xs uppercase tracking-wider hover:bg-slate-200"
            >
              {t.video.modal.close}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
