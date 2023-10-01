'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/toggle'
import { Button } from '@/components/ui/button'
import { ShoppingBasket, Menu } from 'lucide-react'
import { Providers } from './providers'
import QueryProviders from './queryProdivers'
import { UserDropDown } from '@/components/user-dropdown'
import { useEffect, useState } from 'react'
import AuthProvider, { useAuth } from './auth-provider'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Ecommerce',
//   description: 'Buy and sell everything',
// }

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
  ];
  const { isAuth, setIsAuth } = useAuth();

  return (
    <html lang='en'>
      <body className='w-full m-0 relative'>
        <QueryProviders>
          {/* <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          > */}
          <AuthProvider
          >
              <Providers>
                {/* <nav className='w-full px-4 flex flex-row h-[60px] border-b-2 border-b-slate-100 items-center absolute top-0'>
                  <Link href={'/'}>
                    <Image
                      src='/images/mamalogo.jpeg'
                      alt='logo'
                      width={30}
                      height={30}
                      className='flex flex-grow-0'
                    />
                  </Link>
                  <div className='w-full flex flex-row justify-end'>
                    <ul className='flex flex-row justify-between w-1/3'>
                      {items.map(item => <li key={item.id} className='hover:bg-slate-100 w-[6rem] text-center'>
                        <Link href={`/${item.name}`} className='flex items-center justify-center h-full'>
                          {item.name}
                        </Link>
                      </li>)}
                    <li>
                      {
                        !isAuth && <Link href={`/login`} className='flex items-center justify-center h-full'>
                        Login
                      </Link>
                      }
                      {
                        isAuth && <UserDropDown/>
                      }
              
                      </li>
                      <li>
                        <ModeToggle/>
                      </li>
                    </ul>
                  </div>
                </nav> */}
                {children}
              </Providers>
            </AuthProvider>
          {/* </ThemeProvider> */}
        </QueryProviders>
      </body>
    </html>
  )
}
