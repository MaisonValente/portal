import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Aurelion Portal",
  description: "AURAELYUM — Experimente o futuro da consciência interativa.",
  metadataBase: new URL("https://auraelyum.com"),
  openGraph: {
    title: "Aurelion Portal",
    description: "Descubra apps e experiências imersivas da Aurelion.",
    url: "https://auraelyum.com",
    siteName: "Aurelion Portal",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelion Portal",
    description: "Experimente o futuro da consciência interativa.",
    site: "@aurelion",
    creator: "@aurelion"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-ivory text-midnight">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1 pt-20 font-body">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
