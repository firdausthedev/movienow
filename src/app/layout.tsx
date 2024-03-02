import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const primary = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "movienow",
  description: "A demo movies app build with TMDB api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${primary.variable} bg-dark font-primary text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
