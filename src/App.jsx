// src/App.jsx
// --- KODE BARU UNTUK MENGGABUNGKAN KEDUANYA ---

import React from 'react';

// 1. Import background .webp Anda (pastikan namanya benar)
import rainBackground from './assets/AnimeRainRipplesLoop5-1080ph264-ezgif.com-video-to-webp-converter.webp';

// 2. Import komponen GlassSurface yang baru (pastikan path-nya benar)
import GlassSurface from './component/fluid-glass.jsx';

function App() {
  return (
    // 3. Container utama dengan background .webp
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${rainBackground})`
      }}
    >
      {/* 4. Container untuk konten (agar di tengah) */}
      <div className="flex flex-col items-center justify-center h-full text-white p-4">
        
        {/* 5. INI DIA! Kita panggil komponen GlassSurface di sini.
             Background .webp akan otomatis terlihat di belakangnya.
        */}
        <GlassSurface
          width={1400}          // Atur lebar
          height={1000}         // Atur tinggi
          borderRadius={24}    // Atur radius sudut
          className="p-6"      // Beri padding untuk konten di dalamnya
        >
          {/* Ini adalah konten yang ada DI DALAM 'kaca' */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold">Fluid Glass</h1>
            <p className="mt-4 text-sm opacity-90">
              Ini adalah komponen 'glass' di atas background animasi WebP.
            </p>
            <button className="mt-6 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Tombol Kaca
            </button>
          </div>
        </GlassSurface>

        {/* Anda bisa menambah komponen lain jika mau */}
        <p className="mt-8 text-sm opacity-70">Scroll ke bawah (jika ada konten)</p>

      </div>
    </div>
  );
}

export default App;