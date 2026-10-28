"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import Button from "@/components/shared/Button";

export default function OurStorySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full container mx-auto rounded-2xl bg-[#050505] py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[600px] overflow-hidden">
      
      {/* 1. Background Image */}
      <Image
        src="/demo/navbar-bg-gold.jpg" // 👈 REPLACE WITH YOUR BACKGROUND IMAGE PATH
        alt="Wall Background"
        fill
        priority
        className="object-cover object-center z-0"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />

      {/* 2. Very Dark Overlay & Gradient (Makes it extremely moody) */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-0 pointer-events-none" />

      {/* 3. Bottom Upward Lights (Wall Washers) */}
      <div className="absolute top-0 left-0 w-full h-[50%] z-0 pointer-events-none flex justify-between px-10 sm:px-24 md:px-32 opacity-50">
        {/* Left Spotlight Beam */}
        <div className="relative w-1/3 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-amber-300/30 via-amber-200/5 to-transparent blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-100/80 blur-sm rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </div>
        
        {/* Right Spotlight Beam */}
        <div className="relative w-1/3 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-amber-300/30 via-amber-200/5 to-transparent blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-100/80 blur-sm rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 w-full max-w-7xl relative z-10">
        
        {/* Left Side — SectionHeading Component */}
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
          <SectionHeading
            title="Some places just feel like"
            rotatingTexts={[
              "your place.",
              "home.",
              "a fresh start.",
            ]}
            description="The details, the atmosphere, the little moments. B&B is about creating a space where you can settle in, enjoy something good, and feel comfortable being yourself."
            variant="light"
            align="left"
          />

<div className="shrink-0">
            <Button
              href="#full-menu"
              variant="primary"
              size="lg"
            >
              Explore full menu
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        {/* Right Side — Wall-Mounted LED TV */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
          
          <div className="relative w-[44rem] max-w-full">
            
            {/* Wall Mount Shadow */}
            <div className="absolute inset-0 bg-black blur-2xl rounded-md transform translate-y-4 scale-[0.98] -z-10" />

            {/* TV Body */}
            <div className="relative rounded-[4px] bg-[#0c0c0c] p-1.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10 z-10">
              
              {/* Screen */}
              <div className="relative w-full aspect-video rounded-[2px] overflow-hidden bg-black ring-1 ring-black/80">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/demo/promoVideo/PromoVideo.mp4"
                >
                  <source src="/demo/promoVideo/PromoVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Play video with sound"
                      className="group flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-110 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
                    >
                      <Play
                        className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1 transition-transform duration-300 group-hover:scale-110"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </button>
                  </div>
                )}
              </div>

              {/* LED indicator */}
              <div className="absolute bottom-2.5 right-4 flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,1)]" />
              </div>
            </div>
            
            {/* Drop Shadow on the Wall */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black blur-xl rounded-[100%] -z-10 pointer-events-none" />
            
          </div>
        </div>
      </div>
    </section>
  );
}