'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const specificRoute = "/structure";

  return (
    <>
      {pathname !== specificRoute && <Navbar />}
      {children}
      {pathname !== specificRoute && <Footer />}
    </>
  );
}
