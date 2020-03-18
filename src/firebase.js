import firebase from 'firebase/app';
import firestore from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA0b8GkMczayLfF1UNOLdtuZF3m116T0kg",
  authDomain: "crud-vuejs-firebase-9669e.firebaseapp.com",
  databaseURL: "https://crud-vuejs-firebase-9669e.firebaseio.com",
  projectId: "crud-vuejs-firebase-9669e",
  storageBucket: "crud-vuejs-firebase-9669e.appspot.com",
  messagingSenderId: "406622813901",
  appId: "1:406622813901:web:ca2172b3dc86e845b43384",
  measurementId: "G-71T5F02RK7"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({});

export default firebaseApp.firestore();