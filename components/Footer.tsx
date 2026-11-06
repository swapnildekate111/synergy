import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f3f3] border-t-2 border-[#191a23] mt-16 lg:mt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Col 1 & 2: Brand Block */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <Link href="#" className="flex items-center gap-3 w-fit group">
              <div className="w-9 h-9 rounded-[10px] bg-[#191a23] border-2 border-[#191a23] flex items-center justify-center shadow-[0_2px_0_#1a1b24] group-hover:bg-[#b9ff66] transition-colors">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#b9ff66] group-hover:text-[#191a23] transition-colors"
                >
                  <circle cx="10" cy="10" r="5" fill="currentColor" />
                  <circle cx="22" cy="10" r="4" fill="currentColor" />
                  <circle cx="16" cy="22" r="6" fill="currentColor" />
                  <path
                    d="M10 10L16 22M22 10L16 22"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#191a23]">
                Synergy Digital
              </span>
            </Link>

            <p className="text-sm text-[#47464b] max-w-sm leading-relaxed">
              Empowering small and mid-sized businesses with agile, client-owned custom software,
              intelligent automation, and cloud platforms built for durable growth.
            </p>

            <div className="flex items-center gap-2 mt-2 text-xs font-bold text-[#191a23]">
              <Globe className="w-4 h-4 text-[#3f6900]" />
              <span>Serving US, UK, EU, Canada, Australia &amp; UAE</span>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#191a23] text-[11px] font-bold text-[#191a23] shadow-[0_2px_0_#1a1b24]">
                <span className="w-2 h-2 rounded-full bg-[#3f6900]" />
                <span>Strict 100% IP Sovereignty Standard</span>
              </span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#191a23] uppercase tracking-wider mb-1">
              Services
            </span>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Web Applications
            </a>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Mobile Apps (iOS &amp; Android)
            </a>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Data Analytics &amp; BI
            </a>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              AI &amp; Machine Learning
            </a>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              DevOps &amp; Cloud Infra
            </a>
            <a href="#services-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Digital Transformation
            </a>
          </div>

          {/* Col 4: Trust & Ownership */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#191a23] uppercase tracking-wider mb-1">
              Trust &amp; Sovereignty
            </span>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Client-Owned Code
            </a>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Zero Vendor Lock-In
            </a>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Data Privacy &amp; Security
            </a>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              IP Protection Guarantee
            </a>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Dedicated Repositories
            </a>
            <a href="#ownership-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Full Documentation
            </a>
          </div>

          {/* Col 5: Company & Quick Links */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-[#191a23] uppercase tracking-wider mb-1">
              Company
            </span>
            <a href="#how-it-works-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Our 6-Step Process
            </a>
            <a href="#solutions-catalog" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Case Study Scenarios
            </a>
            <a href="#faqs-section" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Frequently Asked Questions
            </a>
            <a href="#contact-inquiry" className="text-sm text-[#47464b] hover:text-[#191a23] font-medium transition-colors py-1 inline-block">
              Discuss Your Project
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t-2 border-[#191a23]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#47464b] font-medium">
            © 2026 Swapnil Dekate. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs font-medium text-[#47464b]">
            <a href="#contact-inquiry" className="hover:text-[#191a23] transition-colors">
              Privacy Policy
            </a>
            <span className="text-[#c8c5cc]">•</span>
            <a href="#contact-inquiry" className="hover:text-[#191a23] transition-colors">
              Terms of Service
            </a>
            <span className="text-[#c8c5cc]">•</span>
            <a href="#ownership-section" className="hover:text-[#191a23] transition-colors font-bold text-[#191a23]">
              100% IP Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
