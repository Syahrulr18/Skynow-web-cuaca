import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';
import { Wind, Droplets, Gauge, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Eye, Clock, Sunrise, RefreshCw } from 'lucide-react';
import { useCityContext } from '../context/CityContext';

const WeatherIcon = ({ conditionCode, size = 100 }) => {

    // Sunny conditions (1000)
    if (conditionCode === 1000) return <Sun size={size} color="white" />;
    
    // Partly cloudy (1003)
    if (conditionCode === 1003) return <Cloud size={size} color="white" />;
    
    // Cloudy/Overcast (1006, 1009)
    if ([1006, 1009].includes(conditionCode)) return <Cloud size={size} color="white" />;
    
    // Mist/Fog (1030, 1135, 1147)
    if ([1030, 1135, 1147].includes(conditionCode)) return <Cloud size={size} color="white" />;
    
    // Rain conditions (1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246)
    if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(conditionCode)) {
        return <CloudRain size={size} color="white" />;
    }
    
    // Snow conditions (1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258)
    if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(conditionCode)) {
        return <CloudSnow size={size} color="white" />;
    }
    
    // Thunder conditions (1087, 1273, 1276, 1279, 1282)
    if ([1087, 1273, 1276, 1279, 1282].includes(conditionCode)) {
        return <CloudLightning size={size} color="white" />;
    }
    
    // Sleet/Ice (1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264)
    if ([1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264].includes(conditionCode)) {
        return <CloudSnow size={size} color="white" />;
    }
    
    // Default to Sun for unknown codes
    return <Sun size={size} color="white" />;
};

