"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services-catalog" },
  { name: "Solutions", href: "#solutions-catalog" },
  { name: "Ownership", href: "#ownership-section" },
  { name: "How It Works", href: "#how-it-works-section" },
  { name: "FAQs", href: "#faqs-section" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = (name: string) => {
    setActiveSection(name);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[#fafaf7]/95 backdrop-blur-md shadow-[0_4px_0_#191a23]/10 border-b-2 border-[#191a23]"
            : "bg-[#fafaf7]/90 backdrop-blur-md border-b border-[#e2e2e2]"
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setActiveSection("Home")}
          >
            <div className="w-10 h-10 rounded-[10px] bg-[#191a23] border-2 border-[#191a23] flex items-center justify-center shadow-[0_3px_0_#1a1b24] group-hover:bg-[#b9ff66] transition-colors">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#b9ff66] group-hover:text-[#191a23] transition-colors"
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
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-[#191a23]">
                Synergy
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#77767c] -mt-1">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-[15px] font-semibold transition-all py-1 border-b-2 ${
                    isActive
                      ? "text-[#191a23] border-[#191a23] font-bold"
                      : "text-[#47464b] border-transparent hover:text-[#191a23] hover:border-[#b9ff66]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop & Tablet Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact-inquiry"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#191a23] text-white font-medium text-sm border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#eeeeee] text-[#191a23] border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] hover:bg-[#b9ff66] transition-colors focus:outline-none focus:ring-2 focus:ring-[#191a23]"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#191a23]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-20 left-0 right-0 bg-[#fafaf7] border-b-4 border-[#191a23] shadow-[0_8px_0_#1a1b24] p-6 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white border-2 border-[#191a23] text-lg font-bold text-[#191a23] shadow-[0_3px_0_#1a1b24] hover:bg-[#b9ff66] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#47464b]" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#contact-inquiry"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-[#b9ff66] text-[#191a23] font-bold text-center border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] flex items-center justify-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>

                <div className="text-center text-xs font-semibold text-[#77767c] pt-2">
                  Serving US • UK • Canada • EU • Australia • UAE
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
