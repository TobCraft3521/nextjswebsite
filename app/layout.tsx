import { ThemeProvider } from "@/lib/providers/theme-provider"
import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CSPostHogProvider } from "@/lib/providers/ph-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "tobcraft.xyz",
  description: "my portfolio and social links site",
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
