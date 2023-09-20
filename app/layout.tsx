import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Buy and sell everything',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const items = [
    {
      id: 1, 
      name: 'about'
    },
    {
      id: 2, 
      name: 'products'
    },
    {
      id: 3, 
      name: 'payment'
    },
    {
      id: 4, 
      name: 'login'
    },
  ];
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='flex justify-end'>
          <ul className='flex flex-row p-4 justify-between w-1/3'>
            {items.map
              (item => <li key={item.id}>
                <Link href={`/${item.name}`} className='text-capitalize'>
                  {item.name}
                </Link>
              </li>)}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
