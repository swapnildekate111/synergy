"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fafaf7] text-[#191a23] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-white rounded-[32px] border-2 border-[#191a23] shadow-[0_8px_0_#1a1b24] p-8 sm:p-10">
          <div className="w-14 h-14 rounded-full bg-[#ffdad6] border-2 border-[#191a23] flex items-center justify-center mx-auto mb-6 shadow-[0_3px_0_#1a1b24]">
            <AlertCircle className="w-7 h-7 text-[#ba1a1a]" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#191a23] mb-3">
            System Error
          </h1>

          <p className="text-sm sm:text-base text-[#47464b] mb-8 leading-relaxed">
            An unexpected error occurred. The telemetry event has been automatically captured by Sentry.
          </p>

          <button
            onClick={() => reset()}
            type="button"
            className="w-full py-3.5 px-6 rounded-full bg-[#191a23] text-white font-bold text-sm border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      </body>
    </html>
  );
}
