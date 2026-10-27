"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface NavDropdownProps {
  label: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  icon,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        aria-expanded={isOpen}
        // EXACT MATCH to your NavItem classes (!text-base !font-medium text-white hover:text-[#45C3B8])
        className={`flex items-center gap-1 !text-sm cursor-pointer !font-medium transition-colors focus:outline-none group ${
          isOpen ? "text-[#45C3B8]" : "text-white hover:text-[#45C3B8]"
        }`}
      >
        <span 
          className={`px-1 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? "scale-110 text-[#45C3B8]" : "text-[#D9A441] group-hover:scale-110"
          }`}
        >
          {icon}
        </span>
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#45C3B8]" : "text-white/70"
          }`}
        />
      </button>
    </div>
  );
};