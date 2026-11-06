import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { COUNTRIES } from "@/data/countries";

const SERVICE_LABEL_MAP: Record<string, string> = {
  web: "Web Applications",
  mobile: "Mobile Apps",
  analytics: "Data Analytics",
  ai: "AI & ML",
  cloud: "Cloud & DevOps",
  transformation: "Legacy Modernization",
};

// In-memory rate limiting map: IP -> timestamp array
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // Basic IP rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "anonymous";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many inquiries sent. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, country, service, overview, _gotcha } = body;

    // Honeypot spam defense: bots automatically fill hidden fields
    if (_gotcha) {
      console.warn("Honeypot triggered, dropping bot inquiry silently.");
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Input validation & sanitization
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Valid full name is required." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Valid business email is required." }, { status: 400 });
    }

    if (!overview || typeof overview !== "string" || overview.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief project overview (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Truncate payloads to prevent buffer/payload abuse
    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 150);
    const cleanCompany = (company || "").trim().slice(0, 100);
    const cleanOverview = overview.trim().slice(0, 5000);

    const notionApiKey = process.env.NOTION_API_KEY;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID || "05837d41891043a28da41a97728a9f4b";

    // Lookup readable country name
    const countryObj = COUNTRIES.find((c) => c.code === country);
    const countryName = countryObj ? countryObj.name : country || "Not specified";

    // Lookup mapped service category
    const selectedService = SERVICE_LABEL_MAP[service] || service || "Web Applications";

    // If API key is set, call official Notion API
    if (notionApiKey && !notionApiKey.includes("YOUR_")) {
      const notion = new Client({ auth: notionApiKey });

      await notion.pages.create({
        parent: {
          database_id: notionDatabaseId,
        },
        properties: {
          "Client Name": {
            title: [
              {
                text: {
                  content: cleanName,
                },
              },
            ],
          },
          "Business Email": {
            email: cleanEmail,
          },
          Company: {
            rich_text: [
              {
                text: {
                  content: cleanCompany || "N/A",
                },
              },
            ],
          },
          "Country / Region": {
            rich_text: [
              {
                text: {
                  content: countryName,
                },
              },
            ],
          },
          "Primary Need": {
            select: {
              name: selectedService,
            },
          },
          Status: {
            status: {
              name: "New",
            },
          },
          "Project Overview": {
            rich_text: [
              {
                text: {
                  content: cleanOverview,
                },
              },
            ],
          },
        },
      });

      return NextResponse.json({
        success: true,
        destination: "notion",
        message: "Inquiry saved directly to Notion database.",
      });
    }

    // In development fallback / log
    console.log("----------------------------------------");
    console.log("📩 NEW VALIDATED INQUIRY RECEIVED:");
    console.log({
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      country: countryName,
      service: selectedService,
      overview: cleanOverview,
    });
    console.log("Target Notion Database ID:", notionDatabaseId);
    console.log("----------------------------------------");

    return NextResponse.json({
      success: true,
      destination: "local_log",
      message: "Inquiry received successfully.",
    });
  } catch (error: unknown) {
    console.error("Failed to submit inquiry to Notion:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: "Failed to process inquiry.", details: errorMessage },
      { status: 500 }
    );
  }
}
