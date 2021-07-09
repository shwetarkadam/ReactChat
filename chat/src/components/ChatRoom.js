import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {auth} from "../config.js";
import { firestore } from '../config.js';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import { useRef, useState } from 'react';
import ChatMessage  from './ChatMessage';
function ChatRoom({currentRoom}){
    currentRoom="Private"
      //console.log(currentRoom);
      const dummy=useRef();
     
    const messagesRef=firestore.collection("messsages");//reference firestore collection to db named messages
    //uery a subset of documents in collection
    let uery=messagesRef
    .where("room","==","Private")
    .orderBy('createdAt')
    .limit(50);
    //listen to datawith  hook
    const [messages]=useCollectionData(uery,{idField:'id'});
    console.log("With current room condition:=");
    console.log(messages);
    const [formValue,setFromValue]=useState('');
    const sendMessage=async(e)=>{
      console.log("fomrvaue="+formValue.trim().length);
    
      e.preventDefault();
      if(formValue.trim().length>0){
      const {uid,photoURL,displayName,room}=auth.currentUser;
      //create new document in firestoe
      await messagesRef.add({
        text:formValue,
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName,
        room:currentRoom
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
export default ChatRoom;    