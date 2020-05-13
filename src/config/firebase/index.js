import firebase from 'firebase/app';
// import 'firebase/auth'; //Untuk Login
// import 'firebase/firestore'; //Untuk menyimpan database

var firebaseConfig = {
    apiKey: "AIzaSyBGghBJkQ5luFg8fSCgY6pjCnQDRz2vkIg",
    authDomain: "simple-notes-firebase-f1174.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-f1174.firebaseio.com",
    projectId: "simple-notes-firebase-f1174",
    storageBucket: "simple-notes-firebase-f1174.appspot.com",
    messagingSenderId: "836337787868",
    appId: "1:836337787868:web:18ed7753f5e801fa7ee519",
    measurementId: "G-6ZY5EL82HN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;