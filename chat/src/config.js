import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDPpkjYcvA7P3in8wexntxqEdMuHInFJQM",
    authDomain: "reactchatapp-8bd09.firebaseapp.com",
    projectId: "reactchatapp-8bd09",
    storageBucket: "reactchatapp-8bd09.appspot.com",
    messagingSenderId: "888041213724",
    appId: "1:888041213724:web:e88cc3e5f603cf1c58b4d9",
    measurementId: "G-YHB110VHDM"
});

export const firebaseRef = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();