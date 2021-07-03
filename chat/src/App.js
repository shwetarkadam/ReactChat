import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import './App.css';
import { useRef, useState } from 'react';
firebase.initializeApp({
  apiKey: "AIzaSyDPpkjYcvA7P3in8wexntxqEdMuHInFJQM",
    authDomain: "reactchatapp-8bd09.firebaseapp.com",
    projectId: "reactchatapp-8bd09",
    storageBucket: "reactchatapp-8bd09.appspot.com",
    messagingSenderId: "888041213724",
    appId: "1:888041213724:web:e88cc3e5f603cf1c58b4d9",
    measurementId: "G-YHB110VHDM"
});

const auth=firebase.auth();
const firestore=firebase.firestore();

function App() {
  
const [user]=useAuthState(auth); //iifnull user signed out

  return (
    <div className="App">
      <header>
      💬Shweta's Chat Room
<SignOut />
    </header>
  
    <section>
    {user?<ChatRoom />:<SignIn/>}
    </section>
    </div>
  );
}
function SignIn(){
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
return(


  <button className="signInbutton"  onClick={signInWithGoogle}><img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
  Sign In with Google</button>
)
}



function SignOut(){
  return auth.currentUser &&(
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom(){
  const dummy=useRef();
const messagesRef=firestore.collection("messsages");//reference firestore collection to db named messages
//uery a subset of documents in collection
//console.log(messagesRef);
const uery=messagesRef.orderBy('createdAt').limit(50);

//listen to datawith  hook
const [messages]=useCollectionData(uery,{idField:'id'});

const [formValue,setFromValue]=useState('');
//console.log(messages);
const sendMessage=async(e)=>{
  console.log("fomrvaue="+formValue.trim().length);

  e.preventDefault();
  if(formValue.trim().length>0){
  const {uid,photoURL}=auth.currentUser;
  //create new document in firestoe
  await messagesRef.add({
    text:formValue,
    createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
  });
  }
  setFromValue('');//reset the form to empty
  dummy.current.scrollIntoView({behaviour:'smooth'});

}
return(
  <div>
    <main>
    {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg}/>)}
    <div  ref={dummy}></div>
    </main>
    
  <form>
    {/* bind state to form input */}
    <input  value={formValue} onChange={(e)=>setFromValue(e.target.value)}/>
    <button type="submit" onClick={sendMessage}>✔️</button>
  </form>
  </div>
)

}


function ChatMessage(props){
  const {text,uid,photoURL}=props.message;
  //comparing userid on te firestore doc with current logged in user
  const messageClass=uid===auth.currentUser.uid ?'sent':'received';
//  console.log(text)
   return(<div className={  `message ${messageClass}`}>
<img src={photoURL}  />
     <p>{text}</p>
   </div>)
}
export default App;
