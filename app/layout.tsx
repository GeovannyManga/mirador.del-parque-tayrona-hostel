import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {LanguageProvider}from "../components/LanguajeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mirador Del Parque Tayrona",
  description: "El Mirador Del Parque Tayrona es un hostal ubicado en el Parque Nacional Natural Tayrona, cuenta con amplias habitaciones para familias y parejas",
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
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
