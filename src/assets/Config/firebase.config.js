// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Bk3TkC2vRkHiSCrr6l6sD4Co-H60rBc",
  authDomain: "maids-central-3c0c1.firebaseapp.com",
  projectId: "maids-central-3c0c1",
  storageBucket: "maids-central-3c0c1.appspot.com",
  messagingSenderId: "642051837535",
  appId: "1:642051837535:web:be19c1a9be066152fd55ea"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 export default auth;