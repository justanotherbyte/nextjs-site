import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Databuddy } from "@databuddy/sdk";

const jbMono = JetBrains_Mono()

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
    <html lang="en" className={jbMono.className}>
      <body className="dark:bg-zinc-900 antialiased">
        <Navbar />
        <main className="container mx-auto max-w-screen-xl p-8">
          {children}
        </main>
        <Footer />
      </body>

      <Databuddy clientId="YRzXTWoOPm885oU7xpDSb" enableBatching={true} />
    </html>
  );
}
