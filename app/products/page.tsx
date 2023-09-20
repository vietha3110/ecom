import Link from 'next/link'
import products from '../../json/products.json'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
  
export default async function Products() {
    return (
        <div className='flex p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4'>
                {
                    products.map(product => <div key={product.id}>
                        <Card className='w-full h-full'>
                            <CardHeader>
                                <CardTitle>
                                    <Link href={`/products/${product.id}`} className='text-blue-600'>
                                        {product.name}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{product.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                {product.keywords}
                            </CardFooter>
                        </Card>

                        
                    </div>)
                }
            </div>
        </div>
    )
}
