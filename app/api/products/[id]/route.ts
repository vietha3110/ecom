import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
    try {
        const product = await db.product.findFirst({
            where: {
               id: params.id
            }
        })
        if (!product) {
            return NextResponse.json({message: 'Product not found'}, {status: 404})
        } 
        return NextResponse.json(product, {status: 200})
    } catch (e) {
        return NextResponse.json({ message: 'There is an error. Please try again' }, { status: 500 });
    }
}
