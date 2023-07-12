import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"], style:['italic', 'normal']})

export const metadata = {
    title: "Richard's Portifolio",
    description: 'Generated yo mama'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html className={'scroll-smooth w-screen'} style={{scrollBehavior:'smooth'}} lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
