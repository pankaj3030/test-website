import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Guruji Tech Global - Professional IT Support Services",
  description: "Guruji Tech Global delivers reliable IT support and managed services for businesses. 24/7 support, cyber security, cloud solutions, and Microsoft 365. Your trusted IT partner.",
  keywords: ["IT Support", "Managed IT Services", "Cyber Security", "Cloud Solutions", "Microsoft 365", "Business IT", "Guruji Tech Global"],
  authors: [{ name: "Guruji Tech Global" }],
  openGraph: {
    title: "Guruji Tech Global - Professional IT Support Services",
    description: "Reliable IT support and managed services for businesses. 24/7 support, cyber security, and cloud solutions.",
    url: "https://gurujitechglobal.com",
    siteName: "Guruji Tech Global",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guruji Tech Global - Professional IT Support Services",
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
        <Analytics />
      </body>
    </html>
  );
}
