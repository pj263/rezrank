import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzQSlzv5ddaqSRqwIXtClgbWhz2nwTVY8",
    authDomain: "rezrank.firebaseapp.com",
    projectId: "rezrank",
    storageBucket: "rezrank.appspot.com",
    messagingSenderId: "336060146712",
    appId: "1:336060146712:web:b929b8a6cbec2c63b10f6d",
    measurementId: "G-603ESNWTXR"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
