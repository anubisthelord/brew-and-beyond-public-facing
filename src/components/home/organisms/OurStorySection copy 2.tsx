"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";

export default function OurStorySection() {
  return (
    <section className="relative w-full container mx-auto rounded-2xl bg-[#121614] py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[600px]">
      {/* Outer Billboard Frame / Container */}
      <div className="relative  w-7xl rounded-xl border-[10px] sm:border-[14px] border-[#1e1e1e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden bg-[#181a18]">
        
        {/* Overhead Billboard Spotlights */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-around pointer-events-none px-12 -translate-y-1">
          <div className="w-8 h-2 bg-neutral-700 rounded-b shadow-[0_10px_25px_rgba(255,255,255,0.15)]" />
          <div className="w-8 h-2 bg-neutral-700 rounded-b shadow-[0_10px_25px_rgba(255,255,255,0.15)]" />
          <div className="w-8 h-2 bg-neutral-700 rounded-b shadow-[0_10px_25px_rgba(255,255,255,0.15)]" />
        </div>

        {/* Billboard Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 h-[540px]">
          
          {/* Left Side Banner (Dark Forest Green Background) */}
          <div className="relative md:col-span-6 bg-[#0B3C26] p-8 sm:p-10 flex flex-col justify-between overflow-hidden text-white">
            
            {/* Brand Logo & Title Header */}
            <div className="flex items-center space-x-3 z-10">
              {/* Custom Mattress Feather Logo Icon */}
              <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  className="w-full h-full text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Feather Icon */}
                  <path
                    d="M44 8C32 8 24 18 20 28C26 26 34 24 40 18M38 12C30 18 24 26 22 34"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Quilted Mattress Base */}
                  <rect
                    x="8"
                    y="34"
                    width="48"
                    height="20"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="#0B3C26"
                  />
                  {/* Grid Tufting Lines */}
                  <path
                    d="M8 44H56M20 34V54M32 34V54M44 34V54"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                </svg>
              </div>
              <span className="text-2xl font-semibold tracking-wide font-sans">
                Kismat Mattress
              </span>
            </div>

            {/* Typography Heading */}
            <div className="my-8 z-10 space-y-2">
            <SectionHeading
              title="Some places just feel like"
              rotatingTexts={[
                "your place.",
                "home.",
                "a fresh start.",
              ]}
              description="The details, the atmosphere, the little moments. B&B is about creating a space where you can settle in, enjoy something good, and feel comfortable being yourself."
              variant="dark"
              align="left"
            />
            </div>

            {/* Decorative Gold Arc Curve Line (Bottom Left Accent) */}
            <div className="absolute bottom-[-40px] left-[-40px] w-48 h-48 rounded-full border border-amber-300/40 pointer-events-none" />

            {/* Footer Contact & Location Bar */}
            <div className="z-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-emerald-50/90 pt-4 border-t border-emerald-800/40">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-white" />
                <span>Palanpur Jakatnaka, Surat</span>
              </div>
              <span className="hidden sm:inline text-emerald-700">|</span>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-4 h-4 text-white" />
                <a
                  href="tel:9913163599"
                  className="hover:underline transition-colors"
                >
                  Call 99131 63599
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Image Banner */}
          <div className="relative md:col-span-6 min-h-[300px] md:min-h-full bg-[#d8c3b0]">
            <Image
              src="/demo/hero/bgdemo (1).jpg" // Replace with your image asset path
              alt="Kismat Mattress Modern Bedroom Display"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}