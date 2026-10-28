import HeroSection from "@/components/home/organisms/HeroSection";
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
      </main>


    </>
  );
}