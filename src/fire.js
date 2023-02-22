 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJAEC7WxNlTbl8NEbOzPgwRU2ukH5CPlI",
  authDomain: "shreebalaji-b8500.firebaseapp.com",
  projectId: "shreebalaji-b8500",
  storageBucket: "shreebalaji-b8500.appspot.com",
  messagingSenderId: "770805685426",
  appId: "1:770805685426:web:e6bf144dc1a4def3c03dab",
  measurementId: "G-KFZ81FG9R7"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
