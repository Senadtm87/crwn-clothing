import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDoh7foGX6oFUFKpq1r1MAjagRavihWG8c",
    authDomain: "crwn-db-c825e.firebaseapp.com",
    databaseURL: "https://crwn-db-c825e.firebaseio.com",
    projectId: "crwn-db-c825e",
    storageBucket: "crwn-db-c825e.appspot.com",
    messagingSenderId: "753313639120",
    appId: "1:753313639120:web:cf207642d0bf9b35d8ccd5"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;