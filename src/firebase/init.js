import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
// keys here
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
  export default firebase.firestore()
