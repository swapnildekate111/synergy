import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    throw new Error("Sentry Test Event: Synergy Digital telemetry operational!");
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json({
      status: "captured",
      message: "Test event dispatched to Sentry! Check your Sentry Issues dashboard.",
    });
  }
}
