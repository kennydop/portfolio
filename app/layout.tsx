import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick Offei Danso — Software Engineer & Game Developer",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Offei Danso — Software Engineer & Game Developer",
    description:
      "Software Engineer specializing in full-stack development, AI integrations, and interactive game experiences.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
