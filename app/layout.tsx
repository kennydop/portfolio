import type { Metadata } from "next";
import {
  Funnel_Display,
  JetBrains_Mono,
  Uncial_Antiqua,
} from "next/font/google";
import Header from "@/components/Header";
import { baseUrl } from "@/lib/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const uncialAntiqua = Uncial_Antiqua({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const funnelDisplay = Funnel_Display({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Patrick Offei Danso — Software Engineer & Game Developer",
    template: "%s | Patrick Offei Danso",
  },
  description:
    "Software Engineer specializing in full-stack development, AI integrations, and interactive game experiences. Based in Accra, Ghana.",
  keywords: [
    "Software Engineer",
    "Game Developer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Unity",
    "TypeScript",
    "Patrick Offei Danso",
  ],
  authors: [{ name: "Patrick Offei Danso" }],
  openGraph: {
    title: "Patrick Offei Danso — Software Engineer & Game Developer",
    description:
      "Software Engineer specializing in full-stack development, AI integrations, and interactive game experiences.",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/i_am_god.jpg",
        width: 1200,
        height: 630,
        alt: "Patrick Offei Danso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Offei Danso — Software Engineer & Game Developer",
    description:
      "Software Engineer specializing in full-stack development, AI integrations, and interactive game experiences.",
    images: ["/i_am_god.jpg"],
  },
  verification: {
    other: {
      "websitelaunches-verification":
        "5f94a34f16a93c529af1b32e69becf9e",
    },
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
      className={`${jetbrainsMono.variable} ${uncialAntiqua.variable} ${funnelDisplay.variable}`}
    >
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
