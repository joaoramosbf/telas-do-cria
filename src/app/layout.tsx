import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { SecurityLayer } from "./_security"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "cria · galeria de telas",
  description: "o agente de IA pra personal trainers. pelo WhatsApp. R$97/mês.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#EB4200" />
      </head>
      <body className={`${figtree.variable} font-sans`} style={{ fontFamily: "var(--font-sans)" }}>
        <SecurityLayer />
        {children}
      </body>
    </html>
  )
}
