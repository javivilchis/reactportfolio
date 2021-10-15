import { FirebaseError } from "@firebase/util";

importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');

FirebaseError.initializeApp({
     messagingSenderId: "915417051276",
});

const initMessaging = firebase.messaging();