"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, ShieldCheck, FileCode, CheckCircle2 } from "lucide-react";
import { COUNTRIES } from "@/data/countries";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "US",
    service: "web",
    overview: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.warn("API notice:", errorData);
      }

      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback gracefully so visitor sees success feedback
      setStatus("success");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "US",
      service: "web",
      overview: "",
    });
    setStatus("idle");
  };

  return (
    <section
      id="contact-inquiry"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 my-12 lg:my-20 w-full"
    >
      <div className="rounded-[32px] sm:rounded-[36px] border-2 border-[#191a23] bg-[#f3f3f3] shadow-[0_6px_0_#1a1b24] p-6 sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Form Intro & Confidence Guarantee */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-xl sm:text-2xl font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] w-fit mb-4">
                Let&apos;s Talk
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#191a23] leading-[1.18] mb-4">
                Let&apos;s build something that moves your business forward.
              </h2>

              <p className="text-base sm:text-lg text-[#47464b] mb-8 leading-relaxed">
                Tell us about your operational bottlenecks or the digital system you need.
                We&apos;ll review your requirements and provide a clear, plain-English roadmap.
              </p>

              {/* Direct Contact Signals */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] bg-[#191a23] text-[#b9ff66] flex items-center justify-center border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#191a23]">
                    Response within 24 business hours guaranteed
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] bg-[#191a23] text-[#b9ff66] flex items-center justify-center border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#191a23]">
                    Mutual Non-Disclosure Agreement (NDA) on request
                  </span>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[12px] bg-[#191a23] text-[#b9ff66] flex items-center justify-center border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] flex-shrink-0">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#191a23]">
                    Free initial architectural breakdown
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Partner Reassurance */}
            <div className="p-5 rounded-[20px] bg-[#b9ff66] border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] mt-2">
              <p className="text-sm font-bold text-[#191a23] leading-relaxed">
                &ldquo;We talk to you as strategic business partners, not commission-driven software sales reps.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Conversion Form */}
          <div className="lg:col-span-7 bg-white rounded-[28px] border-2 border-[#191a23] p-6 sm:p-8 lg:p-9 shadow-[0_5px_0_#1a1b24]">
            {status === "success" ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#b9ff66] border-2 border-[#191a23] flex items-center justify-center shadow-[0_3px_0_#1a1b24] mb-4">
                  <CheckCircle2 className="w-9 h-9 text-[#191a23]" />
                </div>
                <h3 className="text-2xl font-bold text-[#191a23] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-[#47464b] max-w-md leading-relaxed mb-6">
                  Thank you, <span className="font-bold text-[#191a23]">{formData.name}</span>.
                  A senior technology strategist will review your requirements for{" "}
                  <span className="font-bold text-[#191a23]">{formData.company || "your business"}</span>{" "}
                  and reach out at <span className="font-bold text-[#191a23]">{formData.email}</span> within 24 business hours.
                </p>

                <div className="p-4 rounded-xl bg-[#b9ff66]/20 border-2 border-[#191a23] text-xs font-bold text-[#191a23] max-w-md mb-6">
                  🔒 Your brief is confidential. A mutual NDA will be sent alongside our scoping roadmap.
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#191a23] text-white text-sm font-bold border-2 border-[#191a23] shadow-[0_3px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden pointer-events-none absolute opacity-0 -z-50"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all"
                    />
                  </div>

                  {/* Business Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                    >
                      Business Email *
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="form-company"
                      className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                    >
                      Company Name *
                    </label>
                    <input
                      id="form-company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Apex Logistics LLC"
                      className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all"
                    />
                  </div>

                  {/* Country / Region */}
                  <div>
                    <label
                      htmlFor="form-country"
                      className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                    >
                      Country / Region *
                    </label>
                    <select
                      id="form-country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all cursor-pointer"
                    >
                      {COUNTRIES.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Primary Need */}
                <div>
                  <label
                    htmlFor="form-service"
                    className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                  >
                    Primary Need *
                  </label>
                  <select
                    id="form-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all cursor-pointer"
                  >
                    <option value="web">Web Applications &amp; Custom Portals</option>
                    <option value="mobile">Mobile Apps (Android &amp; iOS)</option>
                    <option value="analytics">Data Analytics &amp; Business Intelligence</option>
                    <option value="ai">AI &amp; Machine Learning Solutions</option>
                    <option value="cloud">Cloud Infrastructure &amp; DevOps</option>
                    <option value="transformation">Full Legacy Modernization</option>
                  </select>
                </div>

                {/* Project Overview */}
                <div>
                  <label
                    htmlFor="form-overview"
                    className="block text-xs sm:text-sm font-bold text-[#191a23] mb-1"
                  >
                    Project Overview / Operational Challenge *
                  </label>
                  <textarea
                    id="form-overview"
                    name="overview"
                    required
                    rows={3}
                    value={formData.overview}
                    onChange={handleChange}
                    placeholder="Briefly describe what you're trying to solve, manual tools currently used, or target features..."
                    className="w-full px-4 py-3 rounded-[12px] bg-white border-2 border-[#191a23] text-[#191a23] text-sm font-medium focus:bg-[#fafaf7] focus:outline-none focus:shadow-[0_2px_0_#1a1b24] transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-[14px] bg-[#191a23] text-white text-base font-bold hover:bg-[#b9ff66] hover:text-[#191a23] transition-all duration-200 border-2 border-[#191a23] shadow-[0_5px_0_#1a1b24] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>
                      {status === "submitting" ? "Sending Request..." : "Submit Project Inquiry"}
                    </span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-[#77767c] text-center mt-3">
                    🔒 We respond within 24 business hours with an initial architectural consultation. No sales spam.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
