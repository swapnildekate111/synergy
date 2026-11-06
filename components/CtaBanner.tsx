import React from "react";
import { ArrowUpRight, Zap, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-10 lg:my-16 w-full">
      <div className="rounded-[32px] sm:rounded-[36px] bg-[#b9ff66] border-2 border-[#191a23] shadow-[0_6px_0_#1a1b24] p-8 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle decorative shapes */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-2 border-dashed border-[#191a23]/20 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#191a23] text-white text-xs font-bold uppercase tracking-wider w-fit">
              <Zap className="w-3.5 h-3.5 text-[#b9ff66]" />
              <span>Sprint-Ready Architecture</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#191a23] tracking-tight leading-tight">
              Ready to modernize your operations without agency markups or technical lock-in?
            </h3>

            <p className="text-sm sm:text-base text-[#2e4f00] font-medium max-w-2xl leading-relaxed">
              Schedule an architecture discovery session with our lead engineering strategists.
              We diagnose your workflow bottlenecks and deliver a phased technical plan before you commit a single dollar.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-bold text-[#191a23]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#191a23]" />
                <span>30-Minute Scoping Call</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#191a23]" />
                <span>Mutual NDA Signed Upfront</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#191a23]" />
                <span>Direct Lead Engineer Talk</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-3">
            <a
              href="#contact-inquiry"
              className="w-full sm:w-auto lg:w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-[#191a23] text-white font-bold text-base border-2 border-[#191a23] shadow-[0_4px_0_#000000] hover:bg-white hover:text-[#191a23] hover:shadow-[0_2px_0_#000000] hover:translate-y-[2px] transition-all"
            >
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <span className="text-xs text-[#2e4f00] font-bold text-center lg:text-right w-full">
              Zero Obligation • Plain English Assessment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
