import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQWiB5m7XGCbref3Pv57rEneka582_ogU",
  authDomain: "guardnine-7a620.firebaseapp.com",
  projectId: "guardnine-7a620",
  storageBucket: "guardnine-7a620.appspot.com",
  messagingSenderId: "104134934447",
  appId: "1:104134934447:web:1e7c3696e4aaa38cd1795a",
  measurementId: "G-Q9RS45KSVX",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);
