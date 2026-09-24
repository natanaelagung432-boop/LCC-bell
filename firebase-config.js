const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "lcc-bell-bruderan.firebaseapp.com",
  databaseURL: "https://lcc-bell-bruderan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lcc-bell-bruderan",
  storageBucket: "lcc-bell-bruderan.firebasestorage.app",
  messagingSenderId: "422541592078",
  appId: "1:422541592078:web:b6f4cc74723b306c8a1e5f"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.database();
