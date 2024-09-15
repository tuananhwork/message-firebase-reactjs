import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB7nXzMPdUH4hmwhZHd3p-CW0VRHWzssYg',
  authDomain: 'messenger-react-anhcbt.firebaseapp.com',
  projectId: 'messenger-react-anhcbt',
  storageBucket: 'messenger-react-anhcbt.appspot.com',
  messagingSenderId: '298478069607',
  appId: '1:298478069607:web:ade342540721afd972f1c2',
  measurementId: 'G-SKK2CLR8MS',
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
