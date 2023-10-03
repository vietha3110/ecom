import firebase_app from '@/lib/firebase-config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(result);
    } catch (e) {
        error = e;
    }
    return { result, error }
}
