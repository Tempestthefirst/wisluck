import React from "react"
import type { Metadata } from 'next'
import { Big_Shoulders, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { PageTransition } from '@/components/page-transition'
import { GoogleTag } from '@/components/google-tag'
import './globals.css'

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  variable: '--font-big-shoulders',
  weight: ['500', '600', '700', '800', '900'],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: '--font-source-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'WISLUCK Global Industrial Services - Portable Cabins & Mobile Accommodations',
  description: 'Premium portable cabins, mobile offices, and mobile homes. Custom fabrication and rapid deployment of modular solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WISLUCK Global Industrial Services Ltd",
  email: "infoteam@wisluck.com",
  telephone: ["+2349012135995", "+2348033388032"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.6 City Ward Church Close, off Odani Road, Elelenwo",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  areaServed: "NG",
  description:
    "Welding and fabrication, portacabin and modular unit manufacturing, container offices, mobile toilets, and nationwide sandwich panel supply.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${bigShoulders.variable} ${sourceSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <GoogleTag />
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
