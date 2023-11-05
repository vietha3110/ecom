'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import Layout from '@/components/Layout'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from '@/components/ui/card'
import Image from 'next/image'

export default function Products() {
    const {isError, data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`/api/products/`); 
            const data = await res.json()
            return data;
        }
    })
    if (isLoading || !data) {
        return (
            <div>Loading</div>
        )
    } 
    if (isError) {
        return <span>Error, Please try again</span>
    }
    
    return (
            <Layout>
                <div className='flex mx-8 min-h-screen flex-col'>
                    <div className='h-[100px]'></div>
                    <div className='w-full lg:grid lg:grid-cols-4 gap-4 md:grid md:grid-cols-3'>
                        {
                            data.map((product: {id: string, name: string, description: string, price: number}) =>
                                <Card key={product.id}>
                                    <Link key={product.id} href={`/products/${product.id}`}>
                                        <Image
                                            src='/images/bokho.jpeg'
                                            alt='product'
                                            height={400}
                                            width={400}
                                        />
                                        <CardContent>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardDescription>
                                                {product.description}
                                            </CardDescription>
                                            <p>
                                                {product.price}
                                            </p>
                                           
                                        </CardContent>
                                        
                                    </Link>
                                    <CardFooter>
                                        <Button>Adopt Now</Button>
                                    </CardFooter>
                                </Card>
                            )
                        }
                    </div>
                </div>
            </Layout>
    )
}
