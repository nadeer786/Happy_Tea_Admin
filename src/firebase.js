// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDWz-3cmokmFPWW7huQ-roZa7W02efsafg',
    authDomain: 'react-admin-dashbord.firebaseapp.com',
    projectId: 'react-admin-dashbord',
    storageBucket: 'react-admin-dashbord.appspot.com',
    messagingSenderId: '770562951293',
    appId: '1:770562951293:web:e53b566325c9be17224914'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
