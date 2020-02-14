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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(err){
      console.log("error creating user", err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
