'use client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuth } from './auth-provider'
import Layout from '@/components/Layout'
import {
  Alert, 
  AlertDescription,
  AlertTitle
} from '@/components/ui/alert'
import { Terminal } from 'lucide-react'

export default function Home() {
  const {isAuth, setIsAuth} = useAuth();
  return (
    <Layout>
      <main className='md:flex min-h-screen md:flex-col md:mx-8 sm:mx-4 sm:flex-cols'>
        <div className='w-full '>
          <div className='h-[100px]'></div>
          <div>
            <Alert>
              <Terminal className="h-4 w-4" />
                <AlertTitle>UPDATE</AlertTitle>
                <AlertDescription>
                 1. Our Chirstmas English Creams have arrived, just borned 11/01/2023, all seem to be nice and healthy. Puppies will be ready for adoption on 12/23/2023. Adopt now
              </AlertDescription>
              <AlertDescription>
                2. We have gorgeous Golden English Poodle Puppies available for adoption (2 boys and 3 girls which borned on 9/5/2023). We only asking for $750 
              </AlertDescription>
              </Alert>
            </div>
            <div className='w-full flex flex-row'>
              <div className='md:w-1/2  h-[500px] md:flex flex-col justify-center sm:w-full'>
                <h1 className='md:text-5xl md:px-4 font-semibold '>Riverside English Cream Retrievers & English Doodles</h1>
                <span className='md:p-4 md:text-lg text-sm'>
                  Whether you are looking for a new best friend ( Golden Retriever English Creme ) or you need a place.
                </span>
                <div className='md:flex p-4 h-[60px]'>
                  <Button className='md:w-1/4'>
                    <Link href={'/products'} className=''>Adopt Now</Link>
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
