import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    console.log(request)
    try {
        const body = await request.json();
        const newUser = await db.user.create({
            data: {
                name: body.name,
                email: body.email,
                address: body.address,
                phone: body.phone,
            }
        });
        return NextResponse.json(newUser, { status: 201 });
    } catch (e) {
        console.log(e);
        return NextResponse.json({message: 'There is an error. Please try again'}, {status: 500})
    }
}
