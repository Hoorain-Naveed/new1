// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBn6BXZxDueiggU8yBcYMSTs9AfgtXsnms",
    authDomain: "attendance-bcdc3.firebaseapp.com",
    projectId: "attendance-bcdc3",
    storageBucket: "attendance-bcdc3.appspot.com",
    messagingSenderId: "233169320317",
    appId: "1:233169320317:web:5aef7769f3873aeb9fb414"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
