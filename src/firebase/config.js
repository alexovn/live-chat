import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzYViNlOe2i_74n---4Y8qblvPvbMPLAA",
  authDomain: "default-firebase-deb2a.firebaseapp.com",
  projectId: "default-firebase-deb2a",
  storageBucket: "default-firebase-deb2a.appspot.com",
  messagingSenderId: "727039559087",
  appId: "1:727039559087:web:3e1fcb6d1ab5a911b8db5a"
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
  projectAuth,
  projectFirestore,
  timestamp
};