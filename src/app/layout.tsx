import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritik Chauhan | Portfolio",
  description:
    "Personal portfolio of Ritik Chauhan - Software Developer and Tech Enthusiast",
  keywords: [
    "portfolio",
    "software developer",
    "web development",
    "Ritik Chauhan",
  ],
  authors: [{ name: "Ritik Chauhan" }],
  creator: "Ritik Chauhan",
  themeColor: "#18181b",
  openGraph: {
    title: "Ritik Chauhan | Portfolio",
    description:
      "Personal portfolio of Ritik Chauhan - Software Developer and Tech Enthusiast",
    url: "https://your-portfolio-url.com",
    siteName: "Ritik Chauhan",
    locale: "en_US",
    type: "website",
  }
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
      >
        {children}
      </body>
    </html>
  );
}
