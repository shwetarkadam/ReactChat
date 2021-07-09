import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDPpkjYcvA7P3in8wexntxqEdMuHInFJQM",
    authDomain: "reactchatapp-8bd09.firebaseapp.com",
    projectId: "reactchatapp-8bd09",
    storageBucket: "reactchatapp-8bd09.appspot.com",
    messagingSenderId: "888041213724",
    appId: "1:888041213724:web:e88cc3e5f603cf1c58b4d9",
    measurementId: "G-YHB110VHDM"
  };
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export const auth=firebase.auth();
export const signInWithGoogle=()=>{
   
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((res) => {
       // console.log(res.user)
      }).catch((error) => {
      
          console.log(error.message);
  })
};
export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }
export default firebase;