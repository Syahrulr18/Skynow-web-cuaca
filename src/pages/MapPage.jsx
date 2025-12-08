import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCityContext } from '../context/CityContext';
import { fetchCityFromCoords } from '../utils/api';
import { Wind, Droplets, Gauge, Eye, Thermometer, X, MapPin, Loader } from 'lucide-react';

// Fix for default marker icon in Leaflet with Webpack/Vite
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Component to handle map clicks
const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

// Component to center map on selected city
const MapCenter = ({ center }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView([center.lat, center.lon], 13);
    }
  }, [center, map]);
  
  return null;
};

const MapPage = () => {
  const { selectedCity } = useCityContext();
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [loadingMarker, setLoadingMarker] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  // Add initial marker for selected city
  useEffect(() => {
    if (selectedCity && markers.length === 0) {
      // Add initial marker for the selected city from Home
      const initialMarker = {
        id: Date.now(),
        position: [selectedCity.lat, selectedCity.lon],
        cityName: selectedCity.name,
        loading: true
      };
      setMarkers([initialMarker]);
      
      // Fetch weather data for initial marker
      fetchCityFromCoords(selectedCity.lat, selectedCity.lon)
        .then(data => {
          setMarkers(prev => prev.map(m => 
            m.id === initialMarker.id 
              ? { ...m, weatherData: data, loading: false }
              : m
          ));
        })
        .catch(error => {
          console.error('Error fetching initial weather:', error);
          setMarkers(prev => prev.filter(m => m.id !== initialMarker.id));
        });
    }
  }, [selectedCity]);

  const handleMapClick = async (latlng) => {
    setLoadingMarker(true);
    
    // Create temporary marker
    const newMarker = {
      id: Date.now(),
      position: [latlng.lat, latlng.lng],
      loading: true,
      cityName: 'Loading...'
    };
    
    setMarkers(prev => [...prev, newMarker]);

    try {
      const weatherData = await fetchCityFromCoords(latlng.lat, latlng.lng);
      
      // Update marker with weather data
      setMarkers(prev => prev.map(m => 
        m.id === newMarker.id 
          ? { 
              ...m, 
              weatherData, 
              cityName: weatherData.location.name,
              loading: false 
            }
          : m
      ));
    } catch (error) {
      console.error('Error fetching weather:', error);
      // Remove marker if failed
      setMarkers(prev => prev.filter(m => m.id !== newMarker.id));
    } finally {
      setLoadingMarker(false);
    }
  };

  const removeMarker = (id) => {
    setMarkers(prev => prev.filter(m => m.id !== id));
    if (selectedMarker?.id === id) {
      setSelectedMarker(null);
    }
  };

  return (
    <div className="relative w-full h-screen pt-25 px-5 pb-5">
      {/* Map Container */}
      <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <MapContainer 
          center={[selectedCity.lat, selectedCity.lon]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler onMapClick={handleMapClick} />
          <MapCenter center={selectedCity} />
          
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>
                <div className="text-center p-2">
                  {marker.loading ? (
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin" size={16} />
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-bold text-lg mb-1">{marker.cityName}</h3>
                      <p className="text-2xl font-bold">{marker.weatherData?.current.temp_c}°C</p>
                      <p className="text-sm opacity-80">{marker.weatherData?.current.condition.text}</p>
                      <button
                        onClick={() => setSelectedMarker(marker)}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
                      >
                        View Details
                      </button>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Instructions Panel - Responsive */}
        <div className="absolute top-4 left-4 z-500">
          {showInstructions ? (
            <>
              {/* Compact Version - Mobile Only */}
              <div className="block md:hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 text-white shadow-2xl border-2 border-white/30 animate-fade-in max-w-xs">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 rounded-full p-1.5">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <h3 className="font-bold text-sm text-black">Panduan Cepat</h3>
                  </div>
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
                  >
                    <X size={16} className='text-black'/>
                  </button>
                </div>
                
                {/* Compact Instructions */}
                <div className="space-y-2 text-xs text-black">
                  <p className="opacity-90">-Klik peta untuk tambah marker</p>
                  <p className="opacity-90">-Klik marker untuk detail cuaca</p>
                  <p className="opacity-90">-Hover marker di bawah & klik </p>
                </div>
              </div>

              {/* Detailed Version - Desktop Only */}
              <div className="hidden md:block bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-xl rounded-3xl px-6 py-5 text-white shadow-2xl border-2 border-white/30 animate-fade-in max-w-md">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 rounded-full p-2">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold text-lg">Panduan Peta Cuaca</h3>
                      <p className="text-xs opacity-80">Cara menggunakan peta interaktif</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowInstructions(false)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-1.5 transition-colors"
                  >
                    <X size={18} className='text-white'/>
                  </button>
                </div>
                
                {/* Instructions List */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      1
                    </div>
                    <div className="flex-1 text-white">
                      <p className="font-semibold text-sm">Pilih Kota di Beranda</p>
                      <p className="text-xs opacity-80 mt-0.5">Peta akan otomatis terpusat pada kota yang dipilih</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      2
                    </div>
                    <div className="flex-1 text-white">
                      <p className="font-semibold text-sm">Klik Lokasi di Peta</p>
                      <p className="text-xs opacity-80 mt-0.5">Tambahkan marker cuaca dengan mengklik di mana saja</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      3
                    </div>
                    <div className="flex-1 text-white">
                      <p className="font-semibold text-sm">Lihat Detail Cuaca</p>
                      <p className="text-xs opacity-80 mt-0.5">Klik marker atau tombol di bawah untuk info lengkap</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      4
                    </div>
                    <div className="flex-1 text-white">
                      <p className="font-semibold text-sm">Hapus Marker</p>
                      <p className="text-xs opacity-80 mt-0.5">Hover pada marker dan klik ✕ untuk menghapus</p>
                    </div>
                  </div>
                </div>
                
                {/* Tips */}
                <div className="mt-4 pt-3 border-t border-white/30">
                  <p className="text-xs opacity-90 text-white">
                    <span className="font-semibold">Tips:</span> Anda bisa menambahkan banyak lokasi sekaligus!
                  </p>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => setShowInstructions(true)}
              className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-full p-3 text-white shadow-xl border-2 border-white/30 hover:scale-110 transition-transform"
              title="Tampilkan Panduan"
            >
              <MapPin size={20} />
            </button>
          )}
        </div>

        {/* Current City Badge */}
        <div className="absolute top-4 right-4 bg-black/15 backdrop-blur-lg rounded-full px-5 py-3 text-white shadow-lg border border-white/30 animate-fade-in hidden md:block z-[500]">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-blue-500" />
            <div className="text-white">
              <p className="text-xs opacity-70">Kota Terpilih</p>
              <p className="font-bold">{selectedCity.name}</p>
            </div>
          </div>
        </div>

        {/* Loading Indicator - appears when adding marker */}
        {loadingMarker && (
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/15 backdrop-blur-lg rounded-full px-6 py-3 text-white flex items-center gap-3 shadow-xl border border-white/30 animate-fade-in z-[800]">
            <Loader className="animate-spin" size={20} />
            <span className="font-semibold">Memuat data cuaca...</span>
          </div>
        )}

        {/* Markers List */}
        {markers.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 z-[500]">
            <div className="bg-black/10 backdrop-blur-lg rounded-2xl p-3 border border-white/30">
              <p className="text-white text-xs font-semibold mb-2 px-2 opacity-70">
                LOKASI TERSIMPAN ({markers.filter(m => !m.loading).length})
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
                {markers.map((marker) => (
                  <button
                    key={marker.id}
                    onClick={() => !marker.loading && setSelectedMarker(marker)}
                    disabled={marker.loading}
                    className={`bg-white/15 backdrop-blur-lg rounded-full px-5 py-2.5 text-white flex items-center gap-3 hover:bg-white/25 transition-all shadow-lg border border-white/30 group flex-shrink-0 ${marker.loading ? 'opacity-50 cursor-wait' : 'hover:scale-105 active:scale-95'}`}
                  >
                    {marker.loading ? (
                      <>
                        <Loader className="animate-spin" size={16} />
                        <span className="text-sm font-medium">Loading...</span>
                      </>
                    ) : (
                      <>
                        <div className='text-white'>
                          <p className="font-bold text-sm">{marker.cityName}</p>
                          <p className="text-xs opacity-80">{marker.weatherData?.current.temp_c}°C • {marker.weatherData?.current.condition.text}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeMarker(marker.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500/80 hover:bg-red-600 rounded-full p-1"
                        >
                          <X size={14} />
                        </button>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Weather Detail Panel */}
      {selectedMarker && !selectedMarker.loading && (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 w-full max-w-2xl shadow-2xl border-t sm:border border-white/20 relative animate-slide-up sm:animate-scale-in max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMarker(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Content */}
            <div className="text-white">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-2">
                  {selectedMarker.weatherData.location.name}
                </h2>
                <p className="text-xl opacity-80">
                  {selectedMarker.weatherData.location.region}, {selectedMarker.weatherData.location.country}
                </p>
              </div>

              {/* Main Weather */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-white/20">
                <div className="text-center">
                  <div className="text-7xl font-bold mb-2">
                    {selectedMarker.weatherData.current.temp_c}°C
                  </div>
                  <p className="text-xl opacity-80">
                    {selectedMarker.weatherData.current.condition.text}
                  </p>
                  <p className="text-sm opacity-60 mt-2">
                    Feels like {selectedMarker.weatherData.current.feelslike_c}°C
                  </p>
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Thermometer size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">Temperature</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.temp_c}°C</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">Humidity</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.humidity}%</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">Wind Speed</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.wind_kph} km/h</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">Pressure</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.pressure_mb} mb</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">Visibility</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.vis_km} km</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge size={20} className="opacity-70" />
                    <span className="text-sm opacity-70">UV Index</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedMarker.weatherData.current.uv}</p>
                </div>
              </div>

              {/* Remove Marker Button */}
              <button
                onClick={() => {
                  removeMarker(selectedMarker.id);
                  setSelectedMarker(null);
                }}
                className="mt-6 w-full bg-red-500/20 hover:bg-red-500/30 text-white font-semibold py-3 rounded-full transition-all"
              >
                Remove Marker
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
