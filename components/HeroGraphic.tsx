import React from "react";
import { Database, LineChart, Bot, Cloud } from "lucide-react";

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center select-none">
      {/* Outer orbital decorative dashed rings */}
      <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#c8c5cc]/80 pointer-events-none" />
      <div className="absolute inset-14 rounded-full border border-[#191a23]/20 pointer-events-none" />

      {/* Floating Accent Sphere 1: Top Right - Database */}
      <div
        className="absolute top-4 right-8 sm:right-10 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#b9ff66] border-2 border-[#191a23] flex items-center justify-center shadow-[0_4px_0_#1a1b24] z-10 animate-bounce"
        style={{ animationDuration: "3.5s" }}
        title="100% Client Data Sovereignty"
      >
        <Database className="w-6 h-6 text-[#191a23]" />
      </div>

      {/* Floating Accent Sphere 2: Bottom Left - Insights & Analytics */}
      <div
        className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white border-2 border-[#191a23] flex items-center justify-center shadow-[0_4px_0_#1a1b24] z-10"
        title="Real-Time Business Analytics"
      >
        <LineChart className="w-5 h-5 text-[#191a23]" />
      </div>

      {/* Floating Accent Sphere 3: Top Left - AI Agent */}
      <div
        className="absolute top-12 left-6 sm:left-8 w-11 h-11 rounded-full bg-[#191a23] text-[#b9ff66] border-2 border-[#191a23] flex items-center justify-center shadow-[0_3px_0_#1a1b24] z-10"
        title="Autonomous AI Solutions"
      >
        <Bot className="w-5 h-5 text-[#b9ff66]" />
      </div>

      {/* Floating Accent Sphere 4: Bottom Right - Cloud Deployed */}
      <div
        className="absolute bottom-12 right-6 w-11 h-11 rounded-full bg-[#b9ff66] border-2 border-[#191a23] flex items-center justify-center shadow-[0_4px_0_#1a1b24] z-10"
        title="Direct Cloud Production"
      >
        <Cloud className="w-5 h-5 text-[#191a23]" />
      </div>

      {/* Central Neo-Brutalist Transceiver Graphic (Megaphone Construct) */}
      <svg
        className="w-full h-full max-w-[380px] drop-shadow-sm"
        fill="none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Concentric broadcast waves */}
        <path
          d="M 280 120 A 100 100 0 0 1 320 220"
          stroke="#1a1b24"
          strokeDasharray="6 6"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M 295 90 A 140 140 0 0 1 350 240"
          stroke="#1a1b24"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M 310 60 A 180 180 0 0 1 380 260"
          stroke="#1a1b24"
          strokeDasharray="8 6"
          strokeLinecap="round"
          strokeWidth="2.5"
        />

        {/* Main Horn Body (Megaphone / Speaker) */}
        <polygon
          fill="#ffffff"
          points="120,240 260,150 275,250 145,260"
          stroke="#1a1b24"
          strokeWidth="3"
        />
        <polygon
          fill="#b9ff66"
          points="120,240 260,150 240,110 110,210"
          stroke="#1a1b24"
          strokeWidth="3"
        />

        {/* Broadcast Aperture Ring */}
        <ellipse
          cx="268"
          cy="200"
          fill="#1a1b24"
          rx="20"
          ry="54"
          stroke="#1a1b24"
          strokeWidth="3"
        />
        <ellipse cx="266" cy="200" fill="#b9ff66" rx="14" ry="46" />
        <ellipse cx="264" cy="200" fill="#1a1b24" rx="7" ry="32" />

        {/* Grip and Mechanical Pivot Mount */}
        <rect
          fill="#1a1b24"
          height="60"
          rx="6"
          stroke="#1a1b24"
          strokeWidth="2"
          transform="rotate(-15 130 255)"
          width="28"
          x="130"
          y="255"
        />
        <circle cx="140" cy="250" fill="#b9ff66" r="16" stroke="#1a1b24" strokeWidth="3" />

        {/* Base Structural Pedestal */}
        <path
          d="M 80 340 L 220 340 L 200 320 L 100 320 Z"
          fill="#ffffff"
          stroke="#1a1b24"
          strokeWidth="3"
        />
        <line stroke="#1a1b24" strokeWidth="4" x1="140" x2="140" y1="310" y2="320" />

        {/* Radiating geometric sparks */}
        <path
          d="M 90 120 L 98 100 L 118 92 L 98 84 L 90 64 L 82 84 L 62 92 L 82 100 Z"
          fill="#1a1b24"
        />
        <circle cx="190" cy="80" fill="#b9ff66" r="8" stroke="#1a1b24" strokeWidth="2" />
        <circle cx="70" cy="260" fill="#1a1b24" r="6" />
      </svg>
    </div>
  );
}
