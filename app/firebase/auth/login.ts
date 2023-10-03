import firebase_app from '@/lib/firebase-config'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth' 

const auth = getAuth(firebase_app);

export default async function logIn(email: string, password: string) {
    let user = null, error = null;
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        user = result.user;
       
    } catch (e) {
        error = e;
    }
    return { user, error}
}
