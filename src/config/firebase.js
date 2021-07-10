import * as firebase from 'firebase';

import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDGqfZ5ztLNvoIpv_KNKj9pWAoTZOq18pE",
  authDomain: "polifig-cfee2.firebaseapp.com",
  databaseURL: "https://polifig-cfee2-default-rtdb.firebaseio.com",
  projectId: "polifig-cfee2",
  storageBucket: "polifig-cfee2.appspot.com",
  messagingSenderId: "203211670969",
  appId: "1:203211670969:web:cae57ad7683e82be8fa268",
  measurementId: "G-MWRKENSN2F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();