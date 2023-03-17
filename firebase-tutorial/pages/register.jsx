import { initializeApp } from "firebase/app";
import { useState } from 'react'; 
import { app } from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
    let auth = getAuth(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response); 
            })
            .catch((err) => {
                alert(err.message); 
            });
    };

    return (
        <div>
            <h1>Register</h1>
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
            <button onClick={signUp}>Sign Up</button>
        </div>
    );
}