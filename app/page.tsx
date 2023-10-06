'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuth } from './auth-provider'
import Layout from '@/components/Layout'
export default function Home() {
  const {isAuth, setIsAuth} = useAuth();
  return (
      <Layout>
        <main className='md:flex min-h-screen md:flex-col md:mx-8 sm:mx-4 sm:flex-cols'>
          <div className='w-full '>
            <div className='h-[100px]'></div>
            <div className='w-full flex flex-row'>
              <div className='md:w-1/2  h-[500px] md:flex flex-col justify-center sm:w-full'>
                <h1 className='md:text-5xl md:px-4 font-semibold '>Má mà kitchen - Chuyên bò khô / cá hồi/ trứng ngâm tương</h1>
                <span className='md:p-4 md:text-lg text-sm'>
                  Ở đây tớ bán những món ăn mà chồng con tớ khen ngon
                </span>
                <div className='md:flex p-4 h-[60px]'>
                  <Button className='md:w-1/4'>
                    <Link href={'/products'} className=''>Shop Now</Link>
                  </Button>
                </div>
              </div>
              <Image
                src='/images/combo.jpeg'
                alt='image'
                height={500}
                width={500}
                className='hidden md:w-1/2 md:flex'
              />
            </div>
          </div>
        </main>
      </Layout>
  )
}
