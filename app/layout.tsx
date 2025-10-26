import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Portfolio - Digital Marketing Expert",
  description: "Professional SEO specialist helping businesses increase online visibility and drive sustainable organic growth through data-driven strategies.",
  keywords: "SEO, digital marketing, search engine optimization, online marketing, content strategy, technical SEO",
  authors: [{ name: "SEO Specialist" }],
  openGraph: {
    title: "SEO Portfolio - Digital Marketing Expert",
    description: "Professional SEO specialist helping businesses increase online visibility and drive sustainable organic growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
