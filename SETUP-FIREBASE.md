# SETUP LCC BELL — FIREBASE

## 1. Buat project
Buka Firebase Console dan buat project baru.

## 2. Tambahkan Web App
Project settings → Your apps → ikon Web `</>` → Register app.

Salin object `firebaseConfig` yang diberikan Firebase.

## 3. Aktifkan Realtime Database
Build → Realtime Database → Create Database.
Pilih lokasi yang dekat, misalnya Singapore/Asia Southeast.

Untuk uji coba awal, gunakan Rules berikut:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

> Rules ini membuat database terbuka. Untuk pemakaian resmi, sebaiknya database diamankan dengan autentikasi/rules yang sesuai.

## 4. Isi firebase-config.js
Buka `firebase-config.js`, lalu ganti seluruh object `firebaseConfig` dengan konfigurasi Web App dari Firebase.

Contoh bentuknya:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "nama-project.firebaseapp.com",
  databaseURL: "https://nama-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nama-project",
  storageBucket: "nama-project.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};
```

## 5. Upload ke GitHub Pages
Upload semua file:
- index.html
- server.html
- peserta.html
- style.css
- firebase-config.js

## 6. Tes
- Laptop juri membuka `server.html`.
- HP peserta membuka `peserta.html`.
- Pilih nomor peserta.
- Juri klik **SIAPKAN BELL**.
- Semua HP harus berubah menjadi **BELL AKTIF**.
- Tekan salah satu tombol peserta.
- Semua perangkat harus melihat peserta pertama sebagai pemenang.

Jika belum konek, halaman sekarang menampilkan pesan error Firebase yang lebih jelas di bagian status.
