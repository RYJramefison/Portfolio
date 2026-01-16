import type { Metadata } from "next";
import {Lato,Roboto,Poppins, Geist, Geist_Mono,Inter,  Space_Grotesk } from "next/font/google";
import { LangProvider } from './providers/lang-provider'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const space_Grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "juninho ramefison - portfolio",
  description: "Juninho Ramefison - Portfolio",
  icons: {
    icon: "Juninho-icon.png",
    apple: "Juninho-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClerkProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ClerkProvider>
      </body>
    </html>
    
  )
}