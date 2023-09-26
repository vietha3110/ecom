import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/toggle'
import { Button } from '@/components/ui/button'
import { ShoppingBasket, Menu } from 'lucide-react'

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
      <body className='w-full mx-8 relative' >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-row w-full h-[60px] shadow-sm px-4 fixed sm:w-full sm:flex sm:flex-row sm:justify-between'>
            <div className='md:w-1/3 '>
              <Link href={'/'} className='w-full px-4 py-2 flex flex-row'>
                <Image
                  src='/images/mamalogo.jpeg'
                  width={40}
                  height={40}
                  alt='logo'
                />
                <h1 className='hidden md:flex items-center px-1'>
                  Mama kitchen
                </h1>
              </Link> 
            </div>
            <div className='sm:w-[18ss0px] w-1/3 md:hidden lg:hidden'></div>
            <nav className='hidden md:flex w-1/2 py-4 items-center justify-around' >
              <ul className='w-[70%] grid grid-cols-5 gap-1'>
                {items.map
                  (item => <li key={item.id} className='flex justify-center hover:bg-slate-100 items-center'>
                    <Link href={`/${item.name}`} className='capitalize text-center'>
                      {item.name}
                    </Link>
                  </li>)}                
              </ul>
            </nav>
            <div className='hidden md:flex justify-center items-center md:w-1/4'>
              <div className='w-[60px] '><ModeToggle/></div>
              <Button className=''>Sign up</Button>
              <ShoppingBasket className='ml-2'/>
            </div>
            <div className='md:hidden cursor-pointer flex 3 justify-end items-center sm:w-1/3 sm:mr-12'>
              <Menu />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
