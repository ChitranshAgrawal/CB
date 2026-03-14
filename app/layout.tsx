import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '@/lib/site'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'CB InfoTech | Engineering the Digital Future',
  description: siteConfig.description,
  keywords: ['web development', 'website design', 'MERN stack', 'Next.js', 'e-commerce', 'CRM', 'India'],
  authors: [{ name: 'CB InfoTech' }],
  creator: 'CB InfoTech',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'CB InfoTech',
    title: 'CB InfoTech | Engineering the Digital Future',
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CB InfoTech | Engineering the Digital Future',
    description: siteConfig.description,
  },
}

export const viewport: Viewport = {
  themeColor: '#020B18',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden bg-[#020B18] text-white" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
