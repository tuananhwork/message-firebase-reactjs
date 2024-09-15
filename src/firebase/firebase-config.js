// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7nXzMPdUH4hmwhZHd3p-CW0VRHWzssYg',
  authDomain: 'messenger-react-anhcbt.firebaseapp.com',
  projectId: 'messenger-react-anhcbt',
  storageBucket: 'messenger-react-anhcbt.appspot.com',
  messagingSenderId: '298478069607',
  appId: '1:298478069607:web:ade342540721afd972f1c2',
  measurementId: 'G-SKK2CLR8MS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
