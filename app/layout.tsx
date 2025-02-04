import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

// Update metadata
export const metadata: Metadata = {
  title: 'Satyam Rai', // Change this to your app's title
  description: 'Explore the portfolio of Satyam Rai, a passionate backend developer with expertise in full-stack web development, AI-driven solutions, and cutting-edge technologies. From building dynamic websites to developing AI-powered traffic management systems, discover my projects, freelance work, and startup ventures in web development and video editing. Connect with me to bring your ideas to life!', 
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public folder
    shortcut: '/favicon-16x16.png', // Optional: Add a shortcut icon
    apple: '/apple-touch-icon.png' // Optional: Add an Apple touch icon
  },
  openGraph: {
    title: 'Satyam Rai - Full Stack Developer Portfolio', // OpenGraph title
    description: 'Explore the portfolio of Satyam Rai, a passionate full-stack developer with expertise in backend development, AI-driven solutions, and innovative web technologies. Check out my projects and freelance work!', // OpenGraph description
    images: [
      {
        url: '/logo.png', // Path to your logo in the public folder
        width: 1200,
        height: 630,
        alt: 'Satyam Rai Portfolio Logo'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}
          <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}