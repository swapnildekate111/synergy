"use client";

import { useState } from "react";
import * as Sentry from "@sentry/nextjs";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Zap } from "lucide-react";

export default function SentryTestPage() {
  const [serverStatus, setServerStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClientError = () => {
    try {
      throw new Error("Sentry Client Verification: Interactive In-Browser Test Error!");
    } catch (err) {
      const eventId = Sentry.captureException(err);
      alert(`Client error captured and dispatched to Sentry! Event ID: ${eventId}`);
    }
  };

  const handleServerError = async () => {
    setLoading(true);
    setServerStatus(null);
    try {
      const res = await fetch("/api/sentry-example-api");
      const data = await res.json();
      setServerStatus(`Success! Event ID: ${data.eventId}`);
    } catch (err) {
      setServerStatus("Failed to call server API.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#191a23] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-lg w-full bg-white rounded-[32px] border-2 border-[#191a23] shadow-[0_8px_0_#1a1b24] p-8 sm:p-10 text-left">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#47464b] hover:text-[#191a23] mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="px-3.5 py-1 rounded-[8px] bg-[#b9ff66] text-[#191a23] text-xs font-bold border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] w-fit mb-4">
          Diagnostic Control Center
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191a23] mb-3">
          Sentry Telemetry Verification
        </h1>

        <p className="text-sm text-[#47464b] mb-6 leading-relaxed">
          Click either button below to dispatch a real test event to your Sentry dashboard.
        </p>

        <div className="space-y-4">
          {/* Client Error Button */}
          <button
            type="button"
            onClick={handleClientError}
            className="w-full py-3.5 px-6 rounded-[14px] bg-[#191a23] text-white font-bold text-sm border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4" />
            <span>Trigger Client-Side Error (Browser)</span>
          </button>

          {/* Server Error Button */}
          <button
            type="button"
            onClick={handleServerError}
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-[14px] bg-[#ffffff] text-[#191a23] font-bold text-sm border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#fafaf7] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? "Flushing to Sentry..." : "Trigger Server-Side Error (API)"}</span>
          </button>
        </div>

        {serverStatus && (
          <div className="mt-4 p-3.5 rounded-xl bg-[#b9ff66]/20 border-2 border-[#191a23] text-xs font-bold text-[#191a23] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3f6900] flex-shrink-0" />
            <span>{serverStatus}</span>
          </div>
        )}

        <div className="mt-8 pt-6 border-t-2 border-[#191a23]/10">
          <a
            href="https://synergy-a2.sentry.io/issues/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#191a23] hover:underline inline-flex items-center gap-1.5"
          >
            <span>Open Sentry Issues Dashboard (synergy-a2)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
