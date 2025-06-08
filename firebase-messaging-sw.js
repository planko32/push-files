ِimportScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDfR0j5cOQpIkJASzeolGHaJ8O0dfPrGnM",
  authDomain: "test-54e93.firebaseapp.com",
  projectId: "test-54e93",
  messagingSenderId: "1048183924949",
  appId: "1:1048183924949:web:70cc3c2b51b11c32185a5c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(title, options);
});
