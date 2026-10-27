
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
    "/demo/hero/bgdemo%20(1).jpg",
    "/demo/hero/bgdemo%20(2).jpg",
    "/demo/hero/bgdemo%20(3).jpg",
    "/demo/hero/bgdemo%20(4).jpg",
    "/demo/hero/bgdemo%20(6).jpg",
    "/demo/hero/bgdemo%20(7).jpg",
    "/demo/hero/bgdemo%20(8).jpg",
    "/demo/hero/bgdemo%20(9).jpg",
    "/demo/hero/bgdemo%20(10).jpg",
];

const thoughts = [
    "Maybe one more coffee.",
    "Stay for another sip.",
    "Your little moment of calm.",
    "Good things brew here.",
    "Coffee makes it better.",
    "Slow down. Sip. Smile.",
    "A little coffee, a lot of joy.",
    "Made for your coffee break.",
    "Come for coffee, stay awhile.",
];

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            aria-label="B&B Coffee Shop"
            aria-roledescription="carousel"
            className="relative isolate min-h-[75svh] mt-0  overflow-hidden bg-[#181D23] sm:min-h-[85svh] lg:min-h-[95svh] m-1 rounded-b-3xl"
        >
            {/* Background image carousel */}
            {heroImages.map((image, index) => (
                <Image
                    key={image}
                    src={image}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${activeIndex === index
                        ? "z-0 opacity-100"
                        : "z-[-1] opacity-0"
                        }`}
                />
            ))}

            {/* Subtle overall overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-black/15"
            />

            {/* Bottom gradient for text readability */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 z-10 h-[75%] bg-gradient-to-t from-black/80 via-black/35 to-transparent"
            />

            {/* Editorial thought */}
            <div className="absolute bottom-16 left-6 z-20 max-w-[440px] sm:bottom-20 sm:left-12 sm:max-w-[460px] lg:bottom-24 lg:left-[4%] lg:max-w-[520px]">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] !text-[#B7DCCF] ">
                    A little thought
                </p>

                <h1
                    key={activeIndex}
                    className="animate-thought-fade text-3xl font-medium !leading-[1] tracking-[-0.045em] !text-white drop-shadow-md sm:text-4xl "
                >
                    {thoughts[activeIndex % thoughts.length]}
                </h1>
            </div>

            {/* Carousel dots */}
            <div
                className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5"
                role="group"
                aria-label="Choose hero image"
            >
                {heroImages.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show image ${index + 1} of ${heroImages.length}`}
                        aria-pressed={activeIndex === index}
                        className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#45C3B8] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${activeIndex === index
                            ? "w-6 bg-white"
                            : "w-2 bg-white/55 hover:bg-white/90"
                            }`}
                    />
                ))}
            </div>

            {/* Text fade animation */}
            <style jsx global>{`
        @keyframes thoughtFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-thought-fade {
          animation: thoughtFade 650ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-thought-fade {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}
