# LCC Bell v2

Buzzer LCC berbasis GitHub Pages + Firebase Realtime Database.

## Alur
1. Laptop membuka `server.html`.
2. HP membuka `peserta.html`.
3. Peserta memilih nomor.
4. Juri menekan **SIAPKAN BELL**.
5. Semua tombol peserta aktif.
6. Peserta menekan tombol.
7. Firebase Transaction menentukan satu pemenang secara atomik.
8. Server menampilkan nomor pemenang hijau dan membunyikan bell.
9. Semua HP terkunci.
10. Juri menekan **RESET SOAL** untuk ronde berikutnya.

## Penting
GitHub Pages hanya menjadi tempat halaman web. Firebase menjadi penghubung realtime.

## Firebase
Buat Firebase project, aktifkan Realtime Database, buat Web App, lalu isi `firebase-config.js`.

Untuk prototipe lokal, aturan database dapat dibuat terbuka. Untuk pemakaian resmi, database rules sebaiknya diamankan.

## File
- `index.html` menu utama
- `server.html` panel juri
- `peserta.html` tombol peserta
- `style.css` tampilan
- `firebase-config.js` konfigurasi Firebase

## Catatan suara
Browser biasanya mengizinkan suara setelah ada interaksi pengguna. Pada server, tombol `SIAPKAN BELL` sekaligus digunakan untuk mengaktifkan konteks audio. Ketika pemenang masuk, laptop memainkan bell melalui Web Audio API.
