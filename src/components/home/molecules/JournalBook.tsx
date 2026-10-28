"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Feather } from "lucide-react";

// ==================== DATA ====================
const ZONE_DATA = {
  id: "kitchen",
  title: "The Culinary Test Kitchen",
  subtitle: "Entry #042 • Artisan Bakery Section",
  date: "October 24, 2026",
  description: [
    "An open invitation to watch the magic happen. The Culinary Test Kitchen strips away the mystery of the back-of-house, putting the artistry of our bakers and chefs on full display.",
    "Sit at the chef's counter and watch the meticulous process of small-batch baking. You will see the folding of laminated doughs, the scoring of sourdough loaves, and the careful assembly of seasonal café plates.",
    "The air here carries the irresistible scent of melted butter and caramelizing sugars."
  ],
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", // Replace with local asset e.g., "/demo/kitchen.jpg" for next/image optimization
  tags: ["Live Baking", "Chef's Counter", "Sourdough", "Fresh Aromas"],
  stampText: "APPROVED • TEST KITCHEN",
  coordinates: "45.5152° N, 122.6784° W"
};

// ==================== COMPONENT ====================
export default function JournalBook() {
  const zone = ZONE_DATA;

  // Hardcoded Theme Configuration
  const theme = {
    coverBg: "bg-[#2D1B14]",
    coverBorder: "border-[#4A2E22]",
    paperBg: "bg-[#FAF5E8]",
    paperBorder: "border-[#E5DBC5]",
    accentColor: "text-[#8C4A27]",
    tagBg: "bg-[#EFE4D0] text-[#5C3219] border-[#D8C7A9]",
    fontSerif: "font-serif",
    spineGutter: "from-black/40 via-black/60 to-black/30"
  };

  return (
    <div className="flex w-full items-center justify-center p-4 md:p-12">
      
      {/* 3D PERSPECTIVE CONTAINER */}
      <div className="relative flex w-full max-w-5xl items-center justify-center perspective-[2000px]">
        
        {/* THE BOOK BOARD */}
        <div className="relative w-full transform-style-3d">
          
          {/* AMBIENT CAST SHADOW BENEATH BOOK */}
          <div className="absolute -inset-4 -z-30 translate-y-12 scale-95 rounded-[3rem] bg-black/60 opacity-80 blur-3xl" />
          <div className="absolute inset-2 -z-20 translate-y-6 scale-98 rounded-[2.5rem] bg-black/40 blur-xl" />

          {/* HARDCOVER OUTER BACKING BASE */}
          <div className={`relative w-full rounded-2xl p-3 md:p-4 ${theme.coverBg} border ${theme.coverBorder} shadow-2xl`}>
            
            {/* STACKED PAGE THICKNESS LAYERS */}
            <div className="absolute -bottom-3 left-6 right-6 -z-10 flex h-4 justify-between rounded-b-xl border-t border-[#A89E8B] bg-[#C9BFAC] px-8 shadow-inner">
              <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#B8AD9A,#B8AD9A_1px,#C9BFAC_1px,#C9BFAC_3px)] opacity-60" />
            </div>
            <div className="absolute -bottom-2 left-4 right-4 -z-10 h-3 rounded-b-xl border-t border-[#BEB29E] bg-[#DDD3C1]" />
            <div className="absolute -bottom-1 left-2.5 right-2.5 -z-10 h-2 rounded-b-xl border-t border-[#D0C4B0] bg-[#EBE2D1]" />

            {/* SIDE STACKED PAGE EDGES */}
            <div className="absolute -right-2 top-4 bottom-4 -z-10 w-3 rounded-r-md border-l border-[#C5BAA6] bg-[#E0D5C3] bg-[repeating-linear-gradient(0deg,#C5BAA6,#C5BAA6_1px,#E0D5C3_1px,#E0D5C3_3px)] opacity-80 shadow-md" />
            <div className="absolute -left-2 top-4 bottom-4 -z-10 w-3 rounded-l-md border-r border-[#C5BAA6] bg-[#E0D5C3] bg-[repeating-linear-gradient(0deg,#C5BAA6,#C5BAA6_1px,#E0D5C3_1px,#E0D5C3_3px)] opacity-80 shadow-md" />

            {/* INNER OPEN JOURNAL PAGES (SPREAD) */}
            <div className={`relative flex min-h-[520px] w-full flex-col overflow-hidden rounded-xl border md:min-h-[560px] md:flex-row ${theme.paperBg} ${theme.paperBorder} shadow-[inset_0_0_40px_rgba(0,0,0,0.06)]`}>

              {/* Paper Texture Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000000_0.75px,transparent_0.75px)] opacity-25 mix-blend-multiply [background-size:12px_12px]" />

              {/* CENTER GUTTER / CREASE SHADOW */}
              <div className={`pointer-events-none absolute top-0 bottom-0 left-1/2 z-25 hidden w-24 -translate-x-1/2 bg-gradient-to-r mix-blend-multiply md:block ${theme.spineGutter}`} />
              <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-26 hidden w-1.5 -translate-x-1/2 bg-black/60 blur-[1px] md:block" />
              <div className="pointer-events-none absolute top-0 bottom-0 left-[calc(50%-28px)] z-24 hidden w-4 bg-gradient-to-r from-transparent to-white/20 md:block" />
              <div className="pointer-events-none absolute top-0 bottom-0 left-[calc(50%+12px)] z-24 hidden w-4 bg-gradient-to-r from-white/20 to-transparent md:block" />

              {/* 3D WIRE SPIRAL RINGS */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-30 hidden h-full -translate-x-1/2 flex-col justify-between py-6 md:flex">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="relative flex h-7 w-20 items-center justify-center">
                    
                    {/* Paper Holes */}
                    <div className="absolute left-2 h-5 w-3.5 rounded-full border border-black/30 bg-[#18130E] opacity-95 shadow-[inset_0_3px_5px_rgba(0,0,0,0.9)]" />
                    <div className="absolute right-2 h-5 w-3.5 rounded-full border border-black/30 bg-[#18130E] opacity-95 shadow-[inset_0_3px_5px_rgba(0,0,0,0.9)]" />
                    
                    {/* Hole Highlights */}
                    <div className="absolute -top-0.5 left-2 h-1 w-3.5 rounded-t-full bg-white/40 blur-[0.5px]" />
                    <div className="absolute -top-0.5 right-2 h-1 w-3.5 rounded-t-full bg-white/40 blur-[0.5px]" />

                    {/* SVG 3D Spiral Coil */}
                    <svg width="72" height="32" viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-40 drop-shadow-[3px_8px_6px_rgba(0,0,0,0.55)]">
                      <defs>
                        <linearGradient id={`ringGrad_gold_${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FFF2A1" />
                          <stop offset="20%" stopColor="#D4AF37" />
                          <stop offset="50%" stopColor="#AA7C11" />
                          <stop offset="75%" stopColor="#5B4002" />
                          <stop offset="90%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#2E1F00" />
                        </linearGradient>
                      </defs>
                      {/* Back Loop */}
                      <path d="M 8 16 C 8 3, 64 3, 64 16" stroke="#1A1510" strokeWidth="4.5" strokeLinecap="round" opacity="0.75" />
                      {/* Front Loop */}
                      <path d="M 7 17 C 7 31, 65 31, 65 15" stroke={`url(#ringGrad_gold_${i})`} strokeWidth="5" strokeLinecap="round" />
                      {/* Highlights */}
                      <path d="M 14 26 C 28 30, 44 30, 58 25" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                      <circle cx="20" cy="27" r="1" fill="#FFFFFF" opacity="0.9" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* LEFT PAGE: IMAGE & STAMPS */}
              <div className="relative z-10 flex w-full flex-col justify-between border-b border-black/5 p-6 md:w-1/2 md:border-b-0 md:border-r md:p-10">
                <div className="pointer-events-none absolute inset-0 shadow-[inset_-30px_0_40px_-15px_rgba(0,0,0,0.18)]" />

                {/* Header Info */}
                <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#8C4A27]" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-black/60">{zone.coordinates}</span>
                  </div>
                  <span className="font-serif text-xs italic text-black/50">{zone.date}</span>
                </div>

                {/* Photo Container */}
                <div className="group relative my-auto">
                  <div className="pointer-events-none absolute -left-3 -top-3 z-30 h-6 w-12 rotate-[-25deg] border-y border-white/50 bg-[#E8E0CE]/80 shadow-sm backdrop-blur-[1px]" />
                  <div className="pointer-events-none absolute -bottom-3 -right-3 z-30 h-6 w-12 rotate-[-15deg] border-y border-white/50 bg-[#E8E0CE]/80 shadow-sm backdrop-blur-[1px]" />

                  <div className="rotate-[-1deg] rounded-sm border border-[#E5DFD3] bg-[#FAF8F5] p-3 shadow-[0_10px_25px_rgba(0,0,0,0.15),0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:rotate-0 md:p-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#2A241E] md:aspect-square">
                      
                      {/* Using Next.js Image */}
                      <Image 
                        src={zone.image} 
                        alt={zone.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover sepia-[0.25] contrast-[1.02] transition-transform duration-700 group-hover:scale-105 group-hover:sepia-0" 
                      />
                      
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-950/20 via-transparent to-yellow-100/10" />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="font-serif text-xs italic tracking-wide text-[#4A3E35]">{zone.subtitle}</p>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="pointer-events-none absolute -bottom-4 left-4 z-30 rotate-[-12deg]">
                    <div className="rounded-full border-2 border-dashed border-[#8C4A27]/60 bg-[#FAF5E8]/90 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#8C4A27] shadow-sm">
                      {zone.stampText}
                    </div>
                  </div>
                </div>

                {/* Left Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-3 text-[11px] text-black/50">
                  <span className="flex items-center gap-1 font-serif italic">
                    <Feather className="h-3 w-3" /> Field Journal Notes
                  </span>
                  <span>Page 41</span>
                </div>
              </div>

              {/* RIGHT PAGE: CONTENT */}
              <div className="relative z-10 flex w-full flex-col justify-between p-6 md:w-1/2 md:p-10">
                <div className="pointer-events-none absolute inset-0 shadow-[inset_30px_0_40px_-15px_rgba(0,0,0,0.14)]" />

                <div className="relative z-10 my-auto pl-0 md:pl-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${theme.accentColor}`}>
                      {zone.subtitle}
                    </span>
                  </div>

                  <h2 className={`mb-4 text-2xl font-bold leading-tight text-[#2A241E] md:text-3xl ${theme.fontSerif}`}>
                    {zone.title}
                  </h2>

                  <div className="mb-6 h-0.5 w-12 bg-[#8C4A27]/40" />

                  <div className="space-y-3 text-xs font-normal leading-relaxed text-[#4A4238] md:text-sm">
                    {zone.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {zone.tags.map((tag) => (
                      <span key={tag} className={`rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition-transform duration-200 hover:scale-105 ${theme.tagBg}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Footer */}
                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-black/10 pl-0 pt-3 text-[11px] text-black/50 md:pl-6">
                  <span className="font-serif italic">Archive Reference: 2026-B</span>
                  <span>Page 42</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}