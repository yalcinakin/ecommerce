import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBwuK-XcaXkw0hmZzBrwY_EzeeyrCy9vqY",
    authDomain: "ecommerce-db-d8cff.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d8cff.firebaseio.com",
    projectId: "ecommerce-db-d8cff",
    storageBucket: "ecommerce-db-d8cff.appspot.com",
    messagingSenderId: "157763540481",
    appId: "1:157763540481:web:8cb9162ec52a1582b9d200",
    measurementId: "G-V7SWCNFP5T"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
