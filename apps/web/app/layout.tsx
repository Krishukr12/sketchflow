import "./globals.css";
import type { Metadata } from "next";

import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SketchFlow - Paint What You Think",
  description: "SketchFlow - Paint what you love",
  icons:
    "https://static.vecteezy.com/system/resources/thumbnails/046/801/154/small_2x/hand-drawing-with-a-pencil-in-black-and-white-sketch-style-png.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
