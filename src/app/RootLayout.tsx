import Footer from '@/components/layout/footer/Footer'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header, onest } from './layout'
import Providers from './providers'


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
