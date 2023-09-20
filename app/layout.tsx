import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/toggle'


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
      <body className={inter.className} >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-row w-full h-[60px] shadow-sm justify-between'>
            <div className='w-1/2 '>
              <Link href={'/'} className='w-full px-4 py-2 flex flex-row'>
                <Image
                  src='/images/mamalogo.jpeg'
                  width={40}
                  height={40}
                  alt='logo'
                />
            
                <h1 className='flex items-center px-1'>
                  Mama kitchen
                </h1>
              </Link> 
            </div>
            <nav className='flex w-1/2 py-4 items-center justify-end' >
              <ul className='w-[70%] grid grid-cols-5 gap-1'>
                {items.map
                  (item => <li key={item.id} className='flex justify-center hover:bg-slate-100 items-center'>
                    <Link href={`/${item.name}`} className='capitalize text-center'>
                      {item.name}
                    </Link>
                  </li>)}
               
                  <li className='flex items-center'><ModeToggle/></li>
                
              </ul>
            </nav>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
