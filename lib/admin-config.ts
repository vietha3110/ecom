export const admin = require("firebase-admin");

export const serviceAccount = require("@/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
