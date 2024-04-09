import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "../fonts/font";
import { getAbsoluteUrl } from "@/utils/getAbsoluteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(getAbsoluteUrl("/")),
  title: "Fluidpay",
  description: "Stablecoin payments made easy.",
  openGraph: {
    title: "Fluidpay",
    description: "Stablecoin payments made easy.",
    url: new URL(getAbsoluteUrl("/")),
    images: [
      {
        url: getAbsoluteUrl("/preview-img.png"),
        alt: "Fluidpay",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.className} font-sans-serif`}>
      <body>{children}</body>
    </html>
  );
}
