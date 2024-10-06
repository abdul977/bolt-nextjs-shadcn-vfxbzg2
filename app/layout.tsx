import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MCAN - Muslim Copper Association of Nigeria',
  description: 'Uniting Muslim copper artisans across Nigeria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">MCAN</Link>
            <div className="space-x-4">
              <Link href="/login" className="hover:underline">Login</Link>
              <Link href="/register" className="hover:underline">Register</Link>
              <Link href="/admin/login" className="hover:underline">Admin</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto mt-8">
          {children}
        </main>
      </body>
    </html>
  )
}