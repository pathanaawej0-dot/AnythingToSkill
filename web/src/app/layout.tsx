import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anythingtoskill.aawej.in"),
  title: {
    default: "AnythingToSkill | Convert Content into Agent Skills",
    template: "%s | AnythingToSkill"
  },
  description: "Turn YouTube videos, documentation, and code into installable agent skills compatible with skills.sh.",
  keywords: ["agent skills", "AI agent", "skills.sh", "AnythingToSkill", "AI automation", "developer tools"],
  openGraph: {
    title: "AnythingToSkill | Convert Content into Agent Skills",
    description: "The automated pipeline for creating agent capabilities.",
    url: "https://anythingtoskill.aawej.in",
    siteName: "AnythingToSkill",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnythingToSkill | Convert Content into Agent Skills",
    description: "The automated pipeline for creating agent capabilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink selection:bg-accent selection:text-background">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
