import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  const eventId = Sentry.captureException(
    new Error("Sentry Serverless Verification: Production API Telemetry Operational!")
  );

  // Crucial for Serverless: wait for the network envelope to flush to Sentry before lambda terminates
  await Sentry.flush(2500);

  return NextResponse.json({
    status: "captured",
    eventId,
    sentryDashboard: "https://synergy-a2.sentry.io/issues/",
    message: "Test event successfully flushed and delivered to Sentry!",
  });
}
