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
  title: "ORM Specialist",
  description:
    "Professional SEO specialist helping businesses increase online visibility and drive sustainable organic growth through data-driven strategies.",
  keywords:
    "ORM, ORM Specialist, search engine optimization, online marketing, content strategy, technical SEO",
  authors: [{ name: "SEO Specialist" }],
  openGraph: {
    title: "ORM Specialist",
    description:
      "Professional SEO specialist helping businesses increase online visibility and drive sustainable organic growth.",
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
        <main className="pt-[72px]">{children}</main>
      </body>
    </html>
  );
}
