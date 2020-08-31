const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://devter-49b51.firebaseio.com",
  });
} catch (e) {}

// exportar solo el servicio de firestore
export const firestore = admin.firestore();
