import {initializeApp} from 'firebase/app'
import 'firebase/auth'
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCumu7yg_IRgdPFgn9EZFYfrxypMQ5LZLg",
    authDomain: "chat-5e2df.firebaseapp.com",
    projectId: "chat-5e2df",
    storageBucket: "chat-5e2df.appspot.com",
    messagingSenderId: "432653301022",
    appId: "1:432653301022:web:6439706bd4322abdc5450f",
    measurementId: "G-B2CBW5Y6CW"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
