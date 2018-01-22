import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAvsUxxdfH0esLkDia4zhF9vmK2Fg6kCik",
    authDomain: "react-firebase-42e67.firebaseapp.com",
    databaseURL: "https://react-firebase-42e67.firebaseio.com",
    projectId: "react-firebase-42e67",
    storageBucket: "react-firebase-42e67.appspot.com",
    messagingSenderId: "501688043311"
  };
  if(!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const db = firebase.database();
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();

  
  export {
    auth,
    db,
    provider, 
  };