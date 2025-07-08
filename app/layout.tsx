// app/layout.tsx
import './globals.css'
import Header from '../components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '매일 한끼 | 건강한 식단 관리',
  description: '식단과 건강을 손쉽게 관리하세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}