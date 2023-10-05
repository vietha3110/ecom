import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { checkAuth } from '@/lib/checkAuth';


export async function POST(request: Request) {
    const res = await checkAuth();
    if (res) {
        try {
            const body = await request.json(); 
            const newUser = await db.user.create({
                data: {
                    name: body.name, 
                    email: body.email, 
                    address: body.address,
                    phone: +body.phone
                }
            })
            return NextResponse.json(newUser, { status: 201 });
        } catch (e) {
            console.log(e);
            return NextResponse.json({ message: 'There is an error. Please try again' }, { status: 500 });
        }
    }
    console.log('fail')
    
    return NextResponse.json({ message: 'There is an error. Please try again' }, { status: 500 });
}
