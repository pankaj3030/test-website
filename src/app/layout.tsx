import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SonnerToaster } from "@/components/ui/sonner-toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechGuard IT - Professional IT Support Services",
  description: "Reliable IT support and managed services for businesses. 24/7 support, cyber security, cloud solutions, and Microsoft 365. Your trusted IT partner in Coventry.",
  keywords: ["IT Support", "Managed IT Services", "Cyber Security", "Cloud Solutions", "Microsoft 365", "Coventry", "Business IT"],
  authors: [{ name: "TechGuard IT" }],
  openGraph: {
    title: "TechGuard IT - Professional IT Support Services",
    description: "Reliable IT support and managed services for businesses. 24/7 support, cyber security, and cloud solutions.",
    url: "https://techguard-it.com",
    siteName: "TechGuard IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGuard IT - Professional IT Support Services",
    description: "Reliable IT support and managed services for businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <SonnerToaster />
      </body>
    </html>
  );
}
