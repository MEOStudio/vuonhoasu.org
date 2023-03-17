import { useState } from 'react';
import { app, db } from './firebaseConfig';
import { collection, 
    addDoc, 
    doc,
    getDoc,
    getDocs, 
    query, 
    where
 } from 'firebase/firestore';

export default function QueryDemo() {
    const [data, setData] = useState({}); 
    const [ageComp, setAgeComp] = useState(''); 
    const collectionRef = collection(db, 'HumanSpecifics'); 
    
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value}; 
        setData({...data, ...newInput}); 
    };

    const submit = () => {
        addDoc(collectionRef, {
            name: data.name,
            age: data.age 
        })
        .then(() => {
            alert("Success"); 
        })
        .catch((err) => {
            alert("Failed"); 
        });
    };

    const getEquals = () => {
        const q = query(collectionRef, where("age", "==", ageComp));
        getDocs(q).then((response) => {
            console.log(response.docs.map((item) => {
                    return item.data();
                }) 
            );
        });
    }

    return (
        <div>
            <input name = "name" placeholder='name' onChange = {event => handleInput(event)}></input>
            <input name = "age" placeholder='age'  onChange = {event => handleInput(event)}></input>
            <button onClick={submit}>Submit</button>
            <input placeholder='age' onChange={event => setAgeComp(event.target.value)}></input>
            <button onClick={getEquals}>Get Equal</button>
        </div>
    );
}