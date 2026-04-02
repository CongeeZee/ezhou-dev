import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s | ezhou.dev',
    default: 'Eric Zhou',
  },
  description: 'Software Engineering student at UNSW. Building production APIs, autonomous robotics systems, and real-time web apps. Team Lead at rUNSWift — 5× World Champions.',
  authors: [{ name: 'Eric Zhou' }],
  keywords: ['software engineer', 'robotics', 'UNSW', 'typescript', 'nodejs', 'python', 'ROS2', 'RoboCup'],
  openGraph: {
    title: 'Eric Zhou',
    description: 'Software Engineering student at UNSW. Team Lead at rUNSWift. Building production APIs and autonomous robotics systems.',
    url: 'https://ezhou.dev',
    siteName: 'ezhou.dev',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@CongeeZee',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-[#f0f0f0]">
        <Navbar />
        <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-6xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
