import React  from "react";
import {auth} from "../config.js";

const SignOut=({setShowSideBar})=>{
       return auth.currentUser &&(
        <button onClick={()=>auth.signOut()}>Sign Out</button>
    )
    

}
export default SignOut;