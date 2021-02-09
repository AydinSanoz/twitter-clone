import {createContext, useEffect, useState} from "react";
import firebase from "../firebase/firebase";

export const FirebaseAuthContext = createContext();

function AuthContextProvider = (props) =>{
    const [currentUser, setcurrentUser] = useState("")

    useEffect(()=>{
        firebase.firebaseAuth.onAuthStateChanged((user)=>setcurrentUser(user))
    },[])
    return(
        <FirebaseAuthContext.Provider value = {currentUser}>
            {props.children}
        </FirebaseAuthContext.Provider>
    )
}

export default AuthContextProvider;