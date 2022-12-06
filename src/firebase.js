import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyCcfWq3jlxxrSoadsHSCwb3zKZfMNhgkAs",
     authDomain: "jv-website-42ff6.firebaseapp.com",
     databaseURL: "https://jv-website-42ff6.firebaseio.com",
     projectId: "jv-website-42ff6",
     storageBucket: "jv-website-42ff6.appspot.com",
     messagingSenderId: "915417051276",
     appId: "1:915417051276:web:ef203d8b7d73a0430a4ba9",
     measurementId: "G-DFB3DJ2HT5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


const publicKey = process.env.REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
     let currentToken = "";

     try {
          currentToken = await messaging.getToken({ vapidKey: publicKey });
          if (currentToken) {
               setTokenFound(true);
          } else {
               setTokenFound(false);
          }
     } catch (error) {
          console.log("An error occurred while retrieving token. ", error);
     }

     return currentToken;
};

export const onMessageListener = () =>
     new Promise((resolve) => {
          messaging.onMessage((payload) => {
               resolve(payload);
          });
     });