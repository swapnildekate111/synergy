import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-[#191a23] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-[32px] border-2 border-[#191a23] shadow-[0_8px_0_#1a1b24] p-8 sm:p-10">
        <div className="px-4 py-1.5 rounded-[10px] bg-[#b9ff66] text-[#191a23] text-sm font-bold border-2 border-[#191a23] shadow-[0_2px_0_#1a1b24] w-fit mx-auto mb-6">
          Error 404
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#191a23] mb-4">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold text-[#191a23] mb-3">
          Roadmap Dead End
        </h2>

        <p className="text-sm sm:text-base text-[#47464b] mb-8 leading-relaxed">
          The requested system route does not exist. It may have been migrated,
          renamed, or was purely hypothetical.
        </p>

        <Link
          href="/"
          className="w-full py-3.5 px-6 rounded-full bg-[#191a23] text-white font-bold text-sm border-2 border-[#191a23] shadow-[0_4px_0_#1a1b24] hover:bg-[#b9ff66] hover:text-[#191a23] hover:shadow-[0_2px_0_#1a1b24] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all inline-flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Back to Command Center</span>
        </Link>
      </div>

      <p className="text-xs text-[#77767c] mt-8 font-medium">
        © 2026 Swapnil Dekate. All rights reserved.
      </p>
    </div>
  );
}
