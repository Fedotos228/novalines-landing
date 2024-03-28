import Footer from '@/components/layout/footer/Footer'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Onest } from 'next/font/google'
import './globals.scss'
import Providers from './providers'


const Header = dynamic(() => import('@/components/layout/header/Header'), { ssr: false })
const onest = Onest({ subsets: ['latin'], display: 'swap', adjustFontFallback: false })

export const metadata: Metadata = {
    title: 'NOVA LINES OPERATIONS CENTER I Apply now',
    description: 'American Dream, Moldovan Location. Join our team as an Operations Coordinator!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={onest.className}>
                <Providers>
                    <Header />
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}


