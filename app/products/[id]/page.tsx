import { db } from '@/lib/db'
import { FC } from 'react'
import {
    Card, 
    CardDescription,
    CardTitle,
    CardContent,
    CardHeader,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Layout from '@/components/Layout'
import Image from 'next/image'

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
        <Layout>
            <div className='flex p-8 min-h-screen flex-col w-full'>
                <div className='h-[100px]'></div>
                <div className='h-[400px]'>
                    <Card>
                        <Image
                            width={400}
                            height={200}
                            src='/images/combo.jpeg'
                            alt='Caffe Latte'
                        />
                        <CardContent>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription >
                                {product.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button className='w-[200px] bg-slate-200'>
                                Adopt now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetailPage
