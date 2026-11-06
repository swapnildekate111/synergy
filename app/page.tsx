import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Ownership from "@/components/Ownership";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import CtaBanner from "@/components/CtaBanner";
import HowItWorks from "@/components/HowItWorks";
import Philosophy from "@/components/Philosophy";
import ProcessAccordion from "@/components/ProcessAccordion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf7] text-[#191a23]">
      {/* Fixed Header & Navigation */}
      <Navbar />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full pt-20">
        {/* Section 1: Hero */}
        <Hero />

        {/* Trust Strip & Engineering Partners */}
        <Logos />

        {/* Section 2: Core Differentiator — Ownership & IP Sovereignty */}
        <Ownership />

        {/* Section 3: Services — 6 Alternating Neo-Brutalist Cards */}
        <Services />

        {/* Section 4: Solutions — Practical SMB Business Case Studies */}
        <Solutions />

        {/* Strategic Call to Action Banner */}
        <CtaBanner />

        {/* Section 5: How It Works — 6-Stage Process Track */}
        <HowItWorks />

        {/* Section 6: Why Work With Us — Philosophy & The 6 Non-Negotiables */}
        <Philosophy />

        {/* Section 7: FAQs — Interactive Accordion */}
        <ProcessAccordion />

        {/* Section 8: Contact & Project Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
