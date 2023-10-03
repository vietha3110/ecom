import firebase_app from '@/lib/firebase-config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
    let user = null,
        error = null;
    try {
        let result = await createUserWithEmailAndPassword(auth, email, password);
        user = result.user
    } catch (e) {
        error = e;
    }
    return { user, error }
}
