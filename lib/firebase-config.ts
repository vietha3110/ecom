import {initializeApp, getApps} from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyCumu7yg_IRgdPFgn9EZFYfrxypMQ5LZLg',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
