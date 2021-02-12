import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6GE_0cfjw86g1ke55QURFq8c0EJtXFpY",
  authDomain: "catch-of-the-day-mcvenco.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mcvenco-default-rtdb.firebaseio.com/",
  projectId: "catch-of-the-day-mcvenco",
  storageBucket: "catch-of-the-day-mcvenco.appspot.com",
  messagingSenderId: "833506937779",
  appId: "1:833506937779:web:a6d636fdd34cb1327dd9c6"
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp }

// This is a default export
export default base;
