import { useState } from 'react';
import { app, db } from './firebaseConfig';
import { collection, 
    addDoc, 
    doc,
    getDoc,
    getDocs
 } from 'firebase/firestore';

export default function AddDataDemo() {
    const [data, setData] = useState({}); 
    const collectionRef = collection(db, 'Human'); 
    
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value}; 
        setData({...data, ...newInput}); 
    };

    const submit = () => {
        addDoc(collectionRef, {
            name: data.name,
            code: data.code 
        })
        .then(() => {
            alert("Success"); 
        })
        .catch((err) => {
            alert("Failed"); 
        });
    };

    const getAllData = () => {
        getDocs(collectionRef).then((response) => {
            console.log(response.docs.map((item) => {
                    return item.data();
                }) 
            );
        });
    }

    return (
        <div>
            <input name = "name" placeholder='name' onChange = {event => handleInput(event)}></input>
            <input name = "code" placeholder='code' onChange = {event => handleInput(event)}></input>
            <button onClick={submit}>Submit</button>
            <button onClick={getAllData}>Get All Data</button>
        </div>
    );
}