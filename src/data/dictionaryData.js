// Dictionary data - comprehensive weather and geography terms
export const dictionaryData = [
    // Cuaca - Weather
    {
        id: 'hujan',
        term: 'Hujan',
        category: 'Cuaca',
        shortDesc: 'Presipitasi air dari atmosfer ke permukaan bumi',
        fullDesc: `Hujan adalah bentuk presipitasi berupa jatuhnya cairan (air) dari atmosfer ke permukaan Bumi. Hujan merupakan bagian penting dari siklus air (water cycle) di planet kita.

**Proses Terbentuknya Hujan:**
1. Evaporasi: Air dari laut, danau, dan sungai menguap karena panas matahari
2. Kondensasi: Uap air naik dan mendingin, membentuk awan
3. Presipitasi: Tetesan air menjadi terlalu berat dan jatuh sebagai hujan

**Jenis-jenis Hujan:**
- **Hujan Konvektif**: Terjadi karena pemanasan permukaan bumi
- **Hujan Orografis**: Terjadi karena naiknya udara ke pegunungan
- **Hujan Frontal**: Terjadi karena pertemuan massa udara berbeda suhu

**Manfaat Hujan:**
- Sumber air bersih untuk kehidupan
- Mengisi cadangan air tanah
- Menyuburkan tanah untuk pertanian
- Membersihkan udara dari polutan`,
        icon: 'CloudRain'
    },
    {
        id: 'awan',
        term: 'Awan',
        category: 'Cuaca',
        shortDesc: 'Kumpulan tetesan air atau kristal es yang melayang di atmosfer',
        fullDesc: `Awan adalah kumpulan tetesan air atau kristal es kecil yang melayang di atmosfer. Awan terbentuk dari penguapan dan kondensasi uap air di udara.

**Jenis-jenis Awan:**

**Berdasarkan Ketinggian:**
1. **Awan Tinggi** (> 6 km): Cirrus, Cirrostratus, Cirrocumulus
2. **Awan Menengah** (2-6 km): Altostratus, Altocumulus
3. **Awan Rendah** (< 2 km): Stratus, Stratocumulus, Nimbostratus
4. **Awan Vertikal**: Cumulus, Cumulonimbus

**Karakteristik Awan:**
- **Cumulus**: Berbentuk gumpalan kapas, cuaca cerah
- **Stratus**: Berlapis-lapis, abu-abu, menutupi langit
- **Cirrus**: Tipis seperti bulu burung, ketinggian tinggi
- **Cumulonimbus**: Awan badai, membawa hujan lebat dan petir

**Fakta Menarik:**
- Awan dapat menahan jutaan ton air
- Warna awan dipengaruhi oleh kandungan air dan cahaya matahari
- Awan berperan mengatur suhu bumi`,
        icon: 'Cloud'
    },
    {
        id: 'angin',
        term: 'Angin',
        category: 'Cuaca',
        shortDesc: 'Gerakan udara horizontal akibat perbedaan tekanan',
        fullDesc: `Angin adalah gerakan udara secara horizontal atau sejajar dengan permukaan bumi, yang terjadi akibat perbedaan tekanan udara di berbagai tempat.

**Penyebab Terjadinya Angin:**
- Perbedaan tekanan udara antara dua tempat
- Pemanasan tidak merata permukaan bumi
- Rotasi bumi (efek Coriolis)
- Perbedaan suhu daratan dan lautan

**Jenis-jenis Angin:**

**1. Angin Lokal:**
- **Angin Darat**: Bertiup dari darat ke laut (malam hari)
- **Angin Laut**: Bertiup dari laut ke darat (siang hari)
- **Angin Gunung**: Bertiup dari puncak ke lembah (malam)
- **Angin Lembah**: Bertiup dari lembah ke puncak (siang)

**2. Angin Global:**
- **Angin Pasat**: Bertiup tetap di khatulistiwa
- **Angin Barat**: Bertiup dari barat di lintang 40-60°
- **Angin Timur**: Bertiup di kutub

**Skala Kecepatan Angin (Beaufort):**
0: Tenang (< 1 km/jam)
1-3: Sepoi-sepoi (1-19 km/jam)
4-6: Sedang (20-49 km/jam)
7-9: Kencang (50-88 km/jam)
10-12: Badai (> 89 km/jam)`,
        icon: 'Wind'
    },
    {
        id: 'petir',
        term: 'Petir',
        category: 'Cuaca',
        shortDesc: 'Pelepasan listrik alami di atmosfer',
        fullDesc: `Petir adalah pelepasan listrik statis yang terjadi antara awan dengan awan atau antara awan dengan permukaan bumi. Fenomena ini disertai dengan kilatan cahaya terang dan suara gemuruh (guntur).

**Proses Terbentuknya Petir:**
1. Gesekan partikel air dan es dalam awan cumulonimbus
2. Terbentuk muatan positif di puncak awan dan negatif di dasar
3. Beda potensial sangat besar terbentuk
4. Pelepasan listrik terjadi sebagai petir

**Jenis-jenis Petir:**
- **Cloud-to-Ground**: Dari awan ke tanah (paling berbahaya)
- **Cloud-to-Cloud**: Antar awan
- **Intra-Cloud**: Dalam satu awan
- **Cloud-to-Air**: Dari awan ke udara

**Fakta Petir:**
- Suhu petir: 30.000°C (5x lebih panas dari matahari)
- Kecepatan: 200.000 km/jam
- Durasi: 0.0002 detik
- Tegangan: hingga 100 juta volt

**Keselamatan saat Petir:**
- Hindari tempat terbuka
- Jauhi pohon tinggi
- Matikan peralatan elektronik
- Jangan mandi atau berendam
- Berlindung di dalam bangunan atau kendaraan`,
        icon: 'CloudLightning'
    },
    {
        id: 'suhu',
        term: 'Suhu/Temperatur',
        category: 'Cuaca',
        shortDesc: 'Ukuran tingkat panas atau dingin udara',
        fullDesc: `Suhu atau temperatur adalah besaran yang menyatakan derajat panas atau dingin suatu benda atau lingkungan. Dalam meteorologi, suhu udara adalah salah satu parameter cuaca yang paling penting.

**Satuan Pengukuran Suhu:**
- **Celsius (°C)**: Digunakan secara internasional
- **Fahrenheit (°F)**: Umum di Amerika Serikat
- **Kelvin (K)**: Digunakan dalam sains

**Konversi Suhu:**
- °F = (°C × 9/5) + 32
- K = °C + 273.15

**Faktor yang Mempengaruhi Suhu:**
1. **Radiasi Matahari**: Sumber panas utama
2. **Ketinggian**: Makin tinggi, makin dingin (~6.5°C/km)
3. **Latitude**: Khatulistiwa lebih panas dari kutub
4. **Waktu**: Siang lebih panas dari malam
5. **Tutupan Awan**: Awan menghalangi radiasi

**Klasifikasi Iklim Berdasarkan Suhu:**
- **Tropis**: > 18°C sepanjang tahun
- **Sub-tropis**: 10-18°C
- **Sedang**: 0-10°C
- **Dingin**: -10-0°C
- **Kutub**: < -10°C

**Alat Ukur Suhu:**
- Termometer air raksa
- Termometer digital
- Termometer inframerah
- Sensor suhu elektronik`,
        icon: 'Thermometer'
    },
    {
        id: 'kelembaban',
        term: 'Kelembaban Udara',
        category: 'Cuaca',
        shortDesc: 'Kandungan uap air di atmosfer',
        fullDesc: `Kelembaban udara adalah ukuran kandungan uap air di atmosfer. Parameter ini sangat penting dalam meteorologi karena mempengaruhi kenyamanan, kesehatan, dan berbagai proses cuaca.

**Jenis Kelembaban:**

**1. Kelembaban Absolut:**
- Massa uap air per satuan volume udara
- Satuan: gram/m³

**2. Kelembaban Relatif (RH):**
- Perbandingan uap air aktual dengan maksimal
- Satuan: persen (%)
- Paling sering digunakan

**3. Kelembaban Spesifik:**
- Massa uap air per massa udara total
- Satuan: g/kg

**Faktor yang Mempengaruhi:**
- Suhu udara (berbanding terbalik)
- Evaporasi dari permukaan air
- Transpirasi tumbuhan
- Curah hujan
- Angin

**Dampak Kelembaban:**

**Kelembaban Tinggi (> 70%):**
- Udara terasa gerah dan lembab
- Keringat sulit menguap
- Pertumbuhan jamur meningkat
- Potensi hujan lebih besar

**Kelembaban Rendah (< 30%):**
- Udara terasa kering
- Kulit dan bibir mudah kering
- Debu mudah beterbangan
- Risiko kebakaran meningkat

**Kelembaban Ideal:**
40-60% untuk kenyamanan manusia

**Alat Ukur:**
- Higrometer
- Psychrometer
- Sensor kelembaban digital`,
        icon: 'Droplets'
    },

    // Geografis - Geography
    {
        id: 'atmosfer',
        term: 'Atmosfer',
        category: 'Geografis',
        shortDesc: 'Lapisan gas yang menyelimuti bumi',
        fullDesc: `Atmosfer adalah lapisan gas yang menyelimuti planet Bumi dan ditahan oleh gravitasi. Atmosfer melindungi kehidupan di bumi dari radiasi matahari dan meteor.

**Lapisan-lapisan Atmosfer:**

**1. Troposfer (0-12 km):**
- Lapisan paling rendah
- Tempat terjadinya cuaca
- Suhu menurun dengan ketinggian
- Mengandung 80% massa atmosfer

**2. Stratosfer (12-50 km):**
- Mengandung lapisan ozon
- Suhu meningkat dengan ketinggian
- Tempat terbang pesawat jet
- Melindungi dari UV

**3. Mesosfer (50-80 km):**
- Lapisan paling dingin (-90°C)
- Meteor terbakar di sini
- Suhu menurun dengan ketinggian

**4. Termosfer (80-700 km):**
- Suhu sangat tinggi (>1000°C)
- Tempat aurora terjadi
- Satelit berorbit di sini

**5. Eksosfer (>700 km):**
- Lapisan terluar
- Transisi ke luar angkasa
- Sangat jarang molekul gas

**Komposisi Atmosfer:**
- Nitrogen (N₂): 78%
- Oksigen (O₂): 21%
- Argon (Ar): 0.9%
- CO₂ dan gas lain: 0.1%

**Fungsi Atmosfer:**
- Menyediakan oksigen untuk bernapas
- Melindungi dari radiasi berbahaya
- Mengatur suhu bumi
- Tempat terjadinya cuaca
- Membakar meteor`,
        icon: 'Layers'
    },
    {
        id: 'iklim',
        term: 'Iklim',
        category: 'Geografis',
        shortDesc: 'Kondisi rata-rata cuaca dalam jangka panjang',
        fullDesc: `Iklim adalah kondisi rata-rata cuaca di suatu wilayah dalam jangka waktu yang panjang (minimal 30 tahun). Berbeda dengan cuaca yang berubah-ubah, iklim relatif stabil.

**Perbedaan Iklim dan Cuaca:**
- **Cuaca**: Kondisi atmosfer saat ini (hari/minggu)
- **Iklim**: Rata-rata cuaca jangka panjang (30+ tahun)

**Klasifikasi Iklim Köppen:**

**1. Iklim Tropis (A):**
- Suhu bulanan > 18°C
- Curah hujan tinggi
- Contoh: Indonesia, Brasil

**2. Iklim Kering (B):**
- Curah hujan rendah
- Evaporasi > presipitasi
- Contoh: Sahara, Arab

**3. Iklim Sedang (C):**
- Empat musim jelas
- Suhu: -3°C hingga 18°C
- Contoh: Eropa, Amerika Utara

**4. Iklim Dingin/Kontinental (D):**
- Musim dingin sangat dingin
- Suhu < -3°C
- Contoh: Russia, Kanada

**5. Iklim Kutub (E):**
- Suhu selalu < 10°C
- Salju permanen
- Contoh: Antartika, Greenland

**Faktor yang Mempengaruhi Iklim:**
- Latitude (garis lintang)
- Altitude (ketinggian)
- Jarak dari laut
- Arus laut
- Arah angin dominan
- Topografi

**Perubahan Iklim:**
- Pemanasan global
- Kenaikan permukaan laut
- Perubahan pola hujan
- Cuaca ekstrem meningkat`,
        icon: 'Globe'
    },
    {
        id: 'monsun',
        term: 'Monsun/Muson',
        category: 'Cuaca',
        shortDesc: 'Angin musiman yang berganti arah setiap 6 bulan',
        fullDesc: `Monsun atau muson adalah sistem angin yang besar dan berganti arah setiap 6 bulan sekali, membawa perubahan musim hujan dan kemarau di wilayah tropis dan sub-tropis.

**Jenis Monsun di Indonesia:**

**1. Monsun Barat Daya (April-Oktober):**
- Bertiup dari Australia ke Asia
- Membawa musim kemarau di Indonesia
- Udara kering dan sedikit hujan
- Langit cerah

**2. Monsun Timur Laut (Oktober-April):**
- Bertiup dari Asia ke Australia
- Membawa musim hujan di Indonesia
- Udara lembab dan banyak hujan
- Sering terjadi banjir

**Penyebab Monsun:**
1. Perbedaan pemanasan daratan dan lautan
2. Pergeseran posisi matahari
3. Perbedaan tekanan udara musiman
4. Efek Coriolis

**Dampak Monsun:**

**Positif:**
- Sumber air untuk pertanian
- Mengisi waduk dan sungai
- Menyuburkan tanah

**Negatif:**
- Banjir saat hujan berlebihan
- Kekeringan saat kemarau panjang
- Gangguan transportasi

**Wilayah Monsun:**
- Asia Selatan dan Tenggara
- Afrika Barat
- Australia Utara
- Amerika Tengah

**Prediksi Monsun:**
Sangat penting untuk:
- Perencanaan pertanian
- Manajemen air
- Mitigasi bencana
- Transportasi laut/udara`,
        icon: 'Navigation'
    },
    {
        id: 'siklon',
        term: 'Siklon Tropis',
        category: 'Cuaca',
        shortDesc: 'Badai berputar dengan kecepatan angin sangat tinggi',
        fullDesc: `Siklon tropis adalah sistem tekanan rendah yang berputar dengan kecepatan angin sangat tinggi, terbentuk di atas lautan tropis dengan suhu permukaan laut ≥ 26.5°C.

**Nama Regional Siklon:**
- **Hurikan**: Amerika Utara, Karibia
- **Taifun**: Asia Timur, Pasifik Barat
- **Siklon**: Samudra Hindia, Australia
- **Willy-willy**: Australia

**Struktur Siklon:**

**1. Mata Siklon (Eye):**
- Pusat siklon
- Tenang, tidak ada angin
- Diameter 20-50 km
- Tekanan terendah

**2. Dinding Mata (Eyewall):**
- Mengelilingi mata siklon
- Angin terkuat di sini
- Hujan paling lebat
- Awan cumulonimbus tinggi

**3. Pita Hujan (Rainbands):**
- Spiral mengelilingi pusat
- Hujan dan petir
- Angin kencang

**Klasifikasi Kekuatan (Skala Saffir-Simpson):**
- **Kategori 1**: 119-153 km/jam (Minor)
- **Kategori 2**: 154-177 km/jam (Moderate)
- **Kategori 3**: 178-208 km/jam (Major)
- **Kategori 4**: 209-251 km/jam (Severe)  
- **Kategori 5**: > 252 km/jam (Catastrophic)

**Proses Pembentukan:**
1. Air laut hangat menguap
2. Udara naik membentuk awan
3. Tekanan rendah terbentuk
4. Angin berputar karena efek Coriolis
5. Sistem menguat menjadi siklon

**Dampak Siklon:**
- Angin kencang merusak bangunan
- Gelombang laut tinggi (storm surge)
- Hujan lebat menyebabkan banjir
- Tanah longsor
- Listrik padam

**Mitigasi:**
- Sistem peringatan dini
- Evakuasi penduduk
- Hunian tahan badai
- Cadangan makanan dan air`,
        icon: 'Tornado'
    },
    {
        id: 'tsunami',
        term: 'Tsunami',
        category: 'Geografis',
        shortDesc: 'Gelombang laut besar akibat gempa bawah laut',
        fullDesc: `Tsunami adalah serangkaian gelombang laut dengan periode panjang yang disebabkan oleh perpindahan vertikal air laut dalam jumlah besar, umumnya akibat gempa bumi bawah laut.

**Penyebab Tsunami:**

**1. Gempa Bumi Bawah Laut (90%):**
- Magnitudo > 6.5 SR
- Kedalaman dangkal (< 70 km)
- Pergeseran vertikal dasar laut

**2. Letusan Gunung Api:**
- Ledakan besar di laut
- Longsor material vulkanik ke laut
- Contoh: Krakatau 1883

**3. Longsor Bawah Laut:**
- Material batuan jatuh ke laut
- Perpindahan air besar-besaran

**4. Meteor/Asteroid:**
- Sangat jarang
- Dampak sangat besar

**Karakteristik Tsunami:**

**Di Laut Dalam:**
- Kecepatan: 500-1000 km/jam
- Tinggi gelombang: < 1 meter
- Panjang gelombang: > 100 km
- Tidak terdeteksi kapal

**Di Pesisir:**
- Kecepatan melambat
- Tinggi membesar (> 30 m)
- Gelombang bertingkat
- Daya rusak sangat besar

**Tanda-tanda Tsunami:**
- Air laut surut tiba-tiba
- Gempa bumi terasa kuat
- Suara gemuruh dari laut
- Hewan laut berperilaku aneh

**Fase Tsunami:**
1. **Penarikan**: Air surut jauh
2. **Gelombang Pertama**: Paling deras
3. **Gelombang Susulan**: Bisa lebih besar
4. **Interval**: 5-90 menit antar gelombang

**Sistem Peringatan:**
- Sensor gempa real-time
- Buoy tekanan laut
- Sirene peringatan
- Jalur evakuasi
- Shelter/tempat tinggi

**Wilayah Rawan Tsunami:**
- Cincin Api Pasifik
- Indonesia
- Jepang
- Chili
- Samudra Hindia

**Keselamatan:**
- Jika terasa gempa kuat, segera ke tempat tinggi
- Jauhi pantai minimal 2 km atau ketinggian 30 m
- Jangan kembali hingga ada all-clear`,
        icon: 'Waves'
    },
    {
        id: 'evaporasi',
        term: 'Evaporasi',
        category: 'Cuaca',
        shortDesc: 'Proses penguapan air menjadi uap air',
        fullDesc: `Evaporasi adalah proses perubahan wujud air dari cair menjadi gas (uap air) yang terjadi di permukaan air. Proses ini merupakan tahap pertama dan penting dalam siklus hidrologi.

**Proses Evaporasi:**

Evaporasi terjadi ketika molekul air di permukaan mendapat energi cukup (dari matahari) untuk melepaskan diri dari cairan dan menjadi gas.

**Faktor yang Mempengaruhi:**
- **Suhu**: Makin tinggi suhu, makin cepat evaporasi
- **Kelembaban**: Udara kering mempercepat evaporasi
- **Angin**: Angin menghilangkan uap air, mempercepat proses
- **Luas Permukaan**: Permukaan luas = evaporasi lebih cepat
- **Tekanan Udara**: Tekanan rendah mempercepat evaporasi

**Sumber Evaporasi:**
- Lautan (90% evaporasi global)
- Danau dan sungai
- Tanah yang lembab
- Tumbuhan (transpirasi)

**Peran dalam Siklus Air:**
1. Air menguap dari permukaan
2. Uap naik ke atmosfer
3. Mendingin dan mengembun jadi awan
4. Turun kembali sebagai hujan

**Dampak Evaporasi:**

**Positif:**
- Mengatur suhu bumi
- Sumber uap air untuk hujan
- Membersihkan air (distilasi alami)

**Negatif:**
- Kekeringan saat evaporasi berlebihan
- Hilangnya cadangan air
- Salinitas air meningkat

**Pengukuran:**
Evaporasi diukur dengan:
- Panci evaporasi
- Evaporimeter
- Lysimeter`,
        icon: 'Droplets'
    },
    {
        id: 'kondensasi',
        term: 'Kondensasi',
        category: 'Cuaca',
        shortDesc: 'Proses perubahan uap air menjadi tetesan air',
        fullDesc: `Kondensasi adalah proses perubahan wujud uap air menjadi air cair. Proses ini terjadi ketika uap air di atmosfer mendingin hingga mencapai titik embun.

**Proses Kondensasi:**

Ketika uap air naik ke atmosfer yang lebih dingin, molekul-molekul uap air kehilangan energi dan berkumpul membentuk tetesan air kecil.

**Syarat Terjadinya:**
- Uap air harus ada
- Suhu turun hingga titik embun
- Partikel inti kondensasi tersedia
- Kelembaban relatif tinggi

**Inti Kondensasi:**
Partikel kecil yang menjadi tempat uap air mengembun:
- Debu atmosfer
- Garam laut
- Polutan
- Partikel asap

**Bentuk-bentuk Kondensasi:**

**1. Di Udara:**
- **Awan**: Kondensasi di ketinggian
- **Kabut**: Kondensasi dekat permukaan

**2. Di Permukaan:**
- **Embun**: Tetesan air di permukaan dingin
- **Frost**: Kristal es jika suhu di bawah 0°C

**Peran dalam Cuaca:**
- Pembentukan awan
- Penyebab hujan
- Kabut pagi
- Embun

**Contoh Sehari-hari:**
- Kaca jendela berembun
- Tetesan di botol dingin
- Uap di kamar mandi
- Awan napas di udara dingin

**Dalam Siklus Air:**
Kondensasi adalah tahap kedua setelah evaporasi, di mana uap air berubah kembali menjadi air yang akan turun sebagai hujan.`,
        icon: 'Cloud'
    },
    {
        id: 'presipitasi',
        term: 'Presipitasi',
        category: 'Cuaca',
        shortDesc: 'Jatuhnya air dari atmosfer ke bumi',
        fullDesc: `Presipitasi adalah istilah umum untuk semua bentuk air yang jatuh dari atmosfer ke permukaan bumi. Presipitasi merupakan tahap akhir dari siklus hidrologi.

**Jenis-jenis Presipitasi:**

**1. Hujan:**
- Tetesan air cair
- Diameter \u003e 0.5 mm
- Paling umum di daerah tropis

**2. Gerimis:**
- Tetesan sangat kecil
- Diameter \u003c 0.5 mm
- Intensitas rendah

**3. Salju:**
- Kristal es
- Terbentuk pada suhu \u003c 0°C
- Umum di daerah dingin

**4. Hujan Es (Hail):**
- Bongkahan es bulat
- Diameter 5-50 mm
- Dari awan cumulonimbus

**5. Sleet:**
- Campuran hujan dan salju
- Tetesan air yang membeku
- Terjadi saat transisi suhu

**Proses Pembentukan:**
1. Evaporasi air dari permukaan
2. Kondensasi membentuk awan
3. Tetesan bergabung jadi lebih besar
4. Jatuh sebagai presipitasi

**Faktor yang Mempengaruhi:**
- Suhu udara
- Kelembaban
- Tekanan udara
- Topografi
- Angin

**Jenis Berdasarkan Proses:**

**Presipitasi Konvektif:**
- Akibat pemanasan permukaan
- Intensitas tinggi
- Durasi pendek

**Presipitasi Orografis:**
- Akibat pegunungan
- Sisi angin mendapat hujan lebat
- Sisi belakang kering

**Presipitasi Frontal:**
- Pertemuan massa udara
- Durasi panjang
- Intensitas sedang

**Pengukuran:**
- Penakar hujan (rain gauge)
- Radar cuaca
- Satelit cuaca

**Distribusi Global:**
Presipitasi tidak merata:
- Khatulistiwa: tinggi (>2000 mm/tahun)
- Gurun: rendah (\u003c200 mm/tahun)
- Kutub: rendah (salju)`,
        icon: 'CloudRain'
    },
    {
        id: 'pelangi',
        term: 'Pelangi',
        category: 'Cuaca',
        shortDesc: 'Busur cahaya berwarna-warni di langit',
        fullDesc: `Pelangi adalah fenomena optik berupa busur spektrum cahaya yang muncul di langit akibat pembiasan, pemantulan, dan dispersi cahaya matahari oleh tetesan air hujan.

**Proses Terbentuknya Pelangi:**

**1. Pembiasan Pertama:**
Cahaya matahari masuk ke tetesan air dan dibiaskan (berbelok)

**2. Pemantulan:**
Cahaya dipantulkan di bagian dalam tetesan

**3. Pembiasan Kedua:**
Cahaya keluar dari tetesan dan dibiaskan lagi

**4. Dispersi:**
Cahaya putih terurai menjadi spektrum warna

**Warna Pelangi:**
Urutan dari luar ke dalam (Me-Ji-Ku-Hi-Bi-Ni-U):
- Merah
- Jingga (Orange)
- Kuning
- Hijau
- Biru
- Nila (Indigo)
- Ungu

**Syarat Munculnya Pelangi:**
- Matahari harus bersinar
- Harus ada tetesan air (hujan/kabut)
- Matahari di belakang pengamat
- Sudut 42° antara matahari-tetesan-mata

**Jenis-jenis Pelangi:**

**1. Pelangi Primer:**
- Paling terang dan umum
- Merah di luar, ungu di dalam
- Sudut 42°

**2. Pelangi Sekunder:**
- Lebih redup
- Urutan warna terbalik
- Sudut 51°
- Muncul di luar pelangi primer

**3. Pelangi Ganda:**
- Primer dan sekunder bersamaan
- Area gelap di antara keduanya

**4. Pelangi Bulan (Moonbow):**
- Sangat jarang
- Cahaya bulan purnama
- Tampak putih (mata tidak sensitif warna di malam hari)

**Fakta Menarik:**
- Pelangi sebenarnya bundar penuh (lingkaran)
- Dari pesawat bisa lihat pelangi bulat
- Tidak ada ujung pelangi
- Setiap orang melihat pelangi berbeda
- Tidak ada dua orang lihat pelangi sama

**Pelangi dalam Budaya:**
- Simbol harapan
- Jembatan ke surga (mitologi)
- Harta karun di ujung pelangi (legenda)`,
        icon: 'Sun'
    },
    {
        id: 'embun',
        term: 'Embun',
        category: 'Cuaca',
        shortDesc: 'Tetesan air yang terbentuk di permukaan pada malam hari',
        fullDesc: `Embun adalah tetesan air kecil yang terbentuk pada permukaan benda seperti daun, rumput, atau kaca pada malam atau pagi hari akibat kondensasi uap air.

**Proses Terbentuknya Embun:**

**1. Malam Hari:**
Permukaan bumi melepas panas (radiasi)

**2. Pendinginan:**
Benda-benda di permukaan menjadi dingin

**3. Kondensasi:**
Uap air di udara menyentuh permukaan dingin dan mengembun

**4. Tetesan Embun:**
Terbentuk tetesan air kecil

**Syarat Terbentuknya Embun:**
- Langit cerah (tidak berawan)
- Angin tenang
- Kelembaban udah tinggi
- Malam yang panjang
- Permukaan yang baik meradiasi panas

**Titik Embun (Dew Point):**
Adalah suhu dimana uap air mulai mengembun. Jika suhu udara turun ke titik embun, embun akan terbentuk.

**Jenis-jenis Embun:**

**1. Embun Biasa:**
- Tetesan air pada suhu \u003e 0°C
- Paling umum

**2. Embun Beku (Frost):**
- Kristal es pada suhu \u003c 0°C
- Sublimasi langsung uap → es
- Tampak seperti salju tipis

**3. Embun Upas:**
- Embun beracun (mitologi)
- Sebenarnya tidak ada
- Legenda Jawa

**Tempat Embun Terbentuk:**
- Daun-daun
- Rumput
- Kaca jendela
- Atap kendaraan
- Logam
- Jaring laba-laba

**Manfaat Embun:**
- Sumber air untuk tumbuhan kecil
- Membantu tumbuhan di daerah kering
- Indikator kelembaban udara
- Menyegarkan udara pagi

**Kapan Embun Terbentuk:**
- Malam cerah
- Dini hari (jam 3-5 pagi)
- Musim kemarau
- Daerah dengan kelembaban tinggi

**Perbedaan Embun dan Hujan:**
- Embun: Kondensasi di permukaan
- Hujan: Presipitasi dari awan

**Fakta Menarik:**
- Rumput basah pagi = embun, bukan hujan malam
- Di gurun, embun jadi sumber air penting
- Teknologi water harvesting gunakan prinsip embun`,
        icon: 'Droplets'
    },
    {
        id: 'kabut',
        term: 'Kabut',
        category: 'Cuaca',
        shortDesc: 'Awan yang menyentuh permukaan bumi',
        fullDesc: `Kabut adalah awan yang terbentuk di dekat atau menyentuh permukaan bumi. Kabut terdiri dari tetesan air kecil yang melayang di udara dan mengurangi jarak pandang.

**Perbedaan Kabut dan Awan:**
- **Kabut**: Awan yang menyentuh permukaan tanah
- **Awan**: Terbentuk di ketinggian
- Komposisi sama: tetesan air/kristal es kecil

**Jenis-jenis Kabut:**

**1. Kabut Radiasi:**
- Terbentuk malam hari
- Langit cerah, angin tenang
- Pendinginan permukaan tanah
- Umum di lembah dan dataran rendah

**2. Kabut Adveksi:**
- Udara hangat bergerak ke permukaan dingin
- Umum di pesisir
- Bisa berlangsung berhari-hari

**3. Kabut Uap (Steam Fog):**
- Air dingin bertemu udara hangat
- Umum di danau/sungai dingin
- Tampak seperti "uap"

**4. Kabut Bukit (Upslope Fog):**
- Udara naik ke lereng gunung
- Mendingin dan mengembun
- Umum di daerah berbukit

**5. Kabut Lembah:**
- Terbentuk di lembah
- Udara dingin turun dan terjebak
- Sering pagi hari

**Syarat Terbentuknya:**
- Kelembaban relatif tinggi (>90%)
- Suhu turun ke titik embun
- Inti kondensasi tersedia
- Angin tenang atau lemah

**Klasifikasi Jarak Pandang:**

**Kabut Tebal:**
- Jarak pandang \u003c 200 meter
- Berbahaya untuk transportasi

**Kabut Sedang:**
- Jarak pandang 200-500 meter
- Hati-hati berkendara

**Kabut Tipis:**
- Jarak pandang 500-1000 meter
- Masih bisa berkendara pelan

**Dampak Kabut:**

**Negatif:**
- Mengganggu transportasi (darat/udara/laut)
- Kecelakaan meningkat
- Penerbangan ditunda
- Aktivitas terganggu

**Positif:**
- Sumber air untuk tumbuhan
- Menyejukkan udara
- Pemandangan indah

**Waktu Terjadinya:**
- Pagi hari (paling umum)
- Malam hari
- Saat peralihan musim
- Daerah lembab

**Lokasi Sering Berkabut:**
- Pegunungan tinggi
- Pesisir pantai
- Lembah-lembah
- Dekat badan air

**Keselamatan:**
- Nyalakan lampu kabut
- Kurangi kecepatan
- Jaga jarak aman
- Gunakan marka jalan
- Hindari overtaking`,
        icon: 'Cloud'
    },
    {
        id: 'topografi',
        term: 'Topografi',
        category: 'Geografis',
        shortDesc: 'Bentuk permukaan bumi dan relief',
        fullDesc: `Topografi adalah ilmu yang mempelajari bentuk dan relief permukaan bumi, termasuk ketinggian, lereng, dan fitur-fitur geografis lainnya.

**Unsur-unsur Topografi:**

**1. Ketinggian (Elevasi):**
- Jarak vertikal dari permukaan laut
- Diukur dalam meter di atas permukaan laut (mdpl)

**2. Kemiringan (Slope):**
- Sudut kemiringan lereng
- Diukur dalam derajat atau persen

**3. Relief:**
- Perbedaan ketinggian tertinggi dan terendah
- Menentukan karakter medan

**Bentuk-bentuk Topografi:**

**1. Dataran (Plain):**
- Permukaan datar/landai
- Ketinggian relatif sama
- Cocok untuk pertanian

**2. Perbukitan (Hill):**
- Ketinggian 200-600 mdpl
- Lereng landai-sedang
- Vegetasi beragam

**3. Pegunungan (Mountain):**
- Ketinggian \u003e 600 mdpl
- Lereng curam
- Iklim sejuk-dingin

**4. Lembah (Valley):**
- Cekungan antara pegunungan
- Biasanya ada sungai
- Tanah subur

**5. Dataran Tinggi (Plateau):**
- Permukaan datar di ketinggian
- Dikelilingi lereng curam
- Iklim sejuk

**Pengaruh Topografi terhadap Cuaca:**

**Hujan Orografis:**
- Udara naik ke pegunungan
- Mendingin dan mengembun
- Hujan di sisi angin (windward)
- Kering di sisi belakang (leeward)

**Angin Lokal:**
- Angin lembah-gunung
- Angin fohn
- Angin katabatik

**Suhu:**
- Makin tinggi, makin dingin
- Penurunan ~6.5°C per 1000 m
- Iklim mikro berbeda

**Kelembaban:**
- Pegunungan lebih lembab
- Lembah bisa kering (rain shadow)

**Pemetaan Topografi:**

**Peta Kontur:**
- Garis menghubungkan ketinggian sama
- Rapat = curam
- Renggang = landai

**Alat Ukur:**
- Teodolit
- GPS
- Total Station  
- LiDAR
- Satelit

**Aplikasi Topografi:**
- Perencanaan pembangunan
- Pertanian (sistem irigasi)
- Penanggulangan bencana
- Navigasi
- Militer

**Pengaruh pada Aktivitas Manusia:**
- Pemukiman (dataran rendah)
- Pertanian (lembah subur)
- Wisata (pegunungan)
- Transportasi (jalur datar)

**Bencana terkait Topografi:**
- Longsor (lereng curam)
- Banjir (dataran rendah)
- Kekeringan (rain shadow)
- Gempa (patahan)`,
        icon: 'Layers'
    },
    {
        id: 'tekanan-udara',
        term: 'Tekanan Udara',
        category: 'Cuaca',
        shortDesc: 'Gaya yang diberikan udara per satuan luas',
        fullDesc: `Tekanan udara adalah gaya yang diberikan oleh berat udara per satuan luas permukaan. Tekanan udara sangat mempengaruhi cuaca dan iklim.

**Pengertian:**
Tekanan udara adalah berat kolom udara dari permukaan hingga batas atmosfer. Di permukaan laut, udara menekan dengan gaya sekitar 1 kg per cm².

**Satuan Pengukuran:**
- **Millibar (mb)**: 1000 mb = tekanan standar
- **Hectopascal (hPa)**: 1 hPa = 1 mb
- **mmHg**: 760 mmHg = tekanan standar
- **atm**: 1 atm = tekanan standar
- **PSI**: pounds per square inch

**Tekanan Udara Standar:**
1013.25 mb atau hPa di permukaan laut pada 15°C

**Faktor yang Mempengaruhi:**

**1. Ketinggian:**
- Makin tinggi, makin rendah tekanan
- Berkurang ~1 mb per 8 meter
- Di puncak Everest: ~300 mb

**2. Suhu:**
- Udara panas = tekanan rendah
- Udara dingin = tekanan tinggi
- Hubungan terbalik

**3. Kelembaban:**
- Udara lembab = lebih ringan
- Tekanan lebih rendah

**Sistem Tekanan:**

**Tekanan Tinggi (Anticyclone):**
- \u003e 1013 mb
- Udara turun (subsidence)
- Cuaca cerah
- Angin keluar berputar (CW di NH)

**Tekanan Rendah (Cyclone):**
- \u003c 1013 mb
- Udara naik (convergence)
- Cuaca berawan/hujan
- Angin masuk berputar (CCW di NH)

**Pengaruh pada Cuaca:**

**Tekanan Tinggi:**
- Langit cerah
- Cuaca stabil
- Angin lemah
- Suhu ekstrem (panas/dingin)

**Tekanan Rendah:**
- Awan terbentuk
- Hujan/badai
- Angin kencang
- Suhu moderat

**Gradien Tekanan:**
Perbedaan tekanan antara dua tempat:
- Gradien besar = angin kencang
- Gradien kecil = angin lemah

**Alat Ukur:**

**Barometer:**
- **Barometer Air Raksa**: Tradisional, akurat
- **Barometer Aneroid**: Tanpa cairan, portabel
- **Barometer Digital**: Modern, otomatis

**Perubahan Tekanan:**

**Tekanan Naik:**
- Cuaca membaik
- Langit cerah
- Suhu turun

**Tekanan Turun:**
- Cuaca memburuk
- Hujan mendekat
- Badai mungkin terjadi

**Aplikasi:**

**Prediksi Cuaca:**
- Monitoring perubahan tekanan
- Peta isobar (garis tekanan sama)
- Identifikasi sistem cuaca

**Penerbangan:**
- Altimeter menggunakan tekanan
- Turbulence area tekanan rendah

**Kesehatan:**
- Tekanan rendah: sakit kepala
- Perubahan cepat: ketidaknyamanan
- Di gunung: altitude sickness

**Fakta Menarik:**
- Kita "menahan" ~1 ton udara di tubuh
- Tidak merasa karena tekanan internal sama
- Ikan laut dalam mati jika naik (tekanan turun drastis)`,
        icon: 'Gauge'
    },
    {
        id: 'badai',
        term: 'Badai',
        category: 'Cuaca',
        shortDesc: 'Gangguan atmosfer dengan angin kencang dan hujan lebat',
        fullDesc: `Badai adalah gangguan cuaca yang ditandai dengan angin kencang, hujan lebat, petir, dan kondisi cuaca ekstrem lainnya. Badai dapat menyebabkan kerusakan signifikan.

**Jenis-jenis Badai:**

**1. Badai Petir (Thunderstorm):**
- Awan cumulonimbus
- Petir dan guntur
- Hujan lebat
- Angin kencang mendadak

**2. Badai Tropis:**
- Terbentuk di laut tropis
- Sistem tekanan rendah
- Angin berputar
- Berkembang jadi siklon/taifun/hurikan

**3. Badai Salju (Blizzard):**
- Salju lebat
- Angin sangat kencang
- Jarak pandang sangat rendah
- Suhu sangat dingin

**4. Badai Pasir/Debu:**
- Angin kencang di gurun
- Membawa pasir/debu
- Jarak pandang nol
- Berbahaya untuk pernapasan

**5. Badai Es:**
- Hujan es besar
- Merusak tanaman
- Pecahkan kaca
- Dari awan cumulonimbus kuat

**Pembentukan Badai Petir:**

**1. Tahap Cumulus (Membangun):**
- Udara panas naik
- Awan cumulus tumbuh
- Durasi: 10-15 menit

**2. Tahap Mature (Dewasa):**
- Awan mencapai puncak
- Hujan mulai
- Petir aktif
- Angin kencang
- Durasi: 10-20 menit

**3. Tahap Dissipating (Melemah):**
- Pasokan udara hangat habis
- Hujan berkurang
- Badai melemah

**Struktur Badai:**

**Updraft:**
- Aliran udara naik
- Membawa kelembaban
- Membangun awan

**Downdraft:**
- Aliran udara turun
- Membawa hujan
- Angin kencang di permukaan

**Anvil (Landasan):**
- Puncak awan menyebar
- Bentuk seperti landasan
- Menandai badai kuat

**Bahaya dari Badai:**

**Angin Kencang:**
- Merobohkan pohon
- Merusak bangunan
- Terbangkan benda

**Petir:**
- Sambaran mematikan
- Kebakaran
- Kerusakan elektronik

**Hujan Lebat:**
- Banjir bandang
- Longsor
- Erosi

**Hujan Es:**
- Merusak tanaman
- Pecahkan kaca
- Denting kendaraan

**Tornado:**
- Pusaran angin sangat kencang
- Daya rusak besar

**Klasifikasi Kekuatan:**

**Badai Lemah:**
- Angin 40-60 km/jam
- Hujan sedang
- Petir jarang

**Badai Sedang:**
- Angin 60-90 km/jam
- Hujan lebat
- Petir sering

**Badai Kuat (Severe):**
- Angin \u003e 90 km/jam
- Hujan sangat lebat
- Petir intensif
- Hujan es besar
- Tornado mungkin

**Tanda-tanda Badai Datang:**
- Awan gelap mendekat
- Angin tiba-tiba kencang
- Suhu drop mendadak
- Tekanan udara turun
- Hewan gelisah

**Keselamatan:**

**Sebelum:**
- Monitor peringatan cuaca
- Siapkan perlengkapan darurat
- Amankan benda lepas
- Tutup jendela

**Saat Badai:**
- Masuk ke dalam bangunan
- Jauhi jendela
- Hindari pohon tinggi
- Matikan elektronik
- Jangan mandi

**Setelah:**
- Periksa kerusakan
- Hindari kabel putus
- Hati-hati pohon tumbang
- Laporkan kerusakan

**Prediksi Badai:**
- Radar cuaca
- Satelit meteorologi
- Model komputer
- Pengamatan lapangan
- Peringatan dini`,
        icon: 'CloudLightning'
    }
];

export default dictionaryData;
