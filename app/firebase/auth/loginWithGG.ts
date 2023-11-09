import firebase_app from '@/lib/firebase-config'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
            const token = credential.accessToken;
            const user = result.user;
        }
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(errorMessage, errorCode)
    })
