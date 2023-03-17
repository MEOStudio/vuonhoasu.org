import { initializeApp } from "firebase/app";
import { useState } from 'react'; 
import { app } from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    let auth = getAuth(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                alert("Log in successfully"); 
            })
            .catch((err) => {
                alert(err.message); 
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                placeholder = "Email"
                type = "email" 
                onChange = {(event) => setEmail(event.target.value)}
                value = {email}   
            />
            <input 
                placeholder = "Password"
                type = "password"
                onChange = {(event) => setPassword(event.target.value)}
                value = {password}
            />
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}