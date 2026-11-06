import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services-catalog"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      {/* Section Indicator and Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12">
        <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit">
          Services
        </div>
        <p className="text-base sm:text-lg text-[#47464b] max-w-xl">
          At Synergy Digital, we design and build modern software engineered around
          your specific operational workflows.
        </p>
      </div>

      {/* 6 Cards Grid (Alternating Light, Neon, Dark) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* CARD 1: LIGHT - Web Applications & Custom Software */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-white border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-[#e8e8e8] text-[#191a23] text-lg sm:text-xl font-bold w-fit border border-[#191a23]/20">
                Web Applications &amp; Custom Software
              </span>
              <p className="text-sm sm:text-base text-[#47464b] mt-2 max-w-xs leading-relaxed">
                Custom business portals, client portals, booking systems, and workflow engines that eliminate fragmented software.
              </p>
            </div>
            {/* SVG Illustration: Web Browser Window */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <rect fill="#f3f3f3" height="80" rx="10" stroke="#1a1b24" strokeWidth="2.5" width="100" x="10" y="20" />
                <line stroke="#1a1b24" strokeWidth="2.5" x1="10" x2="110" y1="42" y2="42" />
                <circle cx="24" cy="31" fill="#1a1b24" r="3.5" />
                <circle cx="36" cy="31" fill="#1a1b24" r="3.5" />
                <circle cx="48" cy="31" fill="#b9ff66" r="3.5" stroke="#1a1b24" strokeWidth="1.5" />
                <rect fill="#ffffff" height="34" rx="4" stroke="#1a1b24" strokeWidth="2" width="30" x="22" y="54" />
                <line stroke="#1a1b24" strokeWidth="2" x1="62" x2="98" y1="58" y2="58" />
                <line stroke="#1a1b24" strokeWidth="2" x1="62" x2="92" y1="68" y2="68" />
                <rect fill="#b9ff66" height="10" rx="3" stroke="#1a1b24" strokeWidth="1.5" width="24" x="62" y="78" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-[#191a23]/10 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#191a23] text-[#b9ff66] flex items-center justify-center group-hover/btn:bg-[#b9ff66] group-hover/btn:text-[#191a23] transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-[#191a23] group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>

        {/* CARD 2: LIME-GREEN ACCENT - Android & Mobile Applications */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-[#b9ff66] border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-white text-[#191a23] text-lg sm:text-xl font-bold w-fit border border-[#191a23]/30">
                Android &amp; Mobile Applications
              </span>
              <p className="text-sm sm:text-base text-[#2e4f00] font-medium mt-2 max-w-xs leading-relaxed">
                Customer-facing mobile apps, workforce field reporting tools, barcode scanning, and native offline-first workflows.
              </p>
            </div>
            {/* SVG Illustration: Mobile Device Wireframe */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <rect fill="#ffffff" height="96" rx="12" stroke="#1a1b24" strokeWidth="2.5" width="50" x="35" y="12" />
                <line stroke="#1a1b24" strokeLinecap="round" strokeWidth="2" x1="50" x2="70" y1="20" y2="20" />
                <rect fill="#f3f3f3" height="58" rx="4" stroke="#1a1b24" strokeWidth="1.5" width="36" x="42" y="28" />
                <circle cx="60" cy="98" fill="#1a1b24" r="4" />
                <circle cx="60" cy="55" r="9" stroke="#1a1b24" strokeDasharray="3 3" strokeWidth="1.5" />
                <circle cx="60" cy="55" fill="#1a1b24" r="3" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-[#191a23]/20 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#191a23] text-[#b9ff66] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#191a23] transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-[#191a23] group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>

        {/* CARD 3: DARK CHARCOAL - Data Analytics & BI */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-[#191a23] text-white border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-white text-[#191a23] text-lg sm:text-xl font-bold w-fit">
                Data Analytics &amp; Business Intelligence
              </span>
              <p className="text-sm sm:text-base text-[#c6c5d0] mt-2 max-w-xs leading-relaxed">
                Turn disconnected spreadsheets into real-time KPI dashboards, automated financial summaries, and executive decision tools.
              </p>
            </div>
            {/* SVG Illustration: Analytics & Charts */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <rect fill="#1a1b24" height="74" rx="8" stroke="#ffffff" strokeWidth="2" width="92" x="14" y="24" />
                <rect fill="#b9ff66" height="30" width="12" x="26" y="58" />
                <rect fill="#ffffff" height="44" width="12" x="46" y="44" />
                <rect fill="#b9ff66" height="52" width="12" x="66" y="36" />
                <rect fill="#ffffff" height="38" width="12" x="86" y="50" />
                <path d="M 28 48 L 52 36 L 72 26 L 92 38" stroke="#b9ff66" strokeLinecap="round" strokeWidth="2.5" />
                <circle cx="72" cy="26" fill="#ffffff" r="3" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#b9ff66] text-[#191a23] flex items-center justify-center group-hover/btn:bg-white transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#000000]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-white group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>

        {/* CARD 4: DARK CHARCOAL - AI & Machine Learning Solutions */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-[#191a23] text-white border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-[#b9ff66] text-[#191a23] text-lg sm:text-xl font-bold w-fit">
                AI &amp; Machine Learning Solutions
              </span>
              <p className="text-sm sm:text-base text-[#c6c5d0] mt-2 max-w-xs leading-relaxed">
                Intelligent document extraction, automated customer support agents, demand forecasting, and operational AI assistants.
              </p>
            </div>
            {/* SVG Illustration: Neural Nodes */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <circle cx="60" cy="60" fill="#b9ff66" r="14" stroke="#ffffff" strokeWidth="2" />
                <circle cx="28" cy="40" fill="#ffffff" r="8" stroke="#b9ff66" strokeWidth="2" />
                <circle cx="92" cy="38" fill="#ffffff" r="8" stroke="#b9ff66" strokeWidth="2" />
                <circle cx="34" cy="86" fill="#ffffff" r="8" stroke="#b9ff66" strokeWidth="2" />
                <circle cx="86" cy="84" fill="#ffffff" r="8" stroke="#b9ff66" strokeWidth="2" />
                <line stroke="#ffffff" strokeWidth="2" x1="36" x2="50" y1="44" y2="54" />
                <line stroke="#ffffff" strokeWidth="2" x1="84" x2="70" y1="42" y2="54" />
                <line stroke="#ffffff" strokeWidth="2" x1="40" x2="52" y1="80" y2="68" />
                <line stroke="#ffffff" strokeWidth="2" x1="80" x2="68" y1="78" y2="68" />
                <circle cx="60" cy="60" fill="#1a1b24" r="4" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#b9ff66] text-[#191a23] flex items-center justify-center group-hover/btn:bg-white transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#000000]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-white group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>

        {/* CARD 5: LIME-GREEN ACCENT - DevOps & Cloud Infrastructure */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-[#b9ff66] border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-white text-[#191a23] text-lg sm:text-xl font-bold w-fit border border-[#191a23]/30">
                DevOps &amp; Cloud Infrastructure
              </span>
              <p className="text-sm sm:text-base text-[#2e4f00] font-medium mt-2 max-w-xs leading-relaxed">
                CI/CD automation, serverless setups, hardened database configurations, proactive security patches, and cloud cost containment.
              </p>
            </div>
            {/* SVG Illustration: Cloud Server Rack */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <path
                  d="M 30 52 C 22 52 16 58 16 66 C 16 74 22 80 30 80 L 90 80 C 98 80 104 74 104 66 C 104 59 99 53 92 52 C 90 38 78 30 64 30 C 52 30 42 38 38 48 C 35 48 32 50 30 52 Z"
                  fill="#ffffff"
                  stroke="#1a1b24"
                  strokeWidth="2.5"
                />
                <rect fill="#1a1b24" height="36" rx="4" stroke="#1a1b24" strokeWidth="2" width="36" x="42" y="60" />
                <circle cx="50" cy="72" fill="#b9ff66" r="2.5" />
                <line stroke="#ffffff" strokeWidth="2" x1="58" x2="72" y1="72" y2="72" />
                <circle cx="50" cy="84" fill="#b9ff66" r="2.5" />
                <line stroke="#ffffff" strokeWidth="2" x1="58" x2="72" y1="84" y2="84" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-[#191a23]/20 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#191a23] text-[#b9ff66] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#191a23] transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-[#191a23] group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>

        {/* CARD 6: LIGHT - Digital Transformation & Management */}
        <div className="rounded-[32px] p-6 sm:p-8 lg:p-9 bg-white border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] flex flex-col justify-between h-full min-h-[320px] group hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] transition-all">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 rounded-[8px] bg-[#b9ff66] text-[#191a23] text-lg sm:text-xl font-bold w-fit border border-[#191a23]/20">
                Digital Transformation &amp; Management
              </span>
              <p className="text-sm sm:text-base text-[#47464b] mt-2 max-w-xs leading-relaxed">
                Replace physical paperwork and rigid legacy tools with scalable digital systems, complete with ongoing operational stewardship.
              </p>
            </div>
            {/* SVG Illustration: Modernization Gears */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full" fill="none" viewBox="0 0 120 120" aria-hidden="true">
                <circle cx="52" cy="52" fill="#f3f3f3" r="26" stroke="#1a1b24" strokeWidth="2.5" />
                <circle cx="52" cy="52" fill="#ffffff" r="10" stroke="#1a1b24" strokeWidth="2" />
                <circle cx="78" cy="78" fill="#b9ff66" r="18" stroke="#1a1b24" strokeWidth="2" />
                <circle cx="78" cy="78" fill="#1a1b24" r="6" />
                <path d="M 30 20 L 40 26 M 64 20 L 56 28 M 20 54 L 28 54 M 76 50 L 84 50" stroke="#1a1b24" strokeLinecap="round" strokeWidth="2.5" />
              </svg>
            </div>
          </div>
          <a
            href="#contact-inquiry"
            className="flex items-center gap-3 mt-6 pt-4 border-t border-[#191a23]/10 w-fit group/btn min-h-[44px]"
          >
            <div className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#191a23] text-[#b9ff66] flex items-center justify-center group-hover/btn:bg-[#b9ff66] group-hover/btn:text-[#191a23] transition-colors border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24]">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-[#191a23] group-hover/btn:underline">
              Learn more
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
