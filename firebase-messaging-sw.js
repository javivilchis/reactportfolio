// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// importScripts('https://www.gstatic.com/firebase/9.2.0/irebase-app.js');
// importScripts('https://www.gstatic.com/firebase/9.2.0/firebase-messaging.js');
const config = {
     apiKey: "AIzaSyCcfWq3jlxxrSoadsHSCwb3zKZfMNhgkAs",
     authDomain: "jv-website-42ff6.firebaseapp.com",
     databaseURL: "https://jv-website-42ff6.firebaseio.com",
     projectId: "jv-website-42ff6",
     storageBucket: "jv-website-42ff6.appspot.com",
     messagingSenderId: "915417051276",
     appId: "1:915417051276:web:ef203d8b7d73a0430a4ba9",
     measurementId: "G-DFB3DJ2HT5"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(config);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
/*
if (messaging) { console.log("THIS IS HERE"); } else { console.log("this triggered"); }
*/
messaging.onBackgroundMessage(function (payload) {
     //console.log("Received background message ", payload);

     const notificationTitle = payload.notification.title;
     const notificationOptions = {
          body: payload.notification.body,
          icon: "android-chrome-192x192.png",
     };

     // eslint-disable-next-line no-restricted-globals
     return self.registration.showNotification(
          notificationTitle,
          notificationOptions
     );
});