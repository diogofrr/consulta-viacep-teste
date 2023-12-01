import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import Providers from './providers'

const inter = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Pesquisa CEP',
  description: 'Visualize aqui todas as informações do CEP desejado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
