import firebase from 'firebase'

// Initialize Firebase
let config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "post-dashboard.firebaseapp.com",
    projectId: "post-dashboard",
    storageBucket: "post-dashboard.appspot.com",
    messagingSenderId: "951213681350",
    appId: "1:951213681350:web:c2aeb80e1538cdb3cb45c7",
    measurementId: "G-R1EX5JTEXB"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { db }