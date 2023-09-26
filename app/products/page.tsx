import Link from 'next/link'
import products from '../../json/items.json'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Plus } from 'lucide-react'
import Image from 'next/image'
export default async function Products() {
    return (
        <div className='flex mx-8 min-h-screen flex-col'>
            <div className='h-[100px]'></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
                {
                    products.map(product => <div key={product.id}>
                        <Card className='w-full h-[350px]'>
                            <CardHeader className='w-full h-[80px]'>
                                <CardTitle>
                                    <Link href={`/products/${product.id}`} className='text-blue-600'>
                                        {product.name}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='h-[200px] w-full flex justify-center items-center'>
                                <Image
                                    src='/images/bokho.jpeg'
                                    alt='bo kho'
                                    width={180}
                                    height={100}
                                    loading='lazy'
                                    className='rounded-full'
                                />    
                            </CardContent>
                            <CardFooter className='flex flex-row justify-between h-[60px]'>
                                <div>Price: {product.price}</div>
                                <Plus />
                            </CardFooter>
                        </Card>

                        
                    </div>)
                }
            </div>
        </div>
    )
}
