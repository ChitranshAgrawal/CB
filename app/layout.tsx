import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
  title: 'CB InfoTech | Engineering the Digital Future',
  description: 'Premium full-stack web development company offering world-class digital solutions. Websites, web apps, e-commerce, CRMs, and more starting at just ₹10,000.',
  keywords: ['web development', 'website design', 'MERN stack', 'Next.js', 'e-commerce', 'CRM', 'India'],
  authors: [{ name: 'CB InfoTech' }],
  creator: 'CB InfoTech',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'CB InfoTech',
    title: 'CB InfoTech | Engineering the Digital Future',
    description: 'Premium full-stack web development company offering world-class digital solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CB InfoTech | Engineering the Digital Future',
    description: 'Premium full-stack web development company offering world-class digital solutions.',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#020B18] text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
