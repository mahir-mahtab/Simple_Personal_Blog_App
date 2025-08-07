import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";
import Footer from "@/components/Footer";
const cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A minimal blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cormorantGaramond.className}>
      <body className="antialiased">
        <div className="min-h-screen bg-white">
          <div className="w-full max-w-2xl mx-auto px-8 py-12">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
