"use client";

import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Send, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    quote: "Rhoncus neque viverra justo ultrices duist lorem dolor sed consectetur adipiscing.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    quote: "The perfect blend of a vibrant workspace and a quiet sanctuary. Fast Wi-Fi and the best cortado.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    quote: "The culinary test kitchen is a stroke of genius. Watching the pastries being laminated is pure theater.",
  },
  {
    id: 4,
    name: "David & Priya",
    quote: "The vinyl lounge feels like stepping back in time. Our absolute favorite spot for lazy Sunday afternoons.",
  },
  {
    id: 5,
    name: "James Wilson",
    quote: "You can taste the precision in every cup. Their rotating micro-lots are always exciting and perfectly extracted.",
  },
  {
    id: 6,
    name: "Amelia Thorne",
    quote: "The silent library saved my thesis. Ergonomic chairs, warm lighting, and the staff is incredibly kind.",
  },
];

export default function ClientFeedbackSection() {
  return (
    <section className="relative w-full container mx-auto rounded-2xl bg-[#050505] py-16 overflow-hidden">
      
      {/* 1. Background Image */}
      <Image
        src="/demo/navbar-bg-gold.jpg"
        alt="Wall Background"
        fill
        priority
        className="object-cover object-center z-0"
        sizes="(max-width: 1280px) 100vw, 1280px"
      />

      {/* 2. Very Dark Overlay & Gradient */}
      <div className="absolute inset-0 bg-black/90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 z-0 pointer-events-none" />

      {/* 3. Top Upward Lights (Wall Washers) */}
      <div className="absolute top-0 left-0 w-full h-[50%] z-0 pointer-events-none flex justify-between px-10 sm:px-24 md:px-32 opacity-50">
        <div className="relative w-1/3 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-amber-300/30 via-amber-200/5 to-transparent blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-100/80 blur-sm rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </div>
        <div className="relative w-1/3 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-amber-300/30 via-amber-200/5 to-transparent blur-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-100/80 blur-sm rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-7xl mx-auto space-y-12">
        
        {/* Centered Header */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center ">
          <SectionHeading
            title="Words from our"
            rotatingTexts={["community.", "regulars.", "friends."]}
            description="We built this space for you. Here is what our community has to say about their daily rituals, deep work sessions, and favorite corners."
            variant="light" 
            align="center"
          />
        </div>

        {/* Centered Grid of Two-Tone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="flex flex-col w-full rounded-xl overflow-hidden  border border-white/5 transition-all duration-500 "
            >
              {/* ==================== TOP HEADER BAR ==================== */}
              <div className=" bg-[#1F1D1B] px-5 py-1 border-b border-white/5 relative overflow-hidden">
                {/* Subtle top glare */}
                
                <h3 className="font-serif !text-lg font-semibold !text-[#F5F0E6] tracking-wide">
                  {review.name}
                </h3>
              </div>

              {/* ==================== BOTTOM CONTENT BODY ==================== */}
              <div className="flex flex-col flex-1 bg-[#121110] p-6 pt-6 justify-between">
                
                {/* Quote */}
                <p className="!text-sm !text-[#C4C1BC]  mb-5 ">
                  "{review.quote}"
                </p>

                {/* Footer Actions */}
                <div className="flex items-center justify-between mt-auto">
                  
                  {/* Read More */}
                  <button className="group/btn flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[#A8A19D] hover:text-[#F5F0E6] transition-colors">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 text-[#A8A19D] group-hover/btn:text-[#F5F0E6] transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                  </button>

                  {/* Icons */}
                  <div className="flex items-center gap-4 text-[#A8A19D]">
                    <button className="hover:text-red-400 transition-colors">
                      <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </button>
                    <button className="hover:text-amber-400 transition-colors">
                      <MessageCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </button>
                    <button className="hover:text-blue-400 transition-colors">
                      <Send className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}