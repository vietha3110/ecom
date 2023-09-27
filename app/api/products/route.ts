import { db } from '@/lib/db';
import { NextResponse} from 'next/server';

export async function GET() {
    try {
        const products = await db.product.findMany();
        return NextResponse.json(products, { status: 200 });
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: 'There is an error. Please try again' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log(body)
        const newProduct = await db.product.create({
            data: {
                name: body.name,
                description: body.description,
                quantitive: body.quantitive,
                price: body.price,
                discount: body.discount
            }
        });
        return NextResponse.json(newProduct, { status: 201 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ message: 'There is an error. Please try again' }, { status: 500 });
    }
}
