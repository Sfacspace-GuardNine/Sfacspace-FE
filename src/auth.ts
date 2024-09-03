import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string,
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = async (token: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    return decodedToken;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};
