import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../utils/api';
import { useCityContext } from '../context/CityContext';
import { 
  Sun, Cloud, CloudRain, CloudSnow, CloudLightning, 
  Bike, BookOpen, Palette, TreePine, Gamepad2, 
  Music, Camera, Utensils, Sparkles, Home,
  Users, Baby, Gift, AlertCircle, ThermometerSun,
  Droplets, Wind, Smile, SmilePlus, Meh, Frown, CheckCircle2
} from 'lucide-react';

// Activity data based on weather conditions
const getActivitiesForWeather = (conditionCode, temp) => {
  // Sunny conditions (1000)
  if (conditionCode === 1000) {
    return {
      condition: 'Cerah',
      description: 'Cuaca cerah sempurna untuk bermain di luar!',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
      activities: [
        {
          name: 'Bermain di Taman',
          icon: TreePine,
          rating: 'excellent',
          description: 'Main ayunan, perosotan, dan berlari-larian',
          safety: 'Jangan lupa pakai topi dan sunscreen!',
          time: 'Pagi (7-9 AM) atau Sore (4-6 PM)'
        },
        {
          name: 'Bersepeda',
          icon: Bike,
          rating: 'excellent',
          description: 'Keliling komplek atau taman dengan sepeda',
          safety: 'Pakai helm dan pelindung lutut',
          time: 'Sore hari lebih sejuk'
        },
        {
          name: 'Main Bola',
          icon: Users,
          rating: 'excellent',
          description: 'Sepak bola, basket, atau badminton',
          safety: 'Minum air yang banyak',
          time: 'Sore hari (4-6 PM)'
        },
        {
          name: 'Foto-foto Alam',
          icon: Camera,
          rating: 'good',
          description: 'Belajar fotografi alam dan tanaman',
          safety: 'Pakai topi untuk melindungi dari sinar matahari',
          time: 'Pagi atau sore untuk cahaya terbaik'
        }
      ]
    };
  }
  
  // Partly cloudy (1003)
  if (conditionCode === 1003) {
    return {
      condition: 'Berawan Sebagian',
      description: 'Cuaca nyaman untuk aktivitas outdoor',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      activities: [
        {
          name: 'Piknik di Taman',
          icon: Utensils,
          rating: 'excellent',
          description: 'Makan bekal sambil menikmati alam',
          safety: 'Bawa payung jaga-jaga',
          time: 'Kapan saja'
        },
        {
          name: 'Main Layang-layang',
          icon: Wind,
          rating: 'excellent',
          description: 'Terbangkan layang-layang di lapangan',
          safety: 'Hindari area dengan kabel listrik',
          time: 'Siang atau sore hari'
        },
        {
          name: 'Eksplorasi Alam',
          icon: TreePine,
          rating: 'good',
          description: 'Jalan-jalan sambil belajar tentang tumbuhan',
          safety: 'Jangan memetik tanaman sembarangan',
          time: 'Pagi atau sore'
        },
        {
          name: 'Menggambar Outdoor',
          icon: Palette,
          rating: 'good',
          description: 'Melukis pemandangan di luar ruangan',
          safety: 'Duduk di tempat yang teduh',
          time: 'Pagi hari (7-10 AM)'
        }
      ]
    };
  }
  
  // Cloudy/Overcast (1006, 1009)
  if ([1006, 1009].includes(conditionCode)) {
    return {
      condition: 'Berawan',
      description: 'Cuaca mendung, bisa outdoor atau indoor',
      color: 'from-gray-400 to-slate-500',
      bgColor: 'from-gray-500/20 to-slate-500/20',
      activities: [
        {
          name: 'Main di Taman',
          icon: TreePine,
          rating: 'good',
          description: 'Bermain ringan di taman dekat rumah',
          safety: 'Bawa payung dan jaket',
          time: 'Sore hari'
        },
        {
          name: 'Membaca Buku',
          icon: BookOpen,
          rating: 'excellent',
          description: 'Baca buku cerita favorit di rumah',
          safety: 'Pastikan pencahayaan cukup',
          time: 'Kapan saja'
        },
        {
          name: 'Menggambar & Mewarnai',
          icon: Palette,
          rating: 'excellent',
          description: 'Berkreasi dengan krayon dan cat air',
          safety: 'Gunakan alas agar tidak kotor',
          time: 'Kapan saja'
        },
        {
          name: 'Main Board Games',
          icon: Gamepad2,
          rating: 'excellent',
          description: 'Ular tangga, monopoli, atau puzzle',
          safety: 'Simpan mainan dengan rapi setelah bermain',
          time: 'Siang atau sore'
        }
      ]
    };
  }
  
  // Mist/Fog (1030, 1135, 1147)
  if ([1030, 1135, 1147].includes(conditionCode)) {
    return {
      condition: 'Berkabut',
      description: 'Lebih aman bermain di dalam ruangan',
      color: 'from-gray-300 to-gray-500',
      bgColor: 'from-gray-400/20 to-gray-600/20',
      activities: [
        {
          name: 'Membaca Komik',
          icon: BookOpen,
          rating: 'excellent',
          description: 'Baca komik atau novel anak-anak',
          safety: 'Baca di tempat yang terang',
          time: 'Kapan saja'
        },
        {
          name: 'Main Puzzle',
          icon: Gamepad2,
          rating: 'excellent',
          description: 'Menyusun puzzle atau lego',
          safety: 'Jangan sampai bagian kecil tertelan',
          time: 'Kapan saja'
        },
        {
          name: 'Menyanyi & Menari',
          icon: Music,
          rating: 'good',
          description: 'Karaoke lagu anak-anak favorit',
          safety: 'Jangan terlalu keras agar tidak ganggu tetangga',
          time: 'Siang atau sore'
        },
        {
          name: 'Kerajinan Tangan',
          icon: Sparkles,
          rating: 'excellent',
          description: 'Membuat origami atau kerajinan dari kertas',
          safety: 'Hati-hati saat menggunakan gunting',
          time: 'Kapan saja'
        }
      ]
    };
  }
  
  // Rain conditions
  if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(conditionCode)) {
    return {
      condition: 'Hujan',
      description: 'Waktunya aktivitas seru di dalam rumah!',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-600/20 to-indigo-600/20',
      activities: [
        {
          name: 'Membaca Buku Cerita',
          icon: BookOpen,
          rating: 'excellent',
          description: 'Baca buku sambil mendengar suara hujan',
          safety: 'Temani anak saat membaca',
          time: 'Kapan saja'
        },
        {
          name: 'Menonton Film Anak',
          icon: Gamepad2,
          rating: 'good',
          description: 'Film edukatif atau kartun favorit',
          safety: 'Batasi waktu menonton (max 2 jam)',
          time: 'Siang atau sore'
        },
        {
          name: 'Menggambar & Mewarnai',
          icon: Palette,
          rating: 'excellent',
          description: 'Gambar pemandangan hujan atau pelangi',
          safety: 'Gunakan pewarna yang aman untuk anak',
          time: 'Kapan saja'
        },
        {
          name: 'Masak Bersama',
          icon: Utensils,
          rating: 'excellent',
          description: 'Buat kue atau makanan ringan bersama',
          safety: 'Awasi saat menggunakan oven/kompor',
          time: 'Sore hari'
        },
        {
          name: 'Main Boneka/Action Figure',
          icon: Baby,
          rating: 'excellent',
          description: 'Bermain peran dengan boneka kesayangan',
          safety: 'Simpan mainan setelah bermain',
          time: 'Kapan saja'
        }
      ]
    };
  }
  
  // Thunder conditions
  if ([1087, 1273, 1276, 1279, 1282].includes(conditionCode)) {
    return {
      condition: 'Petir & Badai',
      description: 'Tetap di dalam rumah untuk keselamatan!',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      activities: [
        {
          name: 'Bermain Board Games',
          icon: Gamepad2,
          rating: 'excellent',
          description: 'Ular tangga, monopoli, atau catur',
          safety: 'Jauhkan dari jendela dan perangkat elektronik',
          time: 'Kapan saja'
        },
        {
          name: 'Mendengarkan Audiobook',
          icon: Music,
          rating: 'excellent',
          description: 'Dengarkan cerita menarik',
          safety: 'Gunakan volume yang tidak terlalu keras',
          time: 'Kapan saja'
        },
        {
          name: 'Bermain Peran',
          icon: Baby,
          rating: 'excellent',
          description: 'Dokter-dokteran atau masak-masakan',
          safety: 'Pastikan mainan tidak berbahaya',
          time: 'Kapan saja'
        },
        {
          name: 'Membuat Cerita',
          icon: BookOpen,
          rating: 'good',
          description: 'Tulis atau gambar cerita sendiri',
          safety: 'Dampingi anak saat berkreasi',
          time: 'Kapan saja'
        }
      ]
    };
  }
  
  // Snow conditions (jarang di Indonesia, tapi tetap ada)
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(conditionCode)) {
    return {
      condition: 'Bersalju',
      description: 'Cuaca dingin, bersiap untuk main salju!',
      color: 'from-cyan-300 to-blue-400',
      bgColor: 'from-cyan-400/20 to-blue-500/20',
      activities: [
        {
          name: 'Membuat Boneka Salju',
          icon: Baby,
          rating: 'excellent',
          description: 'Buat snowman di halaman',
          safety: 'Pakai jaket tebal dan sarung tangan',
          time: 'Pagi atau siang'
        },
        {
          name: 'Perang Bola Salju',
          icon: Users,
          rating: 'good',
          description: 'Bermain lempar bola salju',
          safety: 'Jangan lempar ke wajah',
          time: 'Pagi hari'
        },
        {
          name: 'Minum Coklat Panas',
          icon: Utensils,
          rating: 'excellent',
          description: 'Hangatkan tubuh dengan minuman',
          safety: 'Tunggu hingga tidak terlalu panas',
          time: 'Setelah bermain salju'
        },
        {
          name: 'Menggambar di Dalam',
          icon: Palette,
          rating: 'excellent',
          description: 'Gambar pemandangan salju',
          safety: 'Pastikan ruangan cukup hangat',
          time: 'Kapan saja'
        }
      ]
    };
  }
  
  // Sleet/Ice conditions
  if ([1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264].includes(conditionCode)) {
    return {
      condition: 'Hujan Es',
      description: 'Cuaca ekstrem, lebih aman di dalam!',
      color: 'from-teal-400 to-blue-500',
      bgColor: 'from-teal-500/20 to-blue-600/20',
      activities: [
        {
          name: 'Main Puzzle',
          icon: Gamepad2,
          rating: 'excellent',
          description: 'Susun puzzle favorit',
          safety: 'Jauh dari jendela',
          time: 'Kapan saja'
        },
        {
          name: 'Menggambar',
          icon: Palette,
          rating: 'excellent',
          description: 'Gambar dan mewarnai',
          safety: 'Di ruangan yang hangat',
          time: 'Kapan saja'
        },
        {
          name: 'Membaca',
          icon: BookOpen,
          rating: 'excellent',
          description: 'Baca buku cerita favorit',
          safety: 'Pencahayaan yang cukup',
          time: 'Kapan saja'
        },
        {
          name: 'Bermain dengan Orang Tua',
          icon: Users,
          rating: 'excellent',
          description: 'Quality time bersama keluarga',
          safety: 'Tetap di dalam rumah',
          time: 'Kapan saja'
        }
      ]
    };
  }
  
  // Default fallback
  return {
    condition: 'Cuaca Normal',
    description: 'Berbagai aktivitas bisa dilakukan',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-500/20 to-emerald-500/20',
    activities: [
      {
        name: 'Bermain di Luar',
        icon: TreePine,
        rating: 'good',
        description: 'Main di taman atau halaman',
        safety: 'Perhatikan kondisi cuaca',
        time: 'Pagi atau sore'
      },
      {
        name: 'Membaca',
        icon: BookOpen,
        rating: 'excellent',
        description: 'Baca buku favorit',
        safety: 'Posisi duduk yang nyaman',
        time: 'Kapan saja'
      }
    ]
  };
};

