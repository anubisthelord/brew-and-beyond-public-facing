"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export interface MenuItemType {
  id: number | string;
  name: string;
  price: string;
  desc: string;
  category: string;
  image: string;
}

interface MenuCardProps {
  item: MenuItemType;
  onClick?: () => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative flex h-full cursor-pointer flex-col bg-[#F9F8F4] border border-[#E8E4D9] shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
    >
      {/* ==================== 3D YELLOW PIN ACCENT ==================== */}
    

      {/* ==================== VINTAGE IMAGE CONTAINER ==================== */}
      <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-[#D8D2C2] bg-[#EBE7E0] p-1.5 shadow-[inset_0_0_10px_rgba(0,0,0,0.08)]">
        {/* Vintage corner tape */}
        <div className="absolute -left-3 -top-3 z-20 h-6 w-12 rotate-[-30deg] bg-[#E5DCCB]/60 backdrop-blur-[1px] border-y border-white/40 shadow-sm pointer-events-none" />

        {/* Image and vintage treatment */}
        <div className="relative h-full w-full overflow-hidden bg-[#2D231E]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            // className="object-cover sepia-[0.35] contrast-[0.95] saturate-[0.85] transition-all duration-700 ease-out group-hover:scale-105 group-hover:sepia-0 group-hover:contrast-100 group-hover:saturate-100"
          />

          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/60 via-transparent to-[#D4A373]/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30" />

          {/* Vintage grain texture */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            }}
          />

          {/* ==================== NAME PILL OVERLAY ==================== */}
          {/* Positioned absolute at the bottom center of the image */}
          <div className="absolute -bottom-1 left-1/2 z-20 w-[90%] -translate-x-1/2 text-center">
            <div className="mx-auto inline-block max-w-full rounded border border-white/30 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-lg transition-transform duration-300 ">
              <h3 className="truncate font-serif !text-[14px] font-medium tracking-wide !text-white drop-shadow-md">
                {item.name}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== BOTTOM CONTENT (Price & Add to Cart) ==================== */}
      <div className="flex flex-1 items-center justify-between  p-2">
        
        {/* Price */}
        <div className="flex flex-col">
        
          <span className=" text-base font-semibold  text-[#5A3A31]">
            {item.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="flex  items-center justify-center cursor-pointer rounded px-3 py-0.5 text-xs bg-[#a85] text-[#F9F8F4]  transition-all duration-300 hover:scale-110 hover:bg-[#A65A42]"
          aria-label={`Add ${item.name} to cart`}
        >
           + Add
         
        </button>

      </div>
    </div>
  );
}