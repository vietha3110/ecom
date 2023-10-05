import { NextResponse } from 'next/server'
import { customInitApp } from './admin-config'
import { headers } from 'next/headers'
import { auth } from 'firebase-admin'

customInitApp();

export async function checkAuth() {
    const authorization = headers().get('Authorization');
    if (authorization?.startsWith('Bearer')) {
        const idToken = authorization.split('Bearer ')[1];
        const decodedToken = await auth().verifyIdToken(idToken);
        const uid = decodedToken?.uid;
        const email = decodedToken?.email;
        const userFirebase = await auth().getUserByEmail(email); 
        return userFirebase.uid === uid;
    } else {
        return NextResponse.json({ 'message': 'Unauthorized' }, { status: 403 });
    }
}
