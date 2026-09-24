const firebaseConfig = {
  apiKey: "AIzaSyCO9Md77iT-VGfDNU3c1Nv_-X5xztRPYMc",
  authDomain: "lcc-bell-bruderan.firebaseapp.com",
  databaseURL: "https://lcc-bell-bruderan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lcc-bell-bruderan",
  storageBucket: "lcc-bell-bruderan.firebasestorage.app",
  messagingSenderId: "422541592078",
  appId: "1:422541592078:web:b6f4cc74723b306c8a1e5f"
};

firebase.initializeApp(firebaseConfig);
window.db = firebase.database();
