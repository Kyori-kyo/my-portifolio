import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '../context/providers'
import { GenerateMetadata } from '@/libs/types/metadata'

const inter = Inter({ subsets: ['latin'] })

export const generateMetadata: GenerateMetadata = () => {
  return {
    title: {
      default: "Ríchard's Portfolio",
      template: "%s | Ríchard's Portfolio",
    },
    description: "This is my portifolio, and it tells about me and my career.",
    keywords:
      "Ríchard, Portifolio, Ríchard's Portifolio, Ríchard Lucas, Kyori, Kyori kyo, Ríchard Lucas, Ríchard Lucas",
    viewport: "width=device-width, initial-scale=1",
    creator: "Ríchard Lucas",
    publisher: "Ríchard Lucas",
    authors: [{ name: "Ríchard Lucas" }],
    robots: "index, follow",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    openGraph: {
      type: "website",
      locale: "en",
      siteName: "Ríchard's Portifolio",
      url: "/assets/images/og.png",
      title: "Ríchard's Portifolio",
      description:
        "This is my portifolio, and it tells about me and my career.",
      images: [
        {
          url: "https://richard-lucas.vercel.app/",
          width: 1280,
          height: 720,
          alt: "Ríchard's Portifolio",
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
  params
}: {
  readonly children: React.ReactNode;
  readonly params: { readonly locale: string };
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
