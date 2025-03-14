import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yourblog.com'), // Replace with your actual domain
  title: "Prasenjit's Blog",
  description:
    'A personal blog where I share my thoughts, experiences, and insights on web development and beyond.',
  openGraph: {
    title: "Prasenjit's Blog",
    description:
      'A personal blog where I share my thoughts, experiences, and insights on web development and beyond.',
    url: 'https://yourblog.com', // Replace with your actual domain
    siteName: "Prasenjit's Blog",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Prasenjit's Blog"
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle', // Replace with your Twitter handle if available
    title: "Prasenjit's Blog",
    description:
      'A personal blog where I share my thoughts, experiences, and insights on web development and beyond.',
    images: ['/og-image.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-color1 text-color4`}>
        {children}
      </body>
    </html>
  )
}
