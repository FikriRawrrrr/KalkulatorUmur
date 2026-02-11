// server.js - File utama untuk server Node.js

// 1. Import module yang dibutuhkan
const express = require('express');
const path = require('path');

// 2. Buat aplikasi Express
const app = express();
const PORT = 3000;

// 3. Middleware untuk parsing data dari form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4. Serve file HTML dari folder 'public'
app.use(express.static('public'));

// 5. Route utama - kirim file HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 6. Route untuk hitung umur (API endpoint)
app.post('/calculate-age', (req, res) => {
    try {
        const birthDate = new Date(req.body.birthdate);
        const today = new Date();
        
        // Hitung selisih tahun
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        
        // Adjust jika hari negatif
        if (days < 0) {
            months--;
            // Hitung hari di bulan sebelumnya
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }
        
        // Adjust jika bulan negatif
        if (months < 0) {
            years--;
            months += 12;
        }
        
        // Hitung total hari hidup
        const diffTime = Math.abs(today - birthDate);
        const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        // Hitung total jam, menit, detik
        const totalHours = totalDays * 24;
        const totalMinutes = totalHours * 60;
        const totalSeconds = totalMinutes * 60;
        
        // Kirim hasil
        res.json({
            success: true,
            age: {
                years: years,
                months: months,
                days: days
            },
            total: {
                days: totalDays,
                hours: totalHours,
                minutes: totalMinutes,
                seconds: totalSeconds
            },
            birthDate: birthDate.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Tanggal lahir tidak valid!'
        });
    }
});

// 7. Jalankan server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`📱 Buka browser dan akses URL di atas!`);
});
