import React from "react"
import type { Metadata } from 'next'
// TEMP STUB
// import { Big_Shoulders, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { PageTransition } from '@/components/page-transition'
import { GoogleTag } from '@/components/google-tag'
import './globals.css'

const bigShoulders = { variable: '--font-big-shoulders' }
const sourceSans = { variable: '--font-source-sans' }
const jetbrainsMono = { variable: '--font-jetbrains-mono' }

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wisluck.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'WISLUCK Global Industrial Services | Portacabins, Mobile Homes & Fabrication',
    template: '%s',
  },
  description:
    'Welding & fabrication, portacabins, mobile homes, offices and modular units, container offices, mobile toilets, and nationwide sandwich panel supply. Based in Port Harcourt, Rivers State, Nigeria.',
  keywords: [
    'portacabin Nigeria',
    'mobile home Nigeria',
    'mobile home Port Harcourt',
    'welding and fabrication Port Harcourt',
    'sandwich panel supply Nigeria',
    'modular units Port Harcourt',
    'container office Nigeria',
    'mobile toilet fabrication',
  ],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'WISLUCK Global Industrial Services',
    title: 'WISLUCK Global Industrial Services | Portacabins, Mobile Homes & Fabrication',
    description:
      'Welding & fabrication, portacabin and modular unit manufacturing, container offices, mobile toilets, and nationwide sandwich panel supply.',
    url: '/',
    images: ['/images/image_22.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WISLUCK Global Industrial Services',
    description:
      'Welding & fabrication, portacabin and modular unit manufacturing, container offices, mobile toilets, and nationwide sandwich panel supply.',
    images: ['/images/image_22.jpg'],
  },
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
    "Welding and fabrication, portacabins, mobile homes, offices and modular units, container offices, mobile toilets, and nationwide sandwich panel supply.",
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
