# 🎂 Kalkulator Umur - Node.js

Aplikasi web sederhana untuk menghitung umur dengan Node.js dan Express!

## ✨ Fitur

- ✅ Hitung umur dalam tahun, bulan, dan hari
- ✅ Tampilkan total hari hidup
- ✅ Hitung total jam, menit, dan detik
- ✅ Design responsive & menarik
- ✅ Animasi smooth

## 📋 Prasyarat

Pastikan kamu sudah install:
- **Node.js** (versi 14 atau lebih baru)
- **npm** (biasanya sudah termasuk dengan Node.js)

Download Node.js di: https://nodejs.org

## 🚀 Cara Menggunakan

### 1. Download/Clone Project

Download semua file atau clone repository ini.

### 2. Install Dependencies

Buka terminal/command prompt di folder project, lalu jalankan:

```bash
npm install
```

Ini akan menginstall Express.js yang dibutuhkan.

### 3. Jalankan Server

```bash
npm start
```

Atau kalau mau auto-reload saat edit kode (pakai nodemon):

```bash
npm run dev
```

### 4. Buka di Browser

Setelah server jalan, buka browser dan akses:

```
http://localhost:3000
```

## 📁 Struktur Folder

```
age-calculator-nodejs/
├── server.js           # File server utama (backend)
├── package.json        # Dependencies & scripts
├── public/
│   └── index.html      # File HTML (frontend)
└── README.md           # Dokumentasi ini
```

## 💡 Cara Kerja

1. **server.js** - Ini adalah backend yang:
   - Membuat server dengan Express
   - Menerima tanggal lahir dari user
   - Menghitung umur
   - Mengirim hasil ke frontend

2. **index.html** - Ini adalah frontend yang:
   - Menampilkan form input tanggal
   - Kirim data ke server
   - Tampilkan hasil dengan desain menarik

## 🎓 Konsep yang Dipelajari

- ✅ Membuat server dengan Express.js
- ✅ Routing (GET & POST)
- ✅ Serve static files (HTML/CSS/JS)
- ✅ Handle form data
- ✅ Manipulasi tanggal di JavaScript
- ✅ Kirim data JSON dari server ke client
- ✅ Fetch API di frontend
- ✅ Async/Await

## 🔧 Kustomisasi

Kamu bisa ubah:
- **Port server**: Edit `const PORT = 3000` di `server.js`
- **Design**: Edit CSS di `public/index.html`
- **Fitur tambahan**: Tambah logic di `server.js`

## 🐛 Troubleshooting

**Server tidak jalan?**
- Pastikan Node.js sudah terinstall: `node --version`
- Pastikan sudah `npm install`
- Cek apakah port 3000 sudah dipakai aplikasi lain

**Error di browser?**
- Buka Console (F12) untuk lihat error
- Pastikan server sedang berjalan
- Refresh halaman

## 📚 Next Steps

Setelah berhasil, coba tambahkan fitur:
- ⭐ Simpan history perhitungan di file/database
- ⭐ Tambah fitur hitung countdown ke ulang tahun berikutnya
- ⭐ Export hasil ke PDF
- ⭐ Multiple language support
- ⭐ Dark mode toggle

## 🎉 Selamat Belajar!

Happy coding! 🚀
