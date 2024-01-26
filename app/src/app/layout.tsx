import type { Metadata } from 'next';
import './globals.scss';
import { Poppins } from '@next/font/google';
import SideMenu from '@/components/SideMenu/SideMenu';
import Greeting from '@/ui/Greeting/Greeting';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: '500',
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body  className={poppins.className}>
        <main className="main-content">
              <SideMenu/>
              <div className="wrap">
                  <Greeting/>     
                  {children}
              </div>
        </main>
      </body>
    </html>
  )
}
