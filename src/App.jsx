import React from 'react';
import rainBackground from './assets/video.mp4'; // Path video sudah benar
import GlassSurface from './component/fluid-glass.jsx';

function App() {
  return (
    // 1. Ubah div utama ini menjadi 'relative' dan 'overflow-hidden'.
    //    Kita hapus style 'backgroundImage' dari sini.
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* 2. TAMBAHKAN TAG <video> DI SINI */}
      <video
        src={rainBackground}
        autoPlay  // Putar otomatis
        loop      // Ulangi (sesuai permintaan Anda)
        muted     // WAJIB: Browser modern tidak akan autoplay jika ada suara
        playsInline // Membantu pemutaran di browser mobile
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col items-center justify-center h-full text-white p-4">

        
        
        {/* 4. GlassSurface (TETAP SAMA) */}
        <GlassSurface
          width={1400}      
          height={1000}     
          borderRadius={24}   
          className="p-6"   
        >
          {/* Konten di dalam 'kaca' (TETAP SAMA) */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold">Fluid Glass</h1>
            <p className="mt-4 text-sm opacity-90">
              {/* Saya ubah sedikit teksnya agar sesuai */}
              Ini adalah komponen 'glass' di atas background video MP4.
            </p>
            <button className="mt-6 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
              Tombol Kaca
            </button>
          </div>
        </GlassSurface>

        <p className="mt-8 text-sm opacity-70">Scroll ke bawah (jika ada konten)</p>

      </div>
    </div>
  );
}

export default App;