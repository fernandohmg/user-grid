import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "User list",
  description: "User list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <h1 className="flex items-center justify-center text-2xl h-20">
          <a href="/" aria-label="Home">
            App sample
          </a>
        </h1>
        {children}
      </body>
    </html>
  );
}
