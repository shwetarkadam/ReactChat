import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {auth} from "../config.js";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';

function ChatMessage(props){
    const {text,uid,photoURL,displayName,room}=props.message;
    //comparing userid on te firestore doc with current logged in user
    const messageClass=uid===auth.currentUser.uid ?'sent':'received';
   console.log("room="+room);
     return(<div className={  `message ${messageClass}`}>
  <img src={photoURL}  />
  <div>{displayName}</div>
       <p>{text}</p>
     </div>)
  }

export default ChatMessage;