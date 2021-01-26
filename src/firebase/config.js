import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBqbMp1E4K6djRJwcSndYkf0N7D7CrBM9I',
  authDomain: 'smoothies4devs.firebaseapp.com',
  projectId: 'smoothies4devs',
  storageBucket: 'smoothies4devs.appspot.com',
  messagingSenderId: '18175414000',
  appId: '1:18175414000:web:e83b6ba880c0228909bc35',
};

firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
