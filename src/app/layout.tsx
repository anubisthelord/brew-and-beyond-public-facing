// app/layout.tsx
import type { Metadata } from "next";
import { Fredoka, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// Fallback for Bobby Jones (Display)
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display-fallback",
  display: "swap",
});

// Fallback for Brandon Grotesque (Body)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body-fallback",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Brew & Beyond | Specialty Café Mohali",
  description: "Specialty brews, creative matchas, and a cozy corner for students, freelancers, and friends in Mohali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}