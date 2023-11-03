'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import Layout from '@/components/Layout'

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
                        {/* {
                            data.map((product: {id: string, name: string, description: string, price: number}) =>
                                <Card maxW='sm' key={product.id}>
                                    <Link key={product.id} href={`/products/${product.id}`}>
                                        <Image
                                            src='/images/bokho.jpeg'
                                            alt='product'
                                            borderRadius='lg'
                                        />
                                        <CardBody>
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>{product.name}</Heading>
                                            <Text>
                                                {product.description}
                                            </Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {product.price}
                                            </Text>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                    </Link>
                                    <CardFooter>
                                    <ButtonGroup px={2} display={'flex'} justifyContent={'space-between'} w={'100%'}>
                                        <Button >
                                            Buy now
                                        </Button>
                                        <Button >
                                            Add to cart
                                        </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            )
                        } */}
                    </div>
                </div>
            </Layout>
    )
}
