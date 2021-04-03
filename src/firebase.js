import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC4K5xZSM-Nz8F172VqO4INxOtAi_5PvbY",
    authDomain: "src-code-2021.firebaseapp.com",
    projectId: "src-code-2021",
    storageBucket: "src-code-2021.appspot.com",
    messagingSenderId: "784316782757",
    appId: "1:784316782757:web:bd51f7112613424530554c",
    measurementId: "G-C59EC1GWDC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
