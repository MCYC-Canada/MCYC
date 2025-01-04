import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { headers } from 'next/headers';

// const inter = Inter({ subsets: ['latin'] })
const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MCYC',
  description: 'Movement for Change Youth Council (MCYC) is an organization has been dedicated to educating youth on social justice issues that impact North Americans since 2021.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const specificRoute = "/structure";
  
  return (
    <html lang="en">
      <meta name="google-site-verification" content="aJS1vAdH8IhmFuv5uxG1u7Swtoz-r20YlNUVUzud3K4" />
      <body className={kumbh.className}>
        {pathname !== specificRoute && <Navbar />}
        {children}
        {pathname !== specificRoute && <Footer />}
      </body>
      
    </html>
  )
}
