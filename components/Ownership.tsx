import React from "react";
import { ArrowUpRight, CheckCircle2, Code2, Cloud, Key, BookOpen, ShieldCheck } from "lucide-react";

const OWNERSHIP_PILLARS = [
  {
    step: "01",
    icon: Code2,
    title: "Client-Owned Code",
    desc: "All source code belongs to your company from day one in your own GitHub or GitLab repositories.",
    details: "Zero proprietary forks or hidden modules.",
  },
  {
    step: "02",
    icon: Cloud,
    title: "Your Cloud & Accounts",
    desc: "AWS, Google Cloud, Azure, and database clusters established under your direct organizational billing.",
    details: "Direct administrator credentials in your custody.",
  },
  {
    step: "03",
    icon: Key,
    title: "Unrestricted Data Access",
    desc: "Full database exports, automated backup routines, and raw API access with no proprietary fences.",
    details: "Export clean Postgres/MySQL data anytime.",
  },
  {
    step: "04",
    icon: BookOpen,
    title: "Comprehensive Handover",
    desc: "Complete architectural blueprints, API documentation, and runbooks so any qualified engineer can maintain it.",
    details: "Turnkey operational transition guaranteed.",
  },
];

export default function Ownership() {
  return (
    <section
      id="ownership-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      <div className="bg-[#191a23] text-white rounded-[32px] sm:rounded-[36px] border-2 border-[#191a23] p-6 sm:p-10 lg:p-14 shadow-[0_6px_0_#1a1b24] relative overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

        {/* Header row */}
        <div className="max-w-3xl flex flex-col gap-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-[#b9ff66] text-[#191a23] font-bold text-xs uppercase tracking-wide w-fit shadow-[0_2px_0_#000000]">
            Core Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.2]">
            You own the code. You own the data. No vendor lock-in.
          </h2>
          <p className="text-base sm:text-lg text-[#c6c5d0] leading-relaxed">
            Technology should empower your business, not hold it hostage. We build directly inside
            your accounts, hand over complete documentation, and keep you in total sovereign control.
          </p>
        </div>

        {/* 4 Feature Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-10 relative z-10">
          {OWNERSHIP_PILLARS.map((card) => (
            <div
              key={card.step}
              className="bg-[#242631] rounded-[24px] p-6 border-2 border-white/10 hover:border-[#b9ff66] transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-[0_4px_0_#000000]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[14px] bg-[#b9ff66] text-[#191a23] flex items-center justify-center font-bold border-2 border-[#191a23] shadow-[0_2px_0_#000000] group-hover:scale-105 transition-transform">
                    {React.createElement(card.icon, { className: "w-6 h-6 text-[#191a23]" })}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#b9ff66] px-2 py-1 rounded bg-black/40 border border-white/10">
                    {card.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-[#c6c5d0] leading-relaxed mb-4">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#b9ff66]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{card.details}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Banner at Bottom */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b9ff66]/10 border border-[#b9ff66]/40 flex items-center justify-center text-[#b9ff66]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-base sm:text-lg font-bold text-white">
              Your business. Your software. Your data. Your control.
            </span>
          </div>

          <a
            href="#contact-inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b9ff66] text-[#191a23] font-bold text-sm hover:bg-white transition-all shadow-[0_3px_0_#000000] hover:translate-y-[1px]"
          >
            <span>Verify Our IP Contract Guarantee</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
