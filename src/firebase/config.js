import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBYhCjeLJA7-QbW3JWyI_rU34F9NKdKiVo",
  authDomain: "pictures-719f4.firebaseapp.com",
  databaseURL: "https://pictures-719f4-default-rtdb.firebaseio.com",
  projectId: "pictures-719f4",
  storageBucket: "pictures-719f4.appspot.com",
  messagingSenderId: "491620326189",
  appId: "1:491620326189:web:07301459b45176495ed1a4"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectStorage, projectFirestore, projectAuth, timestamp };
export default db;