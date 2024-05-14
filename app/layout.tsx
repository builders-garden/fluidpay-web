import type { Metadata } from "next"
import "./globals.css"
import { raleway } from "../fonts/font"
import { getAbsoluteUrl } from "@/utils/getAbsoluteUrl"
import Web3Provider from "@/components/Web3Provider"

export const metadata: Metadata = {
  metadataBase: new URL(getAbsoluteUrl("/")),
  title: "Plink - Your USDC shortcut",
  description: "Split group expenses with USDC, onchain.",
  openGraph: {
    title: "Plink - Your USDC shortcut",
    description: "Split group expenses with USDC, onchain.",
    url: new URL(getAbsoluteUrl("/")),
    images: [
      {
        url: getAbsoluteUrl("/preview-img.png"),
        alt: "Plink",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${raleway.className} font-sans-serif`}>
      <body className="bg-gradient-to-tr from-black from-50% to-primary">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  )
}
