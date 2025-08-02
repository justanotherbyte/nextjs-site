import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viswa Marepalli",
  description:
    "Hey there! I'm Viswa, an incoming Electronic and Information Engineering student at Imperial College London. My interests lie primarily in Robotics, FPGAs and Quantum Computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900 antialiased">
        <Navbar />
        <main className="container mx-auto max-w-screen-xl p-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
