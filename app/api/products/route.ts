import {db} from '@/lib/db'
import { NextResponse, NextRequest } from 'next/server';
export async function GET() {
    try {
        const products = await db.product.findMany();
        return NextResponse.json(products, {status: 200})
    } catch (e) {
        return NextResponse.json({message: 'couldnt fetch products'}, {status: 500})
    }
}
