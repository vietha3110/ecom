import { db } from '@/lib/db'
import { FC } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup } from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
interface ProductDetailProps {
    params: {
        id: string
    }
}

async function getProduct(id: string) {
    const product = await db.product.findFirst({
        where: {
            id: id
        }
    });
    return product;
}

const ProductDetailPage: FC<ProductDetailProps> = async ({ params }) => {
    const product = await getProduct(params.id);
    console.log(product)
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='flex p-8 min-h-screen flex-col w-full'>
            <div className='h-[100px]'></div>
            <div className='h-[400px]'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '500px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{product.name}</Heading>
                            <Text py='2'>
                                {product.description}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup w={'100%'}>
                                <Button className='w-[200px] bg-slate-200'>
                                    Add to cart
                                </Button>
                                <Button className='w-[200px]' >
                                    Buy now
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>
                </Card>
            </div>
        </div>
    );
}

export default ProductDetailPage
