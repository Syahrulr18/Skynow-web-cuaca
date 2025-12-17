# Skynow 🌤️

**Skynow** adalah aplikasi web cuaca modern yang interaktif, edukatif, dan indah. Bukan sekadar menampilkan suhu, Skynow memberikan pengalaman visual yang memukau dengan latar belakang video dinamis yang berubah sesuai kondisi cuaca, serta fitur peta interaktif dan kamus cuaca lengkap.

![Skynow Banner](https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000)

## ✨ Fitur Utama

### 1. 🏠 **Dashboard Cuaca Dinamis**
- **Video Background**: Latar belakang aplikasi berubah secara otomatis (waktu nyata) menyesuaikan kondisi cuaca di lokasi yang Anda cari (Cerah, Hujan, Badai, Salju, dll).
- **Transisi Mulus**: Menggunakan teknologi *dual-video player* untuk perpindahan video yang halus tanpa *black screen*.
- **Informasi Lengkap**: Suhu, kelembaban, UV index, kualitas udara, kecepatan angin, jarak pandang, dan waktu update.
- **Rekomendasi Kota**: Menampilkan kartu cuaca cepat untuk kota-kota besar di Indonesia.

### 2. 🗺️ **Peta Interaktif (Map Page)**
- Menampilkan peta dunia dengan marker cuaca di berbagai lokasi.
- **Detail Overlay**: Klik marker untuk melihat panel detail cuaca mengambang yang elegan.
- **Mobile Responsive**: Overlay didesain ramah seluler (*bottom sheet*) agar tidak menutupi seluruh peta.

### 3. 📚 **Kamus Cuaca & Geografis**
- **Database Istilah**: Kumpulan istilah meteorologi dan geografi lengkap.
- **Pencarian Cepat**: Cari istilah dengan fitur *autocomplete*.
- **Kategori**: Filter istilah berdasarkan kategori (Meteorologi, Hidrologi, Klimatologi, dll).
- **Halaman Detail**: Penjelasan mendalam untuk setiap istilah.

### 4. 🧩 **Kuis & Aktivitas**
- **Kuis Edukatif**: Uji pengetahuan Anda tentang cuaca.
- **Rekomendasi Aktivitas**: Saran kegiatan yang cocok dilakukan berdasarkan cuaca saat ini (misal: "Waktu yang tepat untuk fotografi indoor" saat hujan).

---

## 🛠️ Teknologi yang Digunakan

Project ini dibangun dengan *tech stack* modern untuk performa dan pengalaman pengguna terbaik:

- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Cepat & Ringan)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Desain responsif & kustomisasi mudah)
- **Icons**: [Lucide React](https://lucide.dev/) (Icon set modern & konsisten)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Environment**: `.env` (Keamanan API Key)

---

## 🚀 Cara Menjalankan Project (Lokal)

Ikuti langkah ini untuk menjalankan Skynow di komputer Anda:

### 1. Clone Repository
```bash
git clone https://github.com/username/web-skynow.git
cd web-skynow
```

### 2. Install Dependencies
Pastikan Node.js sudah terinstall, lalu jalankan:
```bash
npm install
```

### 3. Konfigurasi API Key
Aplikasi ini menggunakan **WeatherAPI.com**.
1. Dapatkan API Key gratis di [WeatherAPI.com](https://www.weatherapi.com/).
2. Buat file `.env` di root folder project.
3. Tambahkan key Anda:
   ```env
   VITE_WEATHER_API_KEY=masukkan_api_key_anda_disini
   ```

### 4. Jalankan Aplikasi
```bash
npm run dev
```
Buka browser dan akses `http://localhost:5173`.

---

## 🌐 Panduan Deployment (Netlify)

Karena API key disimpan di `.env`, Anda perlu melakukan konfigurasi khusus saat deploy agar tetap aman namun bisa dibaca oleh aplikasi.

1. **Push** kode ke GitHub (file `.env` **tidak** akan ter-upload karena sudah di-ignore).
2. Buka dashboard **Netlify** -> **Add New Site** -> **Import from Git**.
3. Pilih repository Skynow Anda.
4. Pada bagian **Environment variables**, tambahkan:
   - Key: `VITE_WEATHER_API_KEY`
   - Value: `API_KEY_ANDA`
5. Klik **Deploy Site**.

---

## 📱 Struktur Project

```
src/
├── assets/          # Logo, gambar, dan video background
├── component/       # Komponen reusable (Navbar, VideoBackground, dll)
├── context/         # React Context (CityContext untuk global state)
├── data/            # Data statis (Dictionary data, Quiz data)
├── pages/           # Halaman utama (Home, Map, Dictionary, Activities)
├── utils/           # Fungsi helper (API calls)
└── App.jsx          # Main entry & Routing
```

---


