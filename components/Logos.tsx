import React from "react";
import { ShieldCheck, FolderGit2, Cloud, Unlock } from "lucide-react";

const TRUST_METRICS = [
  {
    icon: ShieldCheck,
    label: "100% Client-Owned",
    desc: "Complete IP legal transfer",
  },
  {
    icon: FolderGit2,
    label: "Dedicated Repositories",
    desc: "In your GitHub / GitLab org",
  },
  {
    icon: Cloud,
    label: "Direct Cloud Deploy",
    desc: "Under your cloud billing",
  },
  {
    icon: Unlock,
    label: "Zero Vendor Lock-In",
    desc: "Open-source standard stack",
  },
];

const TECH_PARTNERS = [
  { name: "Amazon Web Services", category: "Cloud Infrastructure", badge: "AWS" },
  { name: "Google Cloud", category: "Cloud & AI", badge: "GCP" },
  { name: "Microsoft Azure", category: "Enterprise Cloud", badge: "Azure" },
  { name: "Supabase", category: "Postgres & Auth", badge: "Supabase" },
  { name: "GitHub", category: "Version Control", badge: "GitHub" },
  { name: "Vercel", category: "Edge Frontend", badge: "Vercel" },
  { name: "Docker", category: "Containers", badge: "Docker" },
  { name: "PostgreSQL", category: "Relational DB", badge: "Postgres" },
  { name: "React 19 & Next.js", category: "Application Framework", badge: "Next.js" },
  { name: "Python & FastAPI", category: "AI & Backend", badge: "Python" },
];

export default function Logos() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-12 w-full">
      {/* 4 Trust Metric Pills */}
      <div className="pt-6 border-t-2 border-[#191a23]/15">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#191a23]">
            Technology Partners for Growing Businesses
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {TRUST_METRICS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="px-3 py-2.5 rounded-[12px] bg-white border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] flex items-center gap-2 hover:bg-[#b9ff66]/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#3f6900] flex-shrink-0" />
                  <span className="text-xs sm:text-[13px] font-bold text-[#191a23] truncate">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cloud & Engineering Ecosystem Bar */}
      <div className="mt-8 p-4 sm:p-5 rounded-[20px] bg-white border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] overflow-hidden">
        <div className="flex items-center justify-between gap-4 mb-3 pb-2 border-b border-[#e2e2e2]">
          <span className="text-xs font-bold text-[#47464b] uppercase tracking-wider">
            Verified Cloud &amp; Engineering Toolchains
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#b9ff66] text-[#191a23] border border-[#191a23]">
            Zero Proprietary Runtimes
          </span>
        </div>

        {/* Responsive Scrolling Ticker / Badges Grid */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-4 pt-1">
          {TECH_PARTNERS.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f3f3f3] border border-[#191a23]/30 hover:border-[#191a23] hover:bg-[#b9ff66]/30 transition-all text-xs font-bold text-[#191a23]"
            >
              <span className="w-2 h-2 rounded-full bg-[#191a23]" />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