const getRatingInfo = (rating) => {
  switch (rating) {
    case 'excellent':
      return {
        label: 'Sangat Cocok',
        icon: SmilePlus,
        color: 'bg-green-500',
        textColor: 'text-green-500'
      };
    case 'good':
      return {
        label: 'Cocok',
        icon: Smile,
        color: 'bg-yellow-500',
        textColor: 'text-yellow-500'
      };
    case 'fair':
      return {
        label: 'Cukup',
        icon: Meh,
        color: 'bg-orange-500',
        textColor: 'text-orange-500'
      };
    default:
      return {
        label: 'Tidak Cocok',
        icon: Frown,
        color: 'bg-red-500',
        textColor: 'text-red-500'
      };
  }
};

const Activities = () => {
  const { selectedCity } = useCityContext();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeather(selectedCity.name);
        setWeather(data);
      } catch (error) {
        console.error('Error loading weather:', error);
      } finally {
        setLoading(false);
      }
    };
    loadWeather();
  }, [selectedCity]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Memuat aktivitas...</p>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="text-white text-center">
          <AlertCircle size={64} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl">Tidak dapat memuat data cuaca</p>
        </div>
      </div>
    );
  }

  const activityData = getActivitiesForWeather(
    weather.current.condition.code,
    weather.current.temp_c
  );

  return (
    <div className="min-h-screen px-5 pt-30 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header with Weather Info */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-3">
            Aktivitas untuk Anak
          </h1>
          <p className="text-xl text-white/80 mb-6">
            Rekomendasi kegiatan seru berdasarkan cuaca di {selectedCity.name}
          </p>
          
          {/* Weather Summary Card */}
          <div className={`inline-block bg-gradient-to-r ${activityData.bgColor} backdrop-blur-lg rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-4 sm:py-5 border-2 border-white/30 shadow-2xl`}>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className={`bg-gradient-to-r ${activityData.color} rounded-full p-3 sm:p-4`}>
                <ThermometerSun size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white/80 text-xs sm:text-sm">Cuaca Saat Ini</p>
                <p className="text-white text-xl sm:text-2xl font-bold">{activityData.condition}</p>
                <p className="text-white/90 text-xs sm:text-sm">{weather.current.temp_c}°C • {weather.current.condition.text}</p>
              </div>
            </div>
          </div>
          
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            {activityData.description}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activityData.activities.map((activity, index) => {
            const Icon = activity.icon;
            const ratingInfo = getRatingInfo(activity.rating);
            
            return (
              <div
                key={index}
                onClick={() => setSelectedActivity(activity)}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon and Rating */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`bg-gradient-to-r ${activityData.color} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className={`${ratingInfo.color} rounded-full px-3 py-1 text-white text-xs font-bold flex items-center gap-1`}>
                    {React.createElement(ratingInfo.icon, { size: 14, className: 'text-white' })}
                    <span>{ratingInfo.label}</span>
                  </div>
                </div>

                {/* Activity Name */}
                <h3 className="text-white text-2xl font-bold mb-2">
                  {activity.name}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm mb-4">
                  {activity.description}
                </p>

                {/* Time Badge */}
                <div className="bg-white/10 rounded-full px-3 py-1 inline-block mb-3">
                  <p className="text-white/90 text-xs">
                    ⏰ {activity.time}
                  </p>
                </div>

                {/* View Details */}
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors">
                    Klik untuk detail keamanan →
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weather Tips */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/30 shadow-xl animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-500 rounded-full p-3 flex-shrink-0">
              <AlertCircle size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-2">
                Tips Keamanan untuk Orang Tua
              </h3>
              <ul className="text-white/90 space-y-2 text-sm">
                <li>• Selalu awasi anak saat beraktivitas, terutama di luar ruangan</li>
                <li>• Pastikan anak memakai perlengkapan yang sesuai dengan cuaca</li>
                <li>• Batasi waktu bermain gadget maksimal 2 jam per hari</li>
                <li>• Gunakan sunscreen (SPF 30+) saat cuaca cerah</li>
                <li>• Pastikan anak minum air yang cukup</li>
                <li>• Hindari aktivitas outdoor saat cuaca ekstrem (badai, petir, dll)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Detail Modal */}
      {selectedActivity && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white/15 backdrop-blur-xl rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl border-t sm:border-2 border-white/30 relative animate-slide-up sm:animate-scale-in max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <Gift size={24} className="text-white rotate-45" />
            </button>

            {/* Content */}
            <div className="text-white">
              {/* Icon */}
              <div className={`bg-gradient-to-r ${activityData.color} rounded-3xl p-6 inline-block mb-6`}>
                {React.createElement(selectedActivity.icon, { size: 48, className: 'text-white' })}
              </div>

              {/* Activity Name */}
              <h2 className="text-4xl font-bold mb-4">{selectedActivity.name}</h2>
              
                          {/* Rating */}
              <div className={`${getRatingInfo(selectedActivity.rating).color} rounded-full px-4 py-2 inline-block mb-6`}>
                <span className="text-white font-bold flex items-center gap-2">
                  {React.createElement(getRatingInfo(selectedActivity.rating).icon, { size: 18, className: 'text-white' })}
                  {getRatingInfo(selectedActivity.rating).label} untuk cuaca ini
                </span>
              </div>

              {/* Description */}
              <div className="bg-white/10 rounded-2xl p-5 mb-5">
                <h3 className="font-bold text-lg mb-2">Deskripsi</h3>
                <p className="text-white/90">{selectedActivity.description}</p>
              </div>

              {/* Safety */}
              <div className="bg-yellow-500/20 rounded-2xl p-5 mb-5 border border-yellow-500/30">
                <h3 className="font-bold text-lg mb-2">Tips Keamanan</h3>
                <p className="text-white/90">{selectedActivity.safety}</p>
              </div>

              {/* Time */}
              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">Waktu Terbaik</h3>
                <p className="text-white/90">{selectedActivity.time}</p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedActivity(null)}
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 rounded-full transition-all transform hover:scale-105"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
