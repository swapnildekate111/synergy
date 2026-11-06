import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synergy Digital Solutions — Custom Software, Web & Cloud Engineering",
  description:
    "Empowering growing SMBs with client-owned custom web applications, mobile apps, analytics, and cloud engineering with zero vendor lock-in.",
  keywords: [
    "custom software development",
    "web application development",
    "mobile app development",
    "data analytics",
    "business intelligence",
    "DevOps",
    "cloud infrastructure",
    "SMB software",
    "IP sovereignty",
  ],
  openGraph: {
    title: "Synergy Digital Solutions — Custom Software, Web & Cloud Engineering",
    description:
      "Empowering growing SMBs with client-owned custom web applications, mobile apps, analytics, and cloud engineering with zero vendor lock-in.",
    type: "website",
    siteName: "Synergy Digital Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synergy Digital Solutions — Custom Software, Web & Cloud Engineering",
    description:
      "Empowering growing SMBs with client-owned custom web applications, mobile apps, analytics, and cloud engineering with zero vendor lock-in.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Synergy Digital Solutions",
  description:
    "Empowering growing SMBs with client-owned custom web applications, mobile apps, analytics, and cloud engineering with zero vendor lock-in.",
  url: "https://synergydigital.dev",
  areaServed: ["US", "GB", "CA", "EU", "AU", "AE"],
  serviceType: [
    "Web Application Development",
    "Mobile App Development",
    "Data Analytics & Business Intelligence",
    "AI & Machine Learning Solutions",
    "DevOps & Cloud Infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fafaf7] text-[#191a23] font-sans selection:bg-[#b9ff66] selection:text-[#191a23] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
