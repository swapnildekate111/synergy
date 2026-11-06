import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const SCENARIOS = [
  {
    id: "01",
    tag: "Scenario 01",
    industry: "B2B Distribution",
    title: "From Messy Spreadsheets to Centralized Operations",
    desc: "An equipment distributor eliminated error-prone double entry, missed deliveries, and paper order manifests by deploying a single custom portal tailored to their warehouse.",
    metrics: [
      "100% elimination of lost paper orders",
      "4.5 hours saved daily per logistics manager",
      "Real-time customer order tracking status",
    ],
    architecture: "Portal Architecture",
    theme: "light",
  },
  {
    id: "02",
    tag: "Scenario 02",
    industry: "Multi-Location Services",
    title: "24/7 Customer Self-Service & Booking Engine",
    desc: "A growing multi-branch service organization automated reservations, SMS confirmations, and deposit processing, freeing staff from constant phone triage.",
    metrics: [
      "70% reduction in inbound booking phone calls",
      "Instant credit card deposit processing",
      "Zero double-bookings across 8 branch branches",
    ],
    architecture: "Booking App Engine",
    theme: "dark",
  },
  {
    id: "03",
    tag: "Scenario 03",
    industry: "Retail & Commerce",
    title: "Real-Time Executive Dashboards & Automation",
    desc: "Consolidating disparate accounting, advertising, and Shopify systems into one clean Monday morning dashboard with automated outlier notifications.",
    metrics: [
      "Live cross-platform revenue reconciliation",
      "Early low-stock alerts prevent stockouts",
      "Executive team operates off one single truth",
    ],
    architecture: "BI & Data Pipelines",
    theme: "light",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions-catalog"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12">
        <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit">
          Solutions
        </div>
        <p className="text-base sm:text-lg text-[#47464b] max-w-xl">
          Real operational challenges solved with purpose-built digital systems.
        </p>
      </div>

      {/* 3 Scenario Breakdown Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {SCENARIOS.map((item) => {
          const isDark = item.theme === "dark";
          return (
            <div
              key={item.id}
              className={`rounded-[28px] border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[0_7px_0_#1a1b24] ${
                isDark
                  ? "bg-[#191a23] text-white"
                  : "bg-white text-[#191a23]"
              }`}
            >
              <div>
                {/* Meta Header */}
                <div
                  className={`flex items-center justify-between pb-4 border-b-2 mb-4 ${
                    isDark ? "border-white/10" : "border-[#e2e2e2]"
                  }`}
                >
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isDark
                        ? "bg-[#b9ff66] text-[#191a23]"
                        : "bg-[#e8e8e8] text-[#191a23]"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDark ? "text-[#b9ff66]" : "text-[#3f6900]"
                    }`}
                  >
                    {item.industry}
                  </span>
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 leading-snug ${
                    isDark ? "text-white" : "text-[#191a23]"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isDark ? "text-[#c6c5d0]" : "text-[#47464b]"
                  }`}
                >
                  {item.desc}
                </p>

                {/* Metric Checkpoints */}
                <div className="space-y-2.5 py-2">
                  {item.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          isDark ? "text-[#b9ff66]" : "text-[#3f6900]"
                        }`}
                      />
                      <span className={isDark ? "text-white" : "text-[#191a23]"}>
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Architectural Action Bar */}
              <div
                className={`mt-8 pt-4 border-t flex items-center justify-between ${
                  isDark ? "border-white/10" : "border-[#e2e2e2]"
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-bold ${
                    isDark ? "text-[#b9ff66]" : "text-[#191a23]"
                  }`}
                >
                  {item.architecture}
                </span>

                <a
                  href="#contact-inquiry"
                  className={`text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 py-2 px-3 rounded-lg hover:underline transition-all min-h-[44px] ${
                    isDark
                      ? "text-[#b9ff66] hover:bg-white/10"
                      : "text-[#191a23] hover:bg-[#191a23]/5"
                  }`}
                >
                  <span>Read Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
