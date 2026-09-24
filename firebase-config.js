// Isi dengan konfigurasi Firebase Web App Anda.
// Firebase Console → Project settings → Your apps → Web app.
//
// Konfigurasi ini bukan password/private key. Jangan masukkan service account key.

const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "ISI_PROJECT.firebaseapp.com",
  databaseURL: "https://ISI_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ISI_PROJECT",
  storageBucket: "ISI_PROJECT.firebasestorage.app",
  messagingSenderId: "ISI_SENDER_ID",
  appId: "ISI_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
