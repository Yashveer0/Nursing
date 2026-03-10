import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WhatsAppButton } from '@/components/whatsapp-button';
import { FacebookPixel } from '@/components/facebook-pixel';
import { AuthProvider } from '@/components/auth/auth-provider';
import { PageTransition } from '@/components/animations/page-transition';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e1b4d',
}

export const metadata: Metadata = {
  title: 'Nursing Sarathi - Professional Home Care Services',
  description: 'Compassionate hospital-grade care at home with certified nurses, physiotherapists, and 24/7 availability',
  generator: 'v0.app',
  icons: {
    icon: '/fevican_nursing.jpeg',
    shortcut: '/fevican_nursing.jpeg',
    apple: '/fevican_nursing.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <FacebookPixel />
          <PageTransition>{children}</PageTransition>
          <WhatsAppButton />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