const Home = () => {
  const { selectedCity, setSelectedCity, setWeatherCondition } = useCityContext();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendedCities, setRecommendedCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [error, setError] = useState(null);

  const indonesianCities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar',
    'Palembang', 'Tangerang', 'Depok', 'Bekasi', 'Bogor', 'Malang',
    'Yogyakarta', 'Bali', 'Denpasar', 'Batam', 'Pekanbaru', 'Bandar Lampung',
    'Padang', 'Manado', 'Balikpapan', 'Samarinda', 'Pontianak', 'Jambi',
    'Cirebon', 'Sukabumi', 'Tasikmalaya', 'Bengkulu', 'Solo', 'Mataram',
    'Kupang', 'Ambon', 'Jayapura', 'Banda Aceh', 'Banjarmasin', 'Palu',
  ];


  const allCities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Yogyakarta', 'Bali', 'Medan', 
    'Semarang', 'Palembang', 'Malang', 'Denpasar', 'Bogor', 'Batam',
    'Makassar', 'Pekanbaru', 'Tangerang', 'Bekasi', 'Depok', 'Padang'
  ];
  const [cityRecommendations, setCityRecommendations] = useState(
    allCities.sort(() => Math.random() - 0.5).slice(0, 12) // Ambil 12 kota, harapan minimal 9 berhasil
  );

  useEffect(() => {
    loadWeather(selectedCity.name);
    loadRecommendedCities();
  }, []);

  // Sync weather condition with global context for video background
  useEffect(() => {
    if (weather?.current?.condition?.code) {
      setWeatherCondition(weather.current.condition.code);
    }
  }, [weather, setWeatherCondition]);

  const loadWeather = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(location);
      setWeather(data);
      
      // Update context with selected city coordinates
      setSelectedCity({
        name: data.location.name,
        lat: data.location.lat,
        lon: data.location.lon
      });
    } catch (error) {
      console.error('Error loading weather:', error);
      setError(`Gagal memuat data cuaca untuk ${location}. Pastikan nama kota benar.`);
      
      // Jika initial load gagal, coba dengan Jakarta sebagai fallback
      if (!weather) {
        try {
          console.log('Trying fallback city: Jakarta');
          const fallbackData = await fetchWeather('Jakarta');
          setWeather(fallbackData);
          setCity('Jakarta');
          setError(null);
          
          // Update context with fallback city
          setSelectedCity({
            name: fallbackData.location.name,
            lat: fallbackData.location.lat,
            lon: fallbackData.location.lon
          });
        } catch (fallbackError) {
          console.error('Fallback also failed:', fallbackError);
          setError('Gagal memuat data cuaca. Silakan coba lagi.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const loadRecommendedCities = async (cities = cityRecommendations) => {
    setLoadingCities(true);
    try {
      const citiesData = await Promise.all(
        cities.map(async (cityName) => {
          try {
            const data = await fetchWeather(cityName);
            return data;
          } catch (error) {
            console.error(`Error loading ${cityName}:`, error);
            return null;
          }
        })
      );
      // Filter yang berhasil dan ambil maksimal 9 kota untuk ditampilkan
      const successfulCities = citiesData.filter(data => data !== null);
      setRecommendedCities(successfulCities.slice(0, 9));
    } catch (error) {
      console.error('Error loading recommended cities:', error);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleCityClick = (cityName) => {
    loadWeather(cityName);
    // Smooth scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shuffleCities = () => {
    setIsRefreshing(true);
    // Acak dan pilih 12 kota dari daftar (untuk memastikan minimal 9 berhasil)
    const shuffled = [...allCities].sort(() => Math.random() - 0.5).slice(0, 12);
    setCityRecommendations(shuffled);
    loadRecommendedCities(shuffled);
    
    // Reset animasi refresh setelah 500ms
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      loadWeather(searchTerm);
      setSearchTerm('');
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      // Filter cities yang cocok dengan input
      const filtered = indonesianCities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5); // Maksimal 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (cityName) => {
    setSearchTerm(cityName);
    loadWeather(cityName);
    setShowSuggestions(false);
  };

  if (loading) return (
    <div className="text-white text-center mt-24 text-xl animate-pulse">
      Loading...
    </div>
  );
  
  if (!weather) return (
    <div className="text-white text-center mt-24 px-4">
      <div className="text-xl mb-4">Gagal memuat data cuaca</div>
      {error && <div className="text-base opacity-80 mb-6">{error}</div>}
      <button 
        onClick={() => loadWeather('Jakarta')}
        className="px-6 py-3 bg-white/30 hover:bg-white/40 rounded-full transition-all duration-200"
      >
        Coba Lagi dengan Jakarta
      </button>
    </div>
  );

  return (
    <div className="pt-30 px-5 pb-5 text-white max-w-7xl mx-auto animate-fade-in">
      
      {/* Search Bar */}
      <div className="mb-6 sm:mb-8 max-w-2xl mx-auto relative animate-slide-down">
        <form 
          onSubmit={handleSearch} 
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <div className="relative flex-1">
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearchChange}
              onFocus={() => searchTerm && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search city..." 
              className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-full w-full border-none bg-white/20 text-white placeholder-white/70 outline-none backdrop-blur-sm focus:bg-white/30 transition-all duration-300 focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
              autoComplete="off"
            />
            
            {/* Dropdown Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-fade-in-up z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-5 py-3 text-white hover:bg-white/20 cursor-pointer transition-all duration-200 border-b border-white/10 last:border-b-0"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button 
            type="submit" 
            className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border-none bg-white/40 text-white cursor-pointer hover:bg-white/50 active:scale-95 transition-all duration-200 font-semibold text-sm sm:text-base whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>

      {/* Main Weather Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-[20px] sm:rounded-[30px] p-5 sm:p-8 md:p-10 flex flex-col gap-6 sm:gap-8 mb-6 sm:mb-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)] transition-all duration-500 animate-scale-in">
        <div className="flex-1 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold m-0 mb-2 pb-4 sm:pb-10 animate-slide-right text-center lg:text-left">
            {weather.location.name}
          </h1>
          <p className="text-xl opacity-80 animate-slide-right animation-delay-100">
            {weather.location.region}, {weather.location.country}
          </p>
          <div className="flex items-center gap-5 mt-5 animate-slide-right animation-delay-200">
            <div className="animate-float">
              <WeatherIcon conditionCode={weather.current.condition.code} size={100} />
            </div>
            <div>
              <h2 className="text-5xl font-bold m-0 mb-2">
                {weather.current.temp_c}°C
              </h2>
              <p className="text-2xl m-0">
                {weather.current.condition.text}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full lg:w-auto animate-slide-left">
          {/* Card 1 */}
          <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Gauge size={18} className="text-blue-300" />
              <span className="text-xs sm:text-sm opacity-70">Kualitas Udara</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{weather.current.air_quality?.['us-epa-index'] || 'N/A'}</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Sunrise size={18} className="text-yellow-300" />
              <span className="text-xs sm:text-sm opacity-70">Index UV</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{weather.current.uv}</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Droplets size={18} className="text-cyan-300" />
              <span className="text-xs sm:text-sm opacity-70">Kelembaban</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{weather.current.humidity}%</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Wind size={18} className="text-green-300" />
              <span className="text-xs sm:text-sm opacity-70">Angin</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{weather.current.wind_kph} km/h</p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={18} className="text-purple-300" />
              <span className="text-xs sm:text-sm opacity-70">Jarak Pandang</span>
            </div>
            <p className="text-xl sm:text-2xl font-bold">{weather.current.vis_km} km</p>
          </div>
          
          {/* Card 6 - Update Time (spans 2 columns on mobile) */}
          <div className="col-span-2 sm:col-span-1 bg-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-sm hover:bg-white/15 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={18} className="text-orange-300" />
              <span className="text-xs sm:text-sm opacity-70">Terakhir Update</span>
            </div>
            <p className="text-sm sm:text-base font-semibold">{weather.current.last_updated}</p>
          </div>
        </div>
      </div>

      {/* Recommended Cities */}
      <div className="mb-8 animate-fade-in-up animation-delay-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Kota Rekomendasi</h2>
          <button
            onClick={shuffleCities}
            disabled={loadingCities}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
          >
            <RefreshCw 
              size={20} 
              className={`transition-transform duration-500 ${isRefreshing ? 'rotate-180' : ''}`}
            />
            <span className="hidden sm:inline">Acak Kota</span>
          </button>
        </div>
        {loadingCities ? (
          <div className="text-center text-white text-lg animate-pulse">
            Memuat kota rekomendasi...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedCities.map((cityData, index) => (
              <div 
                key={cityData.location.name}
                onClick={() => handleCityClick(cityData.location.name)}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95 shadow-lg hover:shadow-2xl animate-fade-in-up"
                style={{
                  border: selectedCity.name === cityData.location.name ? '2px solid rgba(255,255,255,0.5)' : 'none',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {cityData.location.name}
                </h3>
                <p className="text-sm opacity-70 mb-4 text-white">
                  {cityData.location.region}
                </p>
                <div className="flex justify-center mb-3 animate-float" style={{ animationDelay: `${index * 150}ms` }}>
                  <WeatherIcon conditionCode={cityData.current.condition.code} size={60} />
                </div>
                <h2 className="text-4xl font-bold mb-2 text-white">
                  {cityData.current.temp_c}°C
                </h2>
                <p className="text-base opacity-80 text-white">
                  {cityData.current.condition.text}
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 flex justify-around text-sm">
                  <div className="flex items-center gap-1 text-white opacity-80">
                    <Wind size={16} />
                    <span>{cityData.current.wind_kph} km/h</span>
                  </div>
                  <div className="flex items-center gap-1 text-white opacity-80">
                    <Droplets size={16} />
                    <span>{cityData.current.humidity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Home;
