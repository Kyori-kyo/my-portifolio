import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../context/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ríchard's Portfolio",
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Providers locale={params.locale}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
