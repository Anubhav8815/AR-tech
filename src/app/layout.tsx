import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ratech@ratech.com"),
  title: "RA Tech | Digital Transformation & AI Consulting",
  description: "RA Tech delivers AI, cloud, software engineering, automation, and digital transformation services for modern enterprises.",
  keywords: ["AI consulting", "cloud solutions", "software development", "digital transformation", "enterprise technology"],
  openGraph: {
    title: "RA Tech | Digital Transformation & AI Consulting",
    description: "Premium technology consulting for businesses ready to scale with intelligence and resilience.",
    url: "https://ratech@ratech.com",
    siteName: "RA Tech",
    type: "website",
    images: [{ url: "/IMG_2069.png", width: 1200, height: 630, alt: "RA Tech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RA Tech | Digital Transformation & AI Consulting",
    description: "Premium technology consulting for businesses ready to scale with intelligence and resilience.",
    images: ["/IMG_2069.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: { canonical: "https://ratech@ratech.com" },
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
              name: "RA Tech",
              url: "https://ratech@ratech.com",
              logo: "https://ratech@ratech.com/logo.svg",
              description: "RA Tech delivers AI, cloud, software engineering, automation, and digital transformation services for modern enterprises.",
              sameAs: ["https://www.linkedin.com", "https://www.instagram.com"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
