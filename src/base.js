import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBUKjVGHl_O8C_Y7cG9NwLGih91xS-gGXM",
  authDomain: "proyectoslides-300e5.firebaseapp.com",
  databaseURL: "https://proyectoslides-300e5.firebaseio.com",
  projectId: "proyectoslides-300e5",
  storageBucket: "proyectoslides-300e5.appspot.com",
  messagingSenderId: "592288671476",
  appId: "1:592288671476:web:d53dbeb9c02a755f31e0a1",
  measurementId: "G-0X22L5556Q",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
