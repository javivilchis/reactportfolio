import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { getMessaging, getToken } from "firebase/messaging";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.


//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //apiKey: process.env.FIREBASE_KEY,
  apiKey: "AIzaSyCcfWq3jlxxrSoadsHSCwb3zKZfMNhgkAs",
  authDomain: "jv-website-42ff6.firebaseapp.com",
  databaseURL: "https://jv-website-42ff6.firebaseio.com",
  projectId: "jv-website-42ff6",
  storageBucket: "jv-website-42ff6.appspot.com",
  messagingSenderId: "915417051276",
  appId: "1:915417051276:web:ef203d8b7d73a0430a4ba9",
  measurementId: "G-DFB3DJ2HT5"
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
  if (user == null) {
    //console.log("logged in auth firebase");
  } else {
    console.log("No USER");
  }
});

const messaging = getMessaging();

getToken(messaging, { vapidKey: 'BL_DVh2r0QfNZIVh6bhrhfBb-PcNMEf6sc86AblDDp_ZOKUp_gTiAq_o8T_8bw7eVd5-oLNy7imtDF3vliqs5Cg' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    // console.log("src/index.js - CURRENT TOKEN: ", currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
}); 



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
// removing stuff that I added and not need. 01022022 10:05 pm.