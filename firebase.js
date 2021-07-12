import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhofJ5ffF5FzGytoUSshlfV-7QGEUiqJ4",
  authDomain: "polifig-89771.firebaseapp.com",
  projectId: "polifig-89771",
  storageBucket: "polifig-89771.appspot.com",
  messagingSenderId: "1035346726466",
  appId: "1:1035346726466:web:b9e1a59ec3afd55d33a7db",
  measurementId: "G-VFLRQCLVM6"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
