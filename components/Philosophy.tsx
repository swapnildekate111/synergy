import React from "react";
import { CheckSquare, Languages, TrendingUp, Calendar } from "lucide-react";

const NON_NEGOTIABLES = [
  {
    title: "Transparent Scopes",
    desc: "Detailed itemization before contract signing. No surprise billing or hidden extras.",
  },
  {
    title: "100% IP Assignment",
    desc: "Formal assignment agreements transferring all rights to your business in writing.",
  },
  {
    title: "Zero Lock-In Traps",
    desc: "Open, standard technologies (React, Python, Node, SQL). No proprietary runtimes.",
  },
  {
    title: "Production Handover Docs",
    desc: "Comprehensive runbooks, API schemas, and deployment instructions on day one.",
  },
  {
    title: "Direct Engineer Slack",
    desc: "Shared Slack or Teams channels with the real engineers writing your software.",
  },
  {
    title: "Fixed-Price Milestones",
    desc: "Milestone-based delivery stages so your investment maps directly to completed code.",
  },
];

export default function Philosophy() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Manifesto Card */}
        <div className="lg:col-span-5 bg-[#191a23] text-white rounded-[32px] p-6 sm:p-8 lg:p-9 border-2 border-[#191a23] shadow-[0_6px_0_#1a1b24] flex flex-col justify-between">
          <div>
            <div className="px-3.5 py-1 rounded-[8px] bg-[#b9ff66] text-[#191a23] text-xs font-bold uppercase tracking-wider w-fit mb-4">
              Our Philosophy
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
              Built for Business Leaders, Not Technologists
            </h3>

            <p className="text-sm sm:text-base text-[#c6c5d0] mb-6 leading-relaxed">
              You don&apos;t need technical jargon or engineering buzzwords. You need
              systems that reliably work, increase output, satisfy customers, and add
              tangible value to your enterprise.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#b9ff66]/10 text-[#b9ff66] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Languages className="w-5 h-5 text-[#b9ff66]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Plain-English Communication
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c6c5d0] mt-0.5">
                    Zero developer acronyms. We explain architecture in terms of operational impact.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#b9ff66]/10 text-[#b9ff66] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5 text-[#b9ff66]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Business Outcome Orientation
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c6c5d0] mt-0.5">
                    Every sprint focuses on measurable business value: faster cycles, lower costs, or more revenue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#b9ff66]/10 text-[#b9ff66] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-5 h-5 text-[#b9ff66]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Weekly Executive Recaps
                  </h4>
                  <p className="text-xs sm:text-sm text-[#c6c5d0] mt-0.5">
                    Brief 5-minute video summaries every Friday covering exact progress and milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-bold text-[#b9ff66] uppercase tracking-wider">
              Guaranteed Delivery Standards
            </span>
            <span className="text-xs text-[#c6c5d0]">Direct Founder Oversight</span>
          </div>
        </div>

        {/* Right Column: The 6 Non-Negotiables Checklist */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit">
              Commitments
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#191a23]">
              The 6 Non-Negotiables
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NON_NEGOTIABLES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-5 border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] flex items-start gap-3.5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="w-8 h-8 rounded-lg bg-[#b9ff66] text-[#191a23] border border-[#191a23] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckSquare className="w-5 h-5 text-[#191a23]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#191a23] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#47464b] mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-[16px] bg-[#eeeeee] border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-semibold text-[#191a23]">
              Need a custom contract rider for enterprise compliance or data protection?
            </span>
            <a
              href="#contact-inquiry"
              className="text-xs sm:text-sm font-bold text-[#191a23] underline decoration-2 hover:text-[#3f6900] whitespace-nowrap py-2 px-3 rounded-lg hover:bg-[#191a23]/5 transition-colors inline-flex items-center min-h-[44px]"
            >
              Request Sample Contract ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
