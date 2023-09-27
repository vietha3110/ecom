import { db } from '@/lib/db';
import { FC } from 'react';

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
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='flex mx-8 min-h-screen flex-col'>
            <div className='h-[100px]'></div>
            <div>
                <h1>Product: {params.id}</h1>
                <h2>Name: {product.name}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        </div>
    );
}

export default ProductDetailPage
