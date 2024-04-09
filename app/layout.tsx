import type { Metadata } from "next";
import "./globals.css";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fluidpay",
  description: "Crypto made simple, payments made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
