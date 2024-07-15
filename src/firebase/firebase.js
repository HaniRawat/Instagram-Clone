
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0Rx9CTNLeJ5teSaLP_JeaR6TMMypU1fU",
  authDomain: "insta-clone-b9546.firebaseapp.com",
  projectId: "insta-clone-b9546",
  storageBucket: "insta-clone-b9546.appspot.com",
  messagingSenderId: "905026194567",
  appId: "1:905026194567:web:04148a30d0d3e1c9b9fc22",
  measurementId: "G-HCBHQFJP8Z"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,auth,firestore,storage};
