import Sample from "@/components/home/molecules/JournalBook";
import ExperienceZones from "@/components/home/organisms/ExperienceZones";
import HeroSection from "@/components/home/organisms/HeroSection";
import MenuSection from "@/components/home/organisms/MenuSection";
import OurStorySection from "@/components/home/organisms/OurStorySection";
import SignatureHighlightsSection from "@/components/home/organisms/SignatureHighlightsSection";

export default function Home() {
  return (
    <>
      {/* MAIN CONTENT */}
      <main className=" !bg-white">
        <HeroSection />
        <SignatureHighlightsSection />
        <OurStorySection />
        <MenuSection />
        <ExperienceZones />

      
      </main>


    </>
  );
}