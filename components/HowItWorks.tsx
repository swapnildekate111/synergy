import React from "react";
import { Search, Compass, Terminal, CheckCircle2, Rocket, Headphones } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    desc: "Understanding your operational bottlenecks, business goals, and current toolchain through focused scoping sessions.",
    deliverable: "Scope Brief & Technical Spec",
  },
  {
    number: "02",
    icon: Compass,
    title: "Planning",
    desc: "Defining architecture, fixed milestones, transparent pricing, and setting up client-account prerequisites.",
    deliverable: "Fixed-Price Roadmaps",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Design & Build",
    desc: "Iterative agile development with regular video demos and continuous commits pushed directly to your repositories.",
    deliverable: "Weekly Video Progress Recaps",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Rigorous functional, security, performance, stress, and cross-device testing to prevent post-launch disruptions.",
    deliverable: "Security & QA Audits",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Deployment & Handover",
    desc: "Production launch in your accounts, delivering full documentation, blueprints, and hands-on developer walk-throughs.",
    deliverable: "Turnkey Production Handover",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Optional retainer for proactive monitoring, dependency updates, new feature releases, and dedicated SLA response times.",
    deliverable: "Guaranteed SLA Monitoring",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-12">
        <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit">
          How It Works
        </div>
        <p className="text-base sm:text-lg text-[#47464b] max-w-xl">
          A predictable, transparent journey from idea to production deployment.
        </p>
      </div>

      {/* 6 Numbered Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="bg-[#f3f3f3] rounded-[24px] p-6 sm:p-7 border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#b9ff66] hover:-translate-y-1 hover:shadow-[0_6px_0_#1a1b24] transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl sm:text-4xl font-black text-[#191a23] tracking-tight">
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-full bg-white border-2 border-[#191a23] flex items-center justify-center font-bold text-[#191a23] shadow-[0_2px_0_#1a1b24]">
                  {React.createElement(step.icon, { className: "w-5 h-5 text-[#191a23]" })}
                </div>
              </div>

              <h4 className="text-xl font-bold text-[#191a23] mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-[#47464b] group-hover:text-[#191a23] transition-colors leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#191a23]/15 flex items-center justify-between text-xs font-bold text-[#191a23]">
              <span className="text-[#77767c] group-hover:text-[#191a23]/70">Output:</span>
              <span>{step.deliverable}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
