import { initializeApp } from "firebase/app";
import { useState } from 'react'; 
import { app } from './firebaseConfig';
import { storage } from "./firebaseConfig";
import { getApp } from "firebase/app";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function StorageDemo() {
    const [data, setData] = useState({}); 
    let uploadTask = null; 
    let paused = false; 

    const upload = () => {
        const storageRef = ref(storage, data.name); 
        uploadTask = uploadBytesResumable(storageRef, data); 
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
            console.log('Progress: ' + progress + "%"); 
            switch (snapshot.state) {
                case 'paused': 
                    console.log("Paused"); 
                    break; 
                case 'running': 
                    console.log("Running"); 
                    break; 
            }
        }, 
        (error) => {
            console.log("Code has error"); 
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
              });
        });
    }

    const pause = () => {
        if (paused == false) {
            paused = true; 
            uploadTask.pause(); 
        }
    }

    const resume = () => {
        if (paused == true) {
            paused = false; 
            uploadTask.resume(); 
        }
    }
    
    return (
        <div>
            <input type="file" onChange = {(event) => setData(event.target.files[0])}></input>
            <button onClick={upload}>Submit</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
        </div>
    )
}