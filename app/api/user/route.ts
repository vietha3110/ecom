import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { customInitApp } from '@/lib/admin-config';
import { cookies, headers } from "next/headers";
import { auth } from "firebase-admin";

customInitApp()

export async function POST(request: Request) {
    const authorization = headers().get("Authorization");
    if (authorization?.startsWith("Bearer ")) {
        const idToken = authorization.split("Bearer ")[1];
        const decodedToken = await auth().verifyIdToken(idToken);
    console.log(decodedToken)
        // if (decodedToken) {
        //   //Generate session cookie
        //   const expiresIn = 60 * 60 * 24 * 5 * 1000;
        //   const sessionCookie = await auth().createSessionCookie(idToken, {
        //     expiresIn,
        //   });
        //   const options = {
        //     name: "session",
        //     value: sessionCookie,
        //     maxAge: expiresIn,
        //     httpOnly: true,
        //     secure: true,
        //   };
    
        //   //Add the cookie to the browser
        //   cookies().set(options);
        // }
      }
    // try {
    //     const body = await request.json();
    //     const newUser = await db.user.create({
    //         data: {
    //             name: body.name,
    //             email: body.email,
    //             address: body.address,
    //             phone: body.phone,
    //         }
    //     });
    //     return NextResponse.json(newUser, { status: 201 });
    // } catch (e) {
    //     return NextResponse.json({message: 'There is an error. Please try again'}, {status: 500})
    // }
}
