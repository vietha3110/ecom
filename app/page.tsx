import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col mx-8'>
      <div className='w-full '>
        <div className='h-[100px]'></div>
        <div className='w-full flex flex-row'>
          <div className='w-1/2  h-[500px] flex flex-col justify-center'>
            <h1 className='text-5xl px-4 font-semibold'>Má mà kitchen - Chuyên bò khô / cá hồi/ trứng ngâm tương</h1>
            <span className='p-4 text-lg'>
              Ở đây tớ bán những món ăn mà chồng con tớ khen ngon
            </span>
            <div className='flex p-4 h-[60px]'>
              <Button className='w-1/4s'>
                <Link href={'/products'}>Shop Now</Link>
              </Button>
            </div>
          </div>
          <Image
            src='/images/combo.jpeg'
            alt='image'
            height={500}
            width={500}
          />
        </div>
      </div>
    </main>
  )
}
