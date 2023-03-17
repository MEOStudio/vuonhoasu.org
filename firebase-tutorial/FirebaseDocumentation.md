# Firebase Documetation

## Getting Started

First, we need to create a Firebase project through this link: https://console.firebase.google.com/
Your new Firebase project should look like this, and the **Firebase-0** should be replaced by your project's name

![](https://i.imgur.com/nTFjrQW.png)

Next, we are going to add an App. You don't need to add Firebase Hosting at this step. After you put in your web app name, Firebase will show you how to install and set up the configuration, but I will repeat it here. First, you can open your web project and install Firebase in bash using 
```bash 
$ npm install firebase
```

Afterwards, we create a **js** or **jsx** (named **firebaseConfig.\***) file to store the firebase configuration. The configuration should look like this, with your provided keys
```jsx 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
```
Notice that we are using NextJS, the last line will be **export const app = initializeApp(firebaseConfig)**.

Finally, we add this line of code to all files that we need to use Firebase.
```jsx 
import { app } from './firebaseConfig' 
// Replace with your location of the firebaseConfig.jsx
```

## Authentication
We are going to focus on how to set up account authentication with Firebase. 
First, we need to choose an authentication method. In this case, I am going to choose Email-Password Authentication and Google Authentication, or what we know as sign in with email-password and Google. 
### Firebase Setup
Go to the Authentication tab and then press **Add new provider**. If you are on the Firebase Authentication first time, just press **Get Started** then it will move to the screen below. 

![](https://i.imgur.com/zz5DOPv.png)

Choose the sign-in method you want to use. With additional providers, we will be required to submit an application ID and application secret, which we can find it ourselves. For simplicity, I will use Email/Password and Google. 

![](https://i.imgur.com/YY0A7Yk.png)

In your code, we need to add this line to initialize Firebase Authentication and get a reference to the service.
```jsx
import { getAuth } from "firebase/auth" 

let auth = getAuth(); 
```

### Register
Please refer to **register.jsx** and [this link](http://localhost:3000/register) (this link leads to the register.jsx, remember to use npm run dev).
We use the ```createUserWithEmailAndPassword``` from Firebase to do this operation.
```jsx 
import { createUserWithEmailAndPassword } from "firebase/auth"

const signUp = () => {
  createUserWithEmailAndPassword(auth, email, password)  
};
```

Once we sign up for an account, we will be able to find that account in the Users tab in Firebase's Authentication.

#### Demo
![](https://i.imgur.com/PXcuobQ.png)
![](https://i.imgur.com/3efz57I.png)

### Sign In
Please refer to **login.jsx** and [this link](http://localhost:3000/login) (this link leads to the login.jsx, remember to use npm run dev).
We use the ```signInWithEmailAndPassword``` from Firebase to do this operation.
```jsx 
import { signInWithEmailAndPassword } from "firebase/auth"

const signIn = () => {
  signInWithEmailAndPassword(auth, email, password)  
};
```

We can notice that only the correct pair of email/passwords we have stored in the firebase can be logged in successfully.

#### Demo
![](https://i.imgur.com/pxc6mt3.png)

### Register And Sign In With Other Methods
Please refer to **login-2.jsx** and [this link](http://localhost:3000/login-2) (this link leads to the login.jsx, remember to use npm run dev).
We use the ```signInWithPopup``` from Firebase to do this operation.
In this section, I use Google as one of the other log in methods. 
```jsx
import { GoogleAuthProvider } from "firebase/auth" 
import { signInWithPopup } from "firebase/auth"

const googleProvider = new GoogleAuthProvider();
// Create an instance of GoogleAuthProvider

const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider); 
}
```
When we log in, there will be a pop up window asking which Google account to use. If there is no google account in the firebase then it will also be treated as a register operation.

## Firestore Database
### Set up a Firestore Database
Go to the **Firestore Database** section of the Firebase console and create a Firestore. There, Firebase will ask for a starting mode. 
**Test mode**: 
* Good for getting started with the mobile and web client libraries, but allows anyone to read and overwrite your data. After testing, make sure to review the Secure your data section.
* To get started with the web, Apple platforms, or Android SDK, select test mode.

**Locked mode**
* Denies all reads and writes from mobile and web clients. Your authenticated application servers (C#, Go, Java, Node.js, PHP, Python, or Ruby) can still access your database.
* To get started with the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library, select locked mode.

After finishing creating Firestore, it should look like this 
![](https://i.imgur.com/3AuXPAD.png)

Afterwards, we are going to initialize a Firestore and get a reference of that Firestore in **firebaseConfig.jsx**

```jsx 
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);
```
### Add a data
Please refer to **addData.jsx** and [this link](http://localhost:3000/addData) (this link leads to the login.jsx, remember to use npm run dev).
We use the `addDoc` to do this operation.
```jsx 
import { collection, addDoc } from 'firebase/firestore'; 

const collectionRef = collection(db, 'Human')
//    collection's reference = collection(database reference, name of storage)

addDoc(collectionRef, {
    name1: data1, 
    name2: data2, 
    ...
})
```

#### Demo 
Let's add 2 data to the "Human" database which store data defined as {name, code}

![](https://i.imgur.com/uymbMiN.png)
![](https://i.imgur.com/eiUVHZy.png)

If we go to the Firestore in the Firebase console, at tab Data, we can see that there are 2 instances of "Human" data 

![](https://i.imgur.com/vcLae3w.png)

We may notice that the ID of these two objects are totally random, or auto-generated. If we want to add a data with a specific ID, we use `doc` and `setDoc`

```jsx 
import { doc, setDoc } from 'firebase/firestore'; 

data = {
    // data
}

setDoc(doc(db, "Human", "id-name"), data); 
```

### Get Data
#### Get One Data
In order to get one data, we use the code below
```jsx 
import { doc, getDoc } from 'firebase/firestore'; 

getDoc(doc(db, "Human", "id-name"));
```

#### Get Some or All Data
In order to get all data, we use `getDocs`. Please refer to **addData.jsx**.  
```jsx 
import { doc, getDocs } from 'firebase/firestore'; 

getDocs(collectionRef).then((response) => {
    console.log(response.docs.map((item) => {
            return item.data();
        })  
    );
});
```

In order to get some data, we use 'getDocs' and 'where'. 

### Update Data
We can update one data by referencing to it and make changes without overwritting the whole data. 
```jsx 
import { doc, updateDoc } from 'firebase/firestore'; 

const docToUpdate = doc(db, "Human", "id-name"); 
updateDoc(docToUpdate, {
    nameToUpdate1: valueToUpdate1, 
    nameToUpdate2: valueToUpdate2, 
    ...
});
```
We only need to specify which value to update, there's no need to list everything. 

### Delete Data 
We can delete one data from code by referencing to it. 
```jsx 
import { doc, deleteDoc } from 'firebase/firestore'; 

const docToDelete = doc(db, "Human", "id-name"); 
deleteDoc(docToUpdate);
```

Note: We can always delete/update manually through the Firestore on the Firebase console, so there is no need for coding. 

### Get Real-time Updates
Please refer to **realtime.jsx**
To get real-time updates, we use `onSnapshot()` method. 
```jsx 
import { onSnapshot } from 'firebase/firestore'; 

onSnapshot(QueryReference, what_to_do_next, what_to_do_if_error_optional, 
           what_to_do_when_complete_optional);
```
The documentation from Firebase will tell you to write this method as follow 
```jsx 
export default function AppFeature() {
    const collectionRef = collection(db, "Something"); 
    
    // Normal Code here
    
    const listener = onSnapshot(collectionRef, someFunction); 
}
```
It will make the listener a bit too powerful because according to Firebase documentation, your listeners will be notified with the new data before the data is sent to the backend, and thus invoke it immediately every writes. 
What I do is to put the `onSnapshot()` in an another function, and call it using `useEffect` of the React library. In this way, the `onSnapshot()` is invoked only when there are changes to the collection. 
```jsx 
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
```

#### Detach a listener
Let's say you want to have a very powerful listener and at some moment you want to stop it. Then we can do it like this. 
```jsx
// Code from Firebase Documentation
import { collection, onSnapshot } from "firebase/firestore";

const unsubscribe = onSnapshot(collection(db, "cities"), () => {
  // Respond to data
  // ...
});

// Later ...

// Stop listening to changes
unsubscribe();
```

### Queries
Refer to **query.jsx** 
Assume we have a database like this 
```json 
[
    {name: 'Paul', age: '18'}, 
    {name: 'Phuc', age: '18'},
    {name: 'Yang', age: '19'}, 
    {name: 'Duc', age: '20'}, 
    {name: 'Thuc', age: '20'}
]
```
and we want to filter by age. 
In order to do so, we use `query` and `where` method from Firestore. 
```jsx 
import { query, where } from 'firebase/firestore'; 

const q = query(collectionRef, 
                where("variableName", "condition", "thresholdValue")); 
```

For example 
```jsx 
const q = query(collectionRef, where("age", "==", "18")); 
// q will contain the reference of a database containing only age 18. 
```

The condition can be 
* "==": Equals To 
* "!=": Not equals to
* ">": Greater than
* "<": Less than
* ">=": Greater than or equal to
* "<=": Less than or equal to
* in: Check if the value is equal to any value in an array of value
* not-in: The opposite of in
* array-contains: Check if an array contains the value, use for variables which are arrays. 
* array-contains-any: It's the same as in but for filter out arrays. 

#### Compound queries
If we have multiple filtering, we can put all condition in one `query()`. 
```jsx 
const q = query(something, where(first_condition), where(second_condition), 
                ...)
```

#### Demo 
Get query 18
![](https://i.imgur.com/hREeElY.png)

Get query 19
![](https://i.imgur.com/MypTmde.png)

Get query 20
![](https://i.imgur.com/n121fZH.png)


## Firebase Storage
To simplify, Firebase Storage is like Firestore that can share files. 
### Set up Storage
Go to the **Storage** section of the Firebase console and create a Storage. The process should be similar to **Firestore**. After created, it should look like this

![](https://i.imgur.com/6ycLSvz.png)

Afterwards, add these lines of code to your **firebaseConfig.jsx** file
```jsx 
import { getStorage } from "firebase/storage";

export const storage = getStorage(app);
```

### Reference in Storage
The reference of an object (can be a file or a folder) in the storage can be declared as
```jsx 
import { ref } from 'firebase/storage'; 
const somethingRef = ref(storage, 'the path of something'); 
```
**Warning**: 
```jsx 
// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, 'mountains.jpg');

// Create a reference to 'images/mountains.jpg'
const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name;           // true
mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
```
#### Some properties
* parent: Get the reference of the parent
* root: Get the reference of the root. The parent of root is null 
* fullpath: Get the string of full path of the refered object
* bucket: Get the name of the bucket storing the object

For more references and information, we can go to [firebase.storage.Reference](https://firebase.google.com/docs/reference/node/firebase.storage.Reference).

### Upload files
To upload a file, we have two options: 
* `uploadBytes`: Upload the data to object location
* `uploadBytesResumable`: Upload the data to object location. In this method, the upload can be paused, resumed, cancelled, and progress-tracked.

I will use option 2 for the demo. Please refer to **storage.jsx** and [this link](http://localhost:3000/storage). 
```jsx 
import { uploadBytesResumable } from 'firebase/storage'

// Create a reference for storage
const storageRef = ref(storage, data.name); 
// Create an UploadTask object that helps upload data
const uploadData = uploadBytesResumable(storageRef, data); 
                // uploadBytesResumable(storage reference, data to upload) 
// Activate the upload task with on() method. 
// The on method takes in 4 parameters
// 1) A TaskEvent Object, usually 'state_changed' which helps detect whether
// the state has changed
// 2) A function tell us what to do next (optional) 
// 3) A function tell us what to do when there is errors (optional) 
// 4) A function tell us what to do when the file is complete (optional)

uploadData.on('state_changed',
    // A snapshot of the UploadDataSnapshot class which contains information
    // about the state of the upload (cancel, running, ...) 
    // and the progress of the upload
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
        console.log('Progress: ' + progress + "%"); 
        // Anything else
    }, 
    () => { 
        // Error thing 
    }, 
    () => {
        // Complete thing
    }
)
```

As I mention earlier, the `uploadBytesResumable` can create a pause and resume operation on upload task. To achieve this, we can turn the uploadData into global variable (within the scope of the main function) and create functions to do it. Note that if we use local variable to pause, it will pause forever. 

#### Demo 
I will upload a 11000 KB file on the server. 

![](https://i.imgur.com/wH7PTRb.png)

We can see that the upload is pausible. 

![](https://i.imgur.com/UcSvVkC.png)

We can see that after uploading, there will be a download link for it, which I will talk about later. 

![](https://i.imgur.com/8d7VZYd.png)

Afterwards, if we go to the Storage, we can see there is the file we uploaded. 

### Download files
To download a file, we use `getDownloadURL()`
```jsx 
import { getDownloadURL } from 'firebase/storage'; 

getDownloadURL(refOfFile); 
```

## Firebase Hosting
Note: This section only shows you how to deploy the hosting, not how to edit it. After this section, your web should look like this or similar 

![](https://i.imgur.com/LdnuWV2.png)

Go to your command prompt or NodeJS Prompt to log in your Firebase client with the command. Afterwards, you will be prompted to log in through your Google Account. 
```cmd 
$ firebase login
```
To check all of your projects, use 
```cmd 
$ firebase projects:list
```
Afterwards, initialize the firebase by
```cmd 
$ firebase init
```
After initialization, to deploy the web app, do
```cmd 
$ firebase deploy --only hosting
```
## Firebase Security Rules
If you initialize the web app, there will be a section where they ask for the rules. Firebase Security Rules is used to secure your data between users.  Please refer to this [documentation](https://firebase.google.com/docs/rules?hl=en) for more information and methods of the security rules. 
`read`: Allow the user to read the log of the web app
`write`: Allow the user to make changes to the firebase collection. 
## References
[1] https://www.youtube.com/watch?v=fgdpvwEWJ9M
[2] https://firebase.google.com/docs/build