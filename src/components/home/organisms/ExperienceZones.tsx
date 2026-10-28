"use client";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import ScrollStack, { ScrollStackItem } from "../molecules/ScrollStack"; // Adjust path
import { zones } from "@/data/cafeZones";
import ZoneCard from "../molecules/CafeZoneCard";


export default function ExperienceZones() {
  return (
    <section className="relative w-full  ">
      
      <div className="relative z-10 container mx-auto bg-[#FAFAFA] p-12 rounded ">
        

        
        {/* Header Section */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center ">
          <SectionHeading
            title="Find your"
            rotatingTexts={["kind of coffee.", "everyday ritual.", "next favourite."]}
            description="From your first morning espresso to that one last iced coffee. There's something here for your kind of day."
            variant="dark" 
            align="center"
          />
        </div>


        {/* The Scroll Stack */}
        <div className="mx-auto max-w-6xl">
          <ScrollStack
            itemDistance={60}
            itemStackDistance={25}
            stackPosition="12%"
            baseScale={0.95}
            itemScale={0.03}
            useWindowScroll={true}
            smoothScroll={true}
          >
            {zones.map((zone) => (
              <ScrollStackItem key={zone.id}>
                <ZoneCard zone={zone} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

      </div>
    </section>
  );
}