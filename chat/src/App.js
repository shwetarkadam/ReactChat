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
import SignOut from './components/SignOut';
import SideNavBar from "./components/SideNavBar";

function App() {
 
const [user]=useAuthState(auth); //iifnull user signed out
const[currentRoom,setCurrentRoom]=useState("General");
const [showListMenu, setShowListMenu] = useState(false);
  return (
    <div className="App">
      
      <header>
     
      <SideNavBar  user={user}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}  />
     

     
      <SignOut setShowListMenu={setShowListMenu} />
    </header>
      {/* <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowListMenu={setShowListMenu}
              /> */}

    

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



// function SignOut(){
//   return auth.currentUser &&(
//     <button onClick={()=>auth.signOut()}>Sign Out</button>
//   )
// }




export default App;
