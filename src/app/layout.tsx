import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://artechnologies.ai"),
  title: "AR Technologies | Digital Transformation & AI Consulting",
  description: "AR Technologies delivers AI, cloud, software engineering, automation, and digital transformation services for modern enterprises.",
  keywords: ["AI consulting", "cloud solutions", "software development", "digital transformation", "enterprise technology"],
  openGraph: {
    title: "AR Technologies | Digital Transformation & AI Consulting",
    description: "Premium technology consulting for businesses ready to scale with intelligence and resilience.",
    url: "https://artechnologies.ai",
    siteName: "AR Technologies",
    type: "website",
    images: [{ url: "/logo.svg", width: 1200, height: 630, alt: "AR Technologies logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Technologies | Digital Transformation & AI Consulting",
    description: "Premium technology consulting for businesses ready to scale with intelligence and resilience.",
    images: ["/logo.svg"],
  },
  alternates: { canonical: "https://artechnologies.ai" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AR Technologies",
              url: "https://artechnologies.ai",
              logo: "https://artechnologies.ai/logo.svg",
              description: "AR Technologies delivers AI, cloud, software engineering, automation, and digital transformation services for modern enterprises.",
              sameAs: ["https://www.linkedin.com", "https://www.instagram.com"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
