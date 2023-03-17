import { useState, useEffect } from 'react';
import { app, db } from './firebaseConfig';
import { collection, 
    addDoc, 
    doc,
    getDoc,
    getDocs, 
    onSnapshot
 } from 'firebase/firestore';


export default function OnSnapshotDemo() {
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
        onSnapshot(collectionRef, (response) => {
            console.log(response.docs.map((item) => {
                    return item.data();
                }) 
            );
        });
    };

    useEffect(() => {
        getAllData(); 
    }, [])

    return (
        <div>
            <input name = "name" placeholder='name' onChange = {event => handleInput(event)}></input>
            <input name = "code" placeholder='code' onChange = {event => handleInput(event)}></input>
            <button onClick={submit}>Submit</button>
        </div>
    );
}