import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nevel Tech",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
