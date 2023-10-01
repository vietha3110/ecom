import logOut from '@/app/firebase/auth/logout' 
import { NextResponse } from 'next/server'

export async function GET() {
    await logOut();
    return NextResponse.json({message: 'Log out successfully'})
}
