import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMonoVF.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

const metadataBase = new URL("https://paletteo.vercel.app");

export const metadata: Metadata = {
  metadataBase,
  title: "Paletteo",
  description: "Generate and preview different colors and test on multiple examples. Made by Bandi Revanth.",
  keywords: [
    "paletteo",
    "color generator",
    "color preview",
    "color testing",
    "bandi revanth",
    "web development",
    "design tools",
    "ui",
    "ux",
    "ui/ux",
    "front end development",
    "react",
    "shadcn",
    "nextjs",
    "typescript",
    "nodejs",
    "coding",
    "ai"
  ],
  other: {
    'google-site-verification': 'Ffpsr8oGLXEHiBrYofkBc2Qf3U8kWX7HIq-5W4SH2-c',
    'canonical': metadataBase.toString(),
  },
  openGraph: {
    title: "Paletteo",
    description: "Generate and preview different colors and test on multiple examples. Made by Bandi Revanth.",
    images: [
      {
        url: "/demo.png",
        width: 1200,
        height: 720,
        alt: "Paletteo OG Image",
      },
    ],
    url: "https://paletteo.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paletteo",
    description: "Generate and preview different colors and test on multiple examples. Made by Bandi Revanth.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 720,
        alt: "Paletteo OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://www.gravatar.com" />
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-neutral-700 selection:text-zinc-300`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
