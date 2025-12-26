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
  title: "Paletteo by Bandi Revanth",
  description: "Generate and preview different colors and test on multiple examples. Made by Bandi Revanth.",
  keywords: [
  "paletteo",
  "bandi revanth",
  "color generator",
  "color picker",
  "color preview",
  "color testing",
  "hex color",
  "rgb color",
  "hsl color",
  "color contrast",
  "accessibility colors",
  "wcag contrast",
  "color schemes",
  "color palettes",
  "theme generator",
  "ui themes",
  "dark mode colors",
  "light mode colors",
  "brand colors",
  "design tools",
  "design system",
  "design playground",
  "ui playground",
  "design inspiration",
  "creative tools",
  "component styling",
  "css colors",
  "tailwind colors",
  "tailwind palette",
  "design tokens",
  "style guide",
  "ui",
  "ux",
  "ui/ux",
  "web design",
  "frontend",
  "frontend development",
  "front end development",
  "web development",
  "webdev",

  "developer tools",
  "developer utility",
  "developer",
  "coding",
  "programming",
  "software development",
  "creative coding",
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "nodejs",
  "tailwindcss",
  "shadcn",
  "shadcn/ui",
  "react app",
  "nextjs app",
  "typescript project",
  "frontend project",
  "web app",
  "ui component",
  "online color tool",
  "free design tool",
  "modern web app",
  "minimal ui",
  "clean ui",
  "ai",
  "open source",
  "github",
  "github project",
  "portfolio",
  "personal project",
  "personal brand",
  "indie project",
  "tech"
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
