import { ThemeProvider } from "@/lib/providers/theme-provider"
import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CSPostHogProvider } from "@/lib/providers/ph-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tobias Hackenberg | Personal Website and Portfolio | tobcraft.xyz",
  description:
    "Hey there! I'm Tobias Hackenberg, young software developer from Germany. Check out my website or reach out to me.",
  keywords: [
    "tobcraft",
    "portfolio",
    "tobcraft3521",
    "tobias",
    "tobias hackenberg",
    "developer",
  ],
  openGraph: {
    title: "Tobias Hackenberg | Personal Website and Portfolio | tobcraft.xyz",
    description:
      "Hey there! I'm Tobias Hackenberg, young software developer from Germany. Check out my website or reach out to me.",
    type: "website",
    url: "https://tobcraft.xyz",
    images: [
      {
        url: "https://tobcraft.xyz/imgs/og-image.jpg",
        width: 787,
        height: 274,
        alt: "Tobias Hackenberg | Personal Website and Portfolio | tobcraft.xyz",
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
    <html lang="en" className="w-screen overflow-x-hidden">
      <GoogleAnalytics gaId="G-FNKLR1N6DM" />
      <head></head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <CSPostHogProvider>{children}</CSPostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
