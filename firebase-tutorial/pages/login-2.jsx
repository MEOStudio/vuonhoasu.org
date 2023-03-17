import { initializeApp } from "firebase/app";
import { useState } from 'react'; 
import { app } from './firebaseConfig';
import { getAuth, 
    signInWithPopup,
    GoogleAuthProvider
    // <Name>AuthProvider
 } from "firebase/auth";

export default function Login() {
    let auth = getAuth(); 
    const googleProvider = new GoogleAuthProvider(); 
    // const <name>Provider = new <Name>AuthProvider(); 

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                alert("Log in with Google successfully"); 
            })
            .catch((err) => {
                alert(err.message); 
            });
    };

//    const signInWith<Name> = () => {
//        signInWithPopup(auth, <name>Provider)
//            .then((response) => {
//               alert("Log in with <Name> successfully"); 
//            })
//            .catch((err) => {
//                alert(err.message); 
//            });
//    };

    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((response) => {
                alert("Log in with Google successfully"); 
            })
            .catch((err) => {
                alert(err.message); 
            });
    };

    return (
        <div>
            <h1>Login with other methods</h1>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
}