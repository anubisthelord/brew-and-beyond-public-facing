"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/shared/typography/SectionHeading";
import Button from "@/components/shared/Button";

export default function ContactUsSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative w-full  py-24 px-4 sm:px-6 lg:px-8">
      
      {/* Main 7xl Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden  border border-[#EBE7E4] bg-white">
          
          {/* ==================== LEFT SIDE: IMAGE & INFO ==================== */}
          <div className="relative lg:col-span-5 min-h-[400px] lg:m-2 overflow-hidden rounded-2xl">
            <Image
              src="/demo/hero/bgdemo (1).jpg" 
              alt="Contact Us"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Dark Overlay to make text readable */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Info Overlay on the Image */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10">
              <div>
                <h3 className="text-2xl font-serif text-white mb-2">Get in touch.</h3>
                <p className="text-white/80 text-sm max-w-xs">
                  We're here to answer any questions you might have about our space, menu, or events.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-0.5">Location</p>
                    <p className="text-sm font-medium">45.5152° N, 122.6784° W</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-0.5">Email</p>
                    <p className="text-sm font-medium">hello@brewandbeyond.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT SIDE: THE FORM ==================== */}
          <div className="lg:col-span-7 p-8 flex flex-col justify-center">
            
            <div className="mb-10">
              <SectionHeading
                title="Send us a"
                rotatingTexts={["message.", "note.", "hello."]}
                description="Fill out the form below and our team will get back to you within 24 hours."
                variant="dark" 
                align="left"
              />
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center space-y-4 bg-[#FAFAFA] rounded-2xl border border-[#EBE7E4] p-8">
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif text-[#2A2625]">Message Sent!</h3>
                <p className="text-[#78716C]">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-mono uppercase tracking-widest text-[#8C4A27] hover:text-[#2A2625] transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-base font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#FAFAFA] border border-[#EBE7E4] rounded px-4 py-2 required text-[15px] text-[#2A2625] placeholder:text-[#A8A19D] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="relative">
                    <label htmlFor="mobile" className="block text-base font-medium mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#FAFAFA] border border-[#EBE7E4] rounded px-4 py-2 required text-[15px] text-[#2A2625] placeholder:text-[#A8A19D] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-base font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#FAFAFA] border border-[#EBE7E4] rounded px-4 py-2 required text-[15px] text-[#2A2625] placeholder:text-[#A8A19D] focus:outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-base font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-[#FAFAFA] border border-[#EBE7E4] rounded px-4 py-2 required text-[15px] text-[#2A2625] placeholder:text-[#A8A19D] focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="shrink-0">
            <Button
              href="Send Message"
              variant="primary"
              size="lg"
            >
              Explore full menu
              <span aria-hidden="true">↗</span>
            </Button>
          </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}