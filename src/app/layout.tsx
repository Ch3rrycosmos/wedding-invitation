import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Cinzel,
  Great_Vibes,
  Pinyon_Script,
  DM_Serif_Display,
} from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/lib/weddingConfig";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: weddingConfig.siteTitle,
  description: weddingConfig.siteDescription,
  openGraph: {
    title: weddingConfig.siteTitle,
    description: weddingConfig.siteDescription,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${cinzel.variable} ${greatVibes.variable} ${pinyonScript.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
