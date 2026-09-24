// ============================================================
// KONFIGURASI FIREBASE LCC BELL
// ============================================================
// 1. Buka Firebase Console: https://console.firebase.google.com/
// 2. Buat project -> tambahkan Web App (</>)
// 3. Project settings -> Your apps -> Config
// 4. Salin konfigurasi firebaseConfig dari Firebase ke bawah.
// 5. Aktifkan Realtime Database.
//
// JANGAN masukkan service-account private key di file ini.
// apiKey Firebase Web boleh berada di kode client.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "lcc-bell-bruderan.firebaseapp.com",
  databaseURL: "https://lcc-bell-bruderan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lcc-bell-bruderan",
  storageBucket: "lcc-bell-bruderan.firebasestorage.app",
  messagingSenderId: "422541592078",
  appId: "1:422541592078:web:b6f4cc74723b306c8a1e5f"
};

function firebaseConfigReady() {
  return firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("TEMPEL_") &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.includes("TEMPEL_") &&
    firebaseConfig.appId &&
    !firebaseConfig.appId.includes("TEMPEL_");
}

if (!firebaseConfigReady()) {
  console.warn("LCC Bell: konfigurasi Firebase belum diisi.");
} else {
  firebase.initializeApp(firebaseConfig);
  window.db = firebase.database();
}
