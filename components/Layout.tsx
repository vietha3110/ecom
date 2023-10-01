'use client' 
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { UserDropDown } from '@/components/user-dropdown'
import { useRouter } from 'next/router'
import { useAuth } from '@/app/auth-provider'

export default function Layout({children}: {children: React.ReactNode}) {
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
  const { isAuth } = useAuth();

  return (
        <>
          <nav className='w-full px-4 flex flex-row h-[60px] border-b-2 border-b-slate-100 items-center absolute top-0'>
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
                isAuth && <UserDropDown />
                      }
          
                      </li>
                      <li>
                      </li>
                    </ul>
                  </div>
        </nav>
        {children}
        </>
    )

}
