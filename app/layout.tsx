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

const metadataBase = new URL("https://paletteo.cc");

export const metadata: Metadata = {
  metadataBase,
  title: "Paletteo",
  description: "Generate and preview different colors on multiple different examples.",
  openGraph: {
    title: "Paletteo",
    description: "Generate and preview different colors on multiple different examples.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 720,
        alt: "Paletteo OG Image",
      },
    ],
    url: "https://paletteo.cc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paletteo",
    description: "Generate and preview different colors on multiple different examples.",
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
