import HeroSection from "@/components/home/organisms/HeroSection";
import SignatureHighlightsSection from "@/components/home/organisms/SignatureHighlightsSection";
import RotatingText from "@/components/shared/typography/RotatingText";

export default function Home() {
  return (
    <>
      {/* MAIN CONTENT */}
      <main className=" !bg-white">
      <HeroSection />
      <SignatureHighlightsSection />
      <RotatingText
  texts={['React', 'Bits', 'Is', 'Cool!']}
  effect="slide"
  direction="up"
  highlight
  highlightColor="#a855f7"
  staggerFrom="last"
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  rotationInterval={2000}
  splitBy="characters"
  blur={0}
  auto
  loop
  pauseOnHover={false}
/>
      </main>

     
    </>
  );
}