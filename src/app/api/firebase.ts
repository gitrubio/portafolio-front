// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage , ref, getDownloadURL} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId:  import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket:  import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId:  import.meta.env.VITE_FIREBASE_APPID,
  measurementId:  import.meta.env.VITE_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app)

export const downloadCV = async () => {
    const storageRef = ref(storage, 'Carlos Rubio Curriculum .pdf');
    const url = await getDownloadURL(storageRef);
    window.open(url)
}