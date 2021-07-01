import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDuwL67Ytwu4TJNvd-FqRAS6hc5VadggB4",
    authDomain: "reacta-chat-2306.firebaseapp.com",
    projectId: "reacta-chat-2306",
    storageBucket: "reacta-chat-2306.appspot.com",
    messagingSenderId: "642810435674",
    appId: "1:642810435674:web:a5b30a01444c03f848e063"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;