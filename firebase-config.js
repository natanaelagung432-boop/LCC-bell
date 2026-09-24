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
  apiKey: "TEMPEL_API_KEY_DI_SINI",
  authDomain: "TEMPEL_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://TEMPEL_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "TEMPEL_PROJECT_ID",
  storageBucket: "TEMPEL_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "TEMPEL_SENDER_ID",
  appId: "TEMPEL_APP_ID"
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
