import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCdOLZRpwhA5CyTWtb6gsHHU-VENC9beaU",
  authDomain: "shree-balaji-c9b91.firebaseapp.com",
  projectId: "shree-balaji-c9b91",
  storageBucket: "shree-balaji-c9b91.appspot.com",
  messagingSenderId: "566490321605",
  appId: "1:566490321605:web:a0ef063a59d38de7b296ac",
  measurementId: "G-GY84DWM02V"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
