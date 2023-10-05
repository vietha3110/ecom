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
        if (!decodedToken) {
            return NextResponse.json({ 'message': 'Unauthorized' }, { status: 403 });
        } else {
            return decodedToken?.uid
        }
    } else {
        return NextResponse.json({ 'message': 'Unauthorized' }, { status: 403 });
    }
}
