import Sample from "@/components/home/molecules/JournalBook";
import ClientFeedbackSection from "@/components/home/organisms/ClientFeedback";
import ContactUsSection from "@/components/home/organisms/ContactUsSection";
import CTABanner from "@/components/home/organisms/CTABanner";
import ExperienceZones from "@/components/home/organisms/ExperienceZones";
import HeroSection from "@/components/home/organisms/HeroSection";
import MediaGallerySection from "@/components/home/organisms/MediaGallery";
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
        <MediaGallerySection />
        <ClientFeedbackSection />
<ContactUsSection />
{/* <CTABanner variant="light" /> */}

      </main>


    </>
  );
}