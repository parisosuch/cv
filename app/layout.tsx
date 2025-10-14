import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "Paris Osuch",
  description: "Paris Osuch // Full Stack Engineer and Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        defer
        src="https://umami.parisdeploy.space/script.js"
        data-website-id="4d30c252-9a4e-4bc1-864b-520c2c235ea7"
      ></script>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="w-full flex justify-center p-2 sm:p-0 bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
