import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import './App.css';
import { useRef, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import ChatMessage from './components/ChatMessage';
import ChatRoom from './components/ChatRoom';
import {auth} from "./config.js";
import {firestore} from "./config.js";

function App() {
  
const [user]=useAuthState(auth); //iifnull user signed out
const[currentRoom,setCurrentRoom]=useState("General");
  return (
    <div className="App">
      <header>
      💬Shweta's Chat Room
     
<SignOut />
    </header>

    <section>
    {user?<ChatRoom currentRoom={currentRoom}/>:<SignIn/>}
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



const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };
  return (
    <div className="rooms">
      <h2>Select room</h2>
      <ul>
        <li
          onClick={() => {
            handleRoomChange("HTML");
          }}
          className={currentRoom === "HTML" ? "active" : ""}
        >
          HTML
        </li>
        <li
          onClick={() => {
            handleRoomChange("CSS");
          }}
          className={currentRoom === "CSS" ? "active" : ""}
        >
          CSS
        </li>
        <li
          onClick={() => {
            handleRoomChange("General");
          }}
          className={currentRoom === "General" ? "active" : ""}
        >
          General
        </li>
        <li
          onClick={() => {
            handleRoomChange("ReactJs");
          }}
          className={currentRoom === "ReactJs" ? "active" : ""}
        >
          ReactJs
        </li>
        <li
          onClick={() => {
            handleRoomChange("JavaScript");
          }}
          className={currentRoom === "JavaScript" ? "active" : ""}
        >
          JavaScript
        </li>
      </ul>
    </div>
  );
};

export default App;
