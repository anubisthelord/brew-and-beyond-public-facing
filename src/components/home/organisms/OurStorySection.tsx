import Image from "next/image";
import Button from "@/components/shared/Button";
import SectionHeading from "@/components/shared/typography/SectionHeading";

export default function OurStorySection() {
  return (
    <section
      id="our-story"
      className=" px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Image */}
        <div className="relative min-h-[380px] overflow-hidden sm:min-h-[480px] lg:min-h-[600px]">
          <Image
            src="/demo/hero/bgdemo%20(1).jpg"
            alt="A warm and inviting coffee shop interior"
            fill
            priority={false}
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

          {/* Subtle image caption */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-6 pt-20 sm:px-8 sm:pb-8">
            <p className="text-sm font-medium tracking-wide text-white">
              A little space to slow down.
            </p>
          </div>
        </div>

        {/* Story content */}
        <div className="flex flex-col items-start lg:py-8">
          <SectionHeading
            label="Our Story"
            title="More than coffee. A feeling."
            description="The best moments aren't always planned. Sometimes, they're found over a really good cup of coffee."
            as="h2"
            align="left"
            variant="light"
          />

          <div className="border-l-2 rounded ml-5 pl-2.5 py-2 mt-6 max-w-xl space-y-4 text-sm leading-snug text-[#626970] sm:text-base ">
            <p>
              At B&B, we believe coffee is about more than what's in your cup.
              It's the pause in a busy day, the conversation that lasts a little
              longer, and the familiar comfort of a place that feels right.
            </p>

            <p>
              From the first sip to the last, we're here to make everyday
              moments feel a little more special — with good coffee, thoughtful
              details, and a warm welcome every time.
            </p>
          </div>

          {/* Brand detail */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D9A441]" />
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#626970]">
              Made for your moments
            </span>
          </div>

          <div className="mt-8">
            <Button href="#full-menu" variant="primary">
              Discover our menu
              <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}