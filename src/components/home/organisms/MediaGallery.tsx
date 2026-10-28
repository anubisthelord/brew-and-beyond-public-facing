"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import Button from "@/components/shared/Button";

// Array of 12 random images for the gallery
const galleryImages = [
  { id: 1, src: "/demo/hero/bgdemo (1).jpg", alt: "Coffee preparation", className: "col-span-2 row-span-2" },
  { id: 2, src: "/demo/hero/bgdemo (2).jpg", alt: "Cafe interior", className: "col-span-1 row-span-1" },
  { id: 3, src: "/demo/hero/bgdemo (3).jpg", alt: "Latte art", className: "col-span-1 row-span-1" },
  { id: 4, src: "/demo/hero/bgdemo (4).jpg", alt: "Pastries", className: "col-span-1 row-span-1" },
  { id: 5, src: "/demo/hero/bgdemo (5).jpg", alt: "Coffee beans", className: "col-span-1 row-span-1" },
  { id: 6, src: "/demo/hero/bgdemo (1).jpg", alt: "Barista pouring", className: "col-span-1 row-span-2" },
  { id: 7, src: "/demo/hero/bgdemo (2).jpg", alt: "Seating area", className: "col-span-1 row-span-1" },
  { id: 8, src: "/demo/hero/bgdemo (3).jpg", alt: "Espresso machine", className: "col-span-2 row-span-1" },
  { id: 9, src: "/demo/hero/bgdemo (4).jpg", alt: "Morning light", className: "col-span-1 row-span-1" },
  { id: 10, src: "/demo/hero/bgdemo (1).jpg", alt: "Coffee preparation", className: "col-span-2 row-span-2" },
  { id: 11, src: "/demo/hero/bgdemo (2).jpg", alt: "Cafe interior", className: "col-span-1 row-span-1" },
  { id: 12, src: "/demo/hero/bgdemo (3).jpg", alt: "Latte art", className: "col-span-1 row-span-1" },
];

export default function MediaGallerySection() {
  return (
    // Reduced py-24 to py-16 for a tighter section
    <section className="relative w-full py-24 text-white">
      
      {/* Optional Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-amber-900/10 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ==================== LEFT SIDE: CONTENT ==================== */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <SectionHeading
              title="A glimpse into"
              rotatingTexts={["the atmosphere.", "the craft.", "our daily ritual."]}
              description="Every corner tells a story. From the quiet hum of the morning grind to the laughter of late-night conversations, explore the moments that make our space feel like home."
              variant="dark" 
              align="left"
            />

            <div className="shrink-0 pt-2">
              <Button
                href="/gallery" // Changed to a proper URL path
                variant="primary"
                size="lg"
              >
                Explore full menu
                <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          {/* ==================== RIGHT SIDE: BENTO GALLERY GRID ==================== */}
          <div className="lg:col-span-8">
            {/* Reduced row heights from 120/160 to 90/110 */}
            <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[90px] md:auto-rows-[110px] gap-2 sm:gap-3">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className={`group relative overflow-hidden rounded-lg bg-[#1A1A1A] ${img.className}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-bold tracking-wider text-white scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                      B&B
                    </div>
                  </div>

                  {/* Vintage Grain Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}