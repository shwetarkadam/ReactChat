import React, { useState,useEffect, useContext,  } from 'react';
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../services/Firebase";
import { UserContext } from '../providers/UserProvider';
import { Router, Redirect ,  useLocation} from 'react-router-dom';
import 'firebase/auth';
import RoomList from '../components/RoomList';
function Login() {
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)
    

    useEffect(() => {
        if (user) {
            console.log("Inside login user="+user);
         // setredirect('/roomList');
         return <RoomList/>
        }
      }, [user])
      if (redirect) {
        console.log("Inside login redirect  user="+user);
       return  <Redirect to={redirect}/>
      }
  
    return (
        <div className="login-buttons">
          <button className="login-provider-button" onClick={signInWithGoogle}>
          <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
          <span> Continue with Google</span>
         </button>
        </div>
    );
}

export default Login;