import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { checkAuth } from '@/lib/checkAuth'

export async function GET() {
    const res = await checkAuth(); 
    if (res) {
        try {
            const cart = await db.cart.findFirst();
            return NextResponse.json(cart, {status: 200})
        } catch (e) {
            console.log(e);
            return NextResponse.json({
                message: 'There is an error. Please try again'
            }, {
                status: 500
            })
        }
    }
}

export async function POST(request: Request) {
    const res = await checkAuth(); 
    if (res) {
        try {
            const body = await request.json();
            const newCart = await db.cart.create({
                data: {
                    product: body.product_id, 
                    user_id: body.user_id
                }
            })
        } catch (e) {
            console.log(e);
            return NextResponse.json({
                message: 'There is an error. Please try again'
            }, {
                status: 500
            })
        }
    }
}
