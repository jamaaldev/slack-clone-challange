import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoQ_V7-DrYMS-zUBX7vkcNQPaNh0PTCa0",
    authDomain: "slackchallange.firebaseapp.com",
    projectId: "slackchallange",
    storageBucket: "slackchallange.appspot.com",
    messagingSenderId: "280485890616",
    appId: "1:280485890616:web:1ceeb83f43eb7a8a7ff4cd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();



  export default db;