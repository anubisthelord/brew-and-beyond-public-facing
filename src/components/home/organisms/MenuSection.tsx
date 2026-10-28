"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import MenuCard, { MenuItemType } from "../molecules/MenuCard";

// 20 Items to fill the grid
export const menuItems: MenuItemType[] = [
  { id: 1, name: "Espresso", price: "₹180", desc: "Pure, bold, intense.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (1).jpg" },
  { id: 2, name: "Americano", price: "₹200", desc: "Espresso, hot water.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (2).jpg" },
  { id: 3, name: "Flat White", price: "₹240", desc: "Double shot, micro-foam.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (3).jpg" },
  { id: 4, name: "Cappuccino", price: "₹220", desc: "Rich foam, cocoa dust.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (4).jpg" },
  { id: 5, name: "Mocha", price: "₹260", desc: "Dark chocolate, espresso.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (5).jpg" },
  { id: 6, name: "Macchiato", price: "₹210", desc: "Espresso, milk spot.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (1).jpg" },
  { id: 7, name: "Cortado", price: "₹230", desc: "Equal parts milk & espresso.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (2).jpg" },
  { id: 8, name: "Affogato", price: "₹280", desc: "Espresso over gelato.", category: "Coffee", image: "/demo/coffeeCards/demoCoffee (3).jpg" },
  { id: 9, name: "Cold Brew", price: "₹290", desc: "18hr steeped, smooth.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (4).jpg" },
  { id: 10, name: "Nitro Brew", price: "₹320", desc: "Cascading, creamy texture.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (5).jpg" },
  { id: 11, name: "Iced Latte", price: "₹250", desc: "Chilled, silky milk.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (1).jpg" },
  { id: 12, name: "Iced Americano", price: "₹210", desc: "Crisp, refreshing.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (2).jpg" },
  { id: 13, name: "Frappe", price: "₹300", desc: "Blended, sweet, icy.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (3).jpg" },
  { id: 14, name: "Iced Matcha", price: "₹270", desc: "Ceremonial grade, iced.", category: "Cold", image: "/demo/coffeeCards/demoCoffee (4).jpg" },
  { id: 15, name: "Croissant", price: "₹180", desc: "Flaky, French butter.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (5).jpg" },
  { id: 16, name: "Pain au Choc", price: "₹200", desc: "Chocolate filled pastry.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (1).jpg" },
  { id: 17, name: "Banana Bread", price: "₹160", desc: "Toasted, spiced.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (2).jpg" },
  { id: 18, name: "Brownie", price: "₹190", desc: "Fudgy, dark chocolate.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (3).jpg" },
  { id: 19, name: "Cinnamon Roll", price: "₹210", desc: "Warm, glazed, spiced.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (4).jpg" },
  { id: 20, name: "Blueberry Muffin", price: "₹170", desc: "Bursting with berries.", category: "Bakery", image: "/demo/coffeeCards/demoCoffee (5).jpg" },
];

export default function MenuSection() {
  return (
    <section
      id="full-menu"
      className="relative w-full overflow-hidden  py-24"
    >
      <div
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto space-y-12 ">
        
        {/* Top Center Header */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
          <SectionHeading
            title="Find your"
            rotatingTexts={["kind of coffee.", "everyday ritual.", "next favourite."]}
            description="From your first morning espresso to that one last iced coffee. There's something here for your kind of day."
            variant="dark" 
            align="center"
          />
        </div>

        {/* Split Layout */}
        {/* Changed to items-stretch so the left image matches the height of the right grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Image (Matches height of right side) */}
          <div className="lg:col-span-4 hidden  relative w-full rounded ">
            <Image
              src="/restaurant-is-close.svg" 
              alt="Coffee being poured"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            
            <div className="hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[#E8DAC7] text-xs font-mono tracking-widest uppercase mb-2">
                The Ritual
              </span>
              <h3 className="text-white text-3xl font-medium leading-tight">
                Crafted with<br />intention.
              </h3>
            </div>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:col-span-12">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-4">
              {menuItems.slice(0,14).map((item) => (
                <MenuCard 
                  key={item.id} 
                  item={item} 
                  onClick={() => console.log("Clicked:", item.name)} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}