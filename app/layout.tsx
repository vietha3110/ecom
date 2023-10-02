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
          <AuthProvider>
            <Providers>
                {children}
            </Providers>
           </AuthProvider>
          {/* </ThemeProvider> */}
        </QueryProviders>
      </body>
    </html>
  )
}
