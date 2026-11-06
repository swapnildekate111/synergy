import React from "react";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import HeroGraphic from "./HeroGraphic";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Hero Left: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
          {/* Target Markets Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#eeeeee] border-2 border-[#191a23]/20 text-[#191a23] font-semibold text-xs sm:text-sm shadow-[0_2px_0_#1a1b24]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b9ff66] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3f6900]" />
            </span>
            <span>Serving SMBs across US • UK • Canada • EU • Australia • UAE</span>
          </div>

          {/* Primary Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] text-[#191a23] font-bold tracking-tight leading-[1.12]">
            Build a smarter,{" "}
            <span className="bg-[#b9ff66] text-[#191a23] border-2 border-[#191a23] px-2.5 py-0.5 rounded-[12px] inline-block shadow-[0_4px_0_#1a1b24] -rotate-1 mx-1">
              more connected
            </span>{" "}
            business.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#47464b] max-w-xl leading-relaxed">
            From websites and custom business applications to analytics, AI solutions,
            and ongoing technical management, get the digital capabilities your
            business needs without building an internal technology department.
          </p>

          {/* CTA Action Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
            <a
              href="#contact-inquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-[#191a23] text-white text-base sm:text-lg font-bold border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all duration-200"
            >
              <span>Let&apos;s Discuss Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#services-catalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-transparent text-[#191a23] text-base sm:text-lg font-bold border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] hover:bg-white hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Confidence Stamp */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#47464b] pt-1">
            <ShieldCheck className="w-4 h-4 text-[#3f6900]" />
            <span>100% Client IP Ownership • Zero Vendor Lock-In • Milestone Fixed Pricing</span>
          </div>
        </div>

        {/* Hero Right: Neo-Brutalist Technical Illustration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
