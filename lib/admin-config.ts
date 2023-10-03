import { initializeApp, getApps, cert } from 'firebase-admin/app';
import * as firebaseConfig from '@/serviceAccountKey.json'

const adminConfig = {
    credential: cert(firebaseConfig)
}


export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(adminConfig);
    }
}
