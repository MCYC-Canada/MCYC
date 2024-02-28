import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// const inter = Inter({ subsets: ['latin'] })
const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MCYC',
  description: 'Main Characters Youth Council (MCYC) is an organization has been dedicated to educating youth on social justice issues that impact North Americans since 2021.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={kumbh.className}>{children}</body>
      <Footer />
    </html>
  )
}
