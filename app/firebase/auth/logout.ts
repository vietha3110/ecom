import firebase_app from '@/lib/firebase-config'
import { signOut, getAuth } from 'firebase/auth' 

const auth = getAuth(firebase_app);


export default async function logOut() {
    let result = null, error = null;
    try {
        result = await signOut(auth);
    } catch (e) {
        error = e;
    }
    return {result, error}
}
