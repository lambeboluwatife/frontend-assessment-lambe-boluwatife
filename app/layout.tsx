import type { Metadata } from "next";
import { Noto_Serif, Work_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Content Explorer",
  description:
    "A small web application that fetches data from a public API and presents it in a browseable, searchable interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${workSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="bg-secondary font-body selection:bg-secondary selection:text-on-primary min-h-screen custom-scrollbar">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
