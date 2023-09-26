import { Skeleton } from '@/components/ui/skeleton'
export default function Loading() {
    return (
        <div className='flex mx-8 min-h-screen flex-col'>
            <div className='h-[100px]'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
                <Skeleton className='w-[100px] h-[20px] rounded-full' />
            </div>
        </div>
    )
}
