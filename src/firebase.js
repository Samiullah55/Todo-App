import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBjIhOg8Le0rXYu4vHNX74xSg6jvEug2zg",
    authDomain: "todo-app-6090f.firebaseapp.com",
    projectId: "todo-app-6090f",
    storageBucket: "todo-app-6090f.appspot.com",
    messagingSenderId: "311616722802",
    appId: "1:311616722802:web:32b34649882556915c6feb",
    measurementId: "G-CMPFVM1VH3"

});

export const db=firebaseApp.firestore();
