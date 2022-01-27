import firebase from "firebase/compat/app" ;
import "firebase/compat/auth" ; 
import "firebase/compat/firestore" ;

const firebaseConfig = {
  apiKey: "AIzaSyAvansdtNB-HxWRdMCDgj8nfeeZTNdM004",
  authDomain: "amzon-challenge-b128c.firebaseapp.com",
  projectId: "amzon-challenge-b128c",
  storageBucket: "amzon-challenge-b128c.appspot.com",
  messagingSenderId: "18409329960",
  appId: "1:18409329960:web:0eeb4a5efe1486556aac1d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) ;

const db = firebaseApp.firestore() ; 
const auth = firebaseApp.auth() ; 

export { db , auth } ;