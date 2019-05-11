import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
    apiKey: "AIzaSyDv7koS_pHn_ylXm3Ivb9tY9vg552z8t5k",
    authDomain: "ninja-smoothies-76f74.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-76f74.firebaseio.com",
    projectId: "ninja-smoothies-76f74",
    storageBucket: "ninja-smoothies-76f74.appspot.com",
    messagingSenderId: "358319472662",
    appId: "1:358319472662:web:434c4a3455d6dff3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
  export default firebase.firestore()