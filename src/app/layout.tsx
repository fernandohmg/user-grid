import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React from "react";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "User list",
  description: "User list",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <h1 className="flex items-center justify-center text-2xl h-20">
          <Link href="/" aria-label="Home">
            App sample
          </Link>
        </h1>
        {modal}
        {children}
      </body>
    </html>
  );
}
