import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDp6gL2xEZhz-53Soy7MLSRn_5_KqmCDfU',
  authDomain: 'disneyplus-clone-11037.firebaseapp.com',
  projectId: 'disneyplus-clone-11037',
  storageBucket: 'disneyplus-clone-11037.appspot.com',
  messagingSenderId: '571000640014',
  appId: '1:571000640014:web:725b1c23403c587009225f',
  measurementId: 'G-VMM9HK1J7L',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
