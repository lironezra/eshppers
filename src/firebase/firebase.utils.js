import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIjQmEtf6NZ4xXiAUgPzZ9yvuVnDqYTXI",
    authDomain: "eshoppers-db.firebaseapp.com",
    databaseURL: "https://eshoppers-db.firebaseio.com",
    projectId: "eshoppers-db",
    storageBucket: "eshoppers-db.appspot.com",
    messagingSenderId: "420777333689",
    appId: "1:420777333689:web:f7ccce71ea4a73de249c68",
    measurementId: "G-5BKWNCT0BH"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Section for google authentication
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Section for facebook authentication
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
    dispaly: 'popup'
});

export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

// Section for twitter authentication
const twitterProvider = new firebase.auth.TwitterAuthProvider();
twitterProvider.setCustomParameters({
    dispaly: 'popup'
});

export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);

export default firebase;


