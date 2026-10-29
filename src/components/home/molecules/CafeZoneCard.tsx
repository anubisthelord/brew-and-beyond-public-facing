import React from "react";
import Image from "next/image";
import { MapPin, Feather } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";

export interface ZoneCardProps {
  zone: {
    id: string;
    title: string;
    subtitle?: string;
    description: string | string[];
    image: string;
    tags: string[];
    color?: string;
    date?: string;
    coordinates?: string;
    stampText?: string;
  };
}

export default function ZoneCard({ zone }: ZoneCardProps) {
  // Fallbacks if the data doesn't pass them yet
  const date = zone.date || "October 24, 2026";
  const coordinates = zone.coordinates || "45.5152° N, 122.6784° W";
  const stampText = zone.stampText || "APPROVED • TEST KITCHEN";
  const subtitle = zone.subtitle || "Entry #042 • Artisan Bakery Section";

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 px-2 ">
      {/* 3D Book Base Container (Simulates thick hardcover base with stacked page depth) */}
      <div className="relative flex flex-col md:flex-row w-full min-h-[500px] rounded-4xl bg-[#F5F0E6]  border-12 border-stone-700">
        
        {/* Bottom Page Thickness Effect (Stacked paper look at bottom right) */}
        <div className="absolute -bottom-2.5 right-4 left-4 h-3 rounded-b-xl bg-[#E2D9C8] border-t border-[#D5CAA6] shadow-sm z-0 pointer-events-none" />
        <div className="absolute -bottom-1.5 right-2 left-2 h-2 rounded-b-xl bg-[#EDE5D5] border-t border-[#DCD3C0] pointer-events-none" />

        {/* ==================== CENTER BINDING / GUTTER CREASE ==================== */}
        {/* Deep Spine Gradient Shadow in the middle fold */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-20 bg-gradient-to-r from-black/15 via-black/20 to-black/10 z-20 pointer-events-none mix-blend-multiply" />
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-black/10 blur-[1px] z-21 pointer-events-none" />

        {/* ==================== 3D REALISTIC WIRE RINGS ==================== */}
        <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex-col justify-between  z-30 pointer-events-none h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="relative w-12 h-12 flex items-center justify-center">
              {/* Left Paper Punch Hole with Depth */}
              <div className="absolute left-1.5 w-3.5 h-5 rounded-full bg-[#1A1410] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] opacity-90 border border-black/20" />
              
              {/* Right Paper Punch Hole with Depth */}
              <div className="absolute right-1.5 w-3.5 h-5 rounded-full bg-[#1A1410] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] opacity-90 border border-black/20" />

              {/* Realistic Curved 3D Spiral Ring (SVG Vector with metallic shine and realistic perspective) */}
              <svg
                width="64"
                height="28"
                viewBox="0 0 64 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[2px_5px_4px_rgba(0,0,0,0.5)] z-40"
              >
                <defs>
                  <linearGradient id="metalRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="20%" stopColor="#D8D8D8" />
                    <stop offset="45%" stopColor="#707070" />
                    <stop offset="70%" stopColor="#303030" />
                    <stop offset="85%" stopColor="#909090" />
                    <stop offset="100%" stopColor="#1A1A1A" />
                  </linearGradient>
                </defs>
                
                {/* Back part of ring (cast inside hole) */}
                <path
                  d="M 6 14 C 6 2, 58 2, 58 14"
                  stroke="#222"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                
                {/* Front main metallic spiral loop */}
                <path
                  d="M 5 15 C 5 27, 59 27, 59 13"
                  stroke="url(#metalRingGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Top Metallic Specular Highlight */}
                <path
                  d="M 12 23 C 24 27, 40 27, 52 23"
                  stroke="#FFFFFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>
          ))}
        </div>
        {/* ==================== END BINDING ==================== */}

        {/* ==================== LEFT PAGE: UPDATED TO MATCH IMAGE ==================== */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl overflow-hidden bg-[#FAF8F2] z-10 flex flex-col p-6">
          
          {/* Dotted Paper Texture Background */}
          {/* <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[radial-gradient(#000000_0.75px,transparent_0.75px)] [background-size:12px_12px]" /> */}

          {/* Inner shadow simulating page curvature toward the center spine */}
          <div className="absolute inset-0 shadow-[inset_-25px_0_35px_rgba(0,0,0,0.15)] pointer-events-none" />
          
          {/* TOP HEADER: Location & Date */}
          <div className="relative z-10 flex items-center justify-between border-b border-black/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#8C4A27]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/60">{coordinates}</span>
            </div>
            <span className="text-xs font-serif italic text-black/50">{date}</span>
          </div>

          {/* PHOTO CONTAINER (Polaroid Style) */}
          <div className="relative my-auto group z-10 mx-auto w-full max-w-sm">
            
            {/* Corner Tape Accents */}
            <div className="absolute -top-3 -left-3 w-12 h-6 bg-[#E8E0CE]/80 backdrop-blur-[1px] rotate-[-25deg] border-y border-white/50 shadow-sm z-30 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-12 h-6 bg-[#E8E0CE]/80 backdrop-blur-[1px] rotate-[-15deg] border-y border-white/50 shadow-sm z-30 pointer-events-none" />

            {/* Polaroid Frame */}
            <div className="bg-white p-2.5 md:p-3 rounded-sm shadow-[0_10px_25px_rgba(0,0,0,0.15),0_2px_5px_rgba(0,0,0,0.1)] border border-[#E5DFD3] transform rotate-[-1deg] transition-transform duration-500 group-hover:rotate-0">
              
              <div className="relative h-95 w-full overflow-hidden bg-[#2A241E] rounded-sm">
                <Image
                  src={zone.image}
                  alt={zone.title}
                  fill
                  sizes="(max-width: 168px) 100vw, 50vw"
                  className="object-cover sepia-[0.2] contrast-[1.02] transition-transform duration-700 group-hover:scale-105 group-hover:sepia-0"
                  priority
                />
                {/* Photo Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/20 via-transparent to-yellow-100/10 pointer-events-none" />
              </div>

              {/* Subtitle under photo */}
              <div className="mt-2 text-center">
                <p className="font-serif italic text-[11px] text-[#4A3E35] tracking-wide">{subtitle}</p>
              </div>
            </div>

            {/* Stamp */}
            <div className="absolute -bottom-4 -left-2 z-30 pointer-events-none transform rotate-[-12deg]">
              <div className="border-[1.5px] border-dashed border-[#8C4A27]/70 rounded-sm px-2.5 py-1 bg-[#FAF5E8]/90 text-[8px] font-mono font-bold text-[#8C4A27] tracking-wider uppercase shadow-sm">
                {stampText}
              </div>
            </div>
          </div>

          {/* LEFT FOOTER */}
          <div className="relative z-10 mt-6 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] text-black/50">
            <span className="flex items-center gap-1 font-serif italic">
              <Feather className="w-3 h-3" /> Field Journal Notes
            </span>
            <span>Page 41</span>
          </div>
        </div>
        {/* ==================== END LEFT PAGE ==================== */}

        {/* RIGHT PAGE: Text Content Container with Realistic Paper Texture */}
        <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between rounded-b-xl md:rounded-bl-none md:rounded-r-xl bg-[#FAF6EE] z-10">
          
          {/* Inner shadow along the spine fold */}
          <div className="absolute inset-y-0 left-0 w-12 shadow-[inset_25px_0_30px_-10px_rgba(0,0,0,0.18)] pointer-events-none" />

          {/* Content Wrapper */}
          <div className="relative pl-0 md:pl-6 z-10 my-auto">
            <SectionHeading
              title={zone.title}
              description={zone.description}
              variant="dark"
              align="left"
              as="h3"
            />

            {/* Tags / Pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {zone.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-[#EFE8D8] px-4 py-1 text-xs font-semibold text-[#4A4238] border border-[#DCD3C0] shadow-[0_2px_4px_rgba(0,0,0,0.04)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}