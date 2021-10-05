import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfRrSJomtFBUUWGZiX14idU5JWYgGO86o",
  authDomain: "cg-tracker.firebaseapp.com",
  projectId: "cg-tracker",
  storageBucket: "cg-tracker.appspot.com",
  messagingSenderId: "402607191227",
  appId: "1:402607191227:web:cb0c07b3e875364738e59e",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const timestamp = serverTimestamp();

export { auth, db, storage, timestamp };
