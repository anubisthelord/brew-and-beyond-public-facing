"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import Button from "@/components/shared/Button";

interface CTABannerProps {
  variant?: "dark" | "light";
}

export default function CTABanner({ variant = "dark" }: CTABannerProps) {
  const isDark = variant === "dark";

  return (
    <section className="relative w-full container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Banner Container */}
      <div 
        className={`relative w-full rounded-3xl overflow-hidden transition-colors duration-500 ${
          isDark 
            ? "bg-[#050505] shadow-2xl border border-white/5" 
            : "bg-[#FAFAFA] shadow-xl border border-[#E5DFD3]"
        }`}
      >
        
        {/* 1. Background Image */}
        <Image
          src="/demo/navbar-bg-gold.jpg"
          alt="CTA Background"
          fill
          priority
          className={`object-cover object-center z-0 transition-all duration-700 ${
            isDark ? "opacity-100" : "opacity-20 mix-blend-luminosity"
          }`}
          sizes="(max-width: 1280px) 100vw, 1280px"
        />

        {/* 2. Overlays & Gradients */}
        <div 
          className={`absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ${
            isDark ? "bg-black/85" : "bg-white/70"
          }`} 
        />
        <div 
          className={`absolute inset-0 z-0 pointer-events-none transition-all duration-500 ${
            isDark 
              ? "bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" 
              : "bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent"
          }`} 
        />

        {/* 3. Side Spotlights (Wall Washers) */}
        <div className="absolute top-0 right-0 w-[40%] h-full z-0 pointer-events-none opacity-60">
          <div 
            className={`absolute top-0 right-1/4 w-full h-full bg-gradient-to-t to-transparent blur-3xl transition-colors duration-500 ${
              isDark ? "from-amber-300/20 via-amber-200/5" : "from-[#E8DAC7]/50 via-transparent"
            }`} 
          />
          {/* Light bulb fixture - only show fully in dark mode */}
          <div 
            className={`absolute top-0 right-1/4 w-16 h-1 blur-sm rounded-full transition-all duration-500 ${
              isDark 
                ? "bg-amber-100/80 shadow-[0_0_20px_rgba(251,191,36,0.5)]" 
                : "bg-[#E8DAC7] shadow-none opacity-50"
            }`} 
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-14 lg:p-16 gap-10">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start text-left">
            <SectionHeading
              title="Ready to find your"
              rotatingTexts={["perfect brew?", "new favorite spot?", "daily ritual?"]}
              description="Whether you're here to focus, catch up with friends, or simply enjoy a meticulously crafted cup of coffee, your table is waiting."
              variant={isDark ? "light" : "dark"} 
              align="left"
              className="mb-8 md:mb-0"
            />
          </div>

          {/* Right Side: Buttons */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-center md:items-end justify-center gap-4 shrink-0">
            <Button
              href="/reserve"
              variant="primary"
              size="lg"
              className={`w-full sm:w-auto transition-all duration-500 ${
                isDark 
                  ? "shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
                  : "bg-[#2A2625] text-white hover:bg-black shadow-lg hover:shadow-xl"
              }`}
            >
              Reserve a Table
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            
           
          </div>

        </div>
      </div>
    </section>
  );
}