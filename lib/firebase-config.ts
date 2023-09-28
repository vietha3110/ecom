import {initializeApp, getApps} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCumu7yg_IRgdPFgn9EZFYfrxypMQ5LZLg",
  authDomain: "chat-5e2df.firebaseapp.com",
  projectId: "chat-5e2df",
  storageBucket: "chat-5e2df.appspot.com",
  messagingSenderId: "432653301022",
  appId: "1:432653301022:web:91f9c81b70465087c5450f",
  measurementId: "G-3HSCRVLTH8"
};

  let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

  export default firebase_app;
