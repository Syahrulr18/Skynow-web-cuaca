import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Cloud, CloudRain, Wind, CloudLightning, Droplets, Thermometer, Layers, Globe, Navigation, Tornado, Waves } from 'lucide-react';
import dictionaryData from '../data/dictionaryData';

const iconMap = {
  CloudRain,
  Cloud,
  Wind,
  CloudLightning,
  Droplets,
  Thermometer,
  Layers,
  Globe,
  Navigation,
  Tornado,
  Waves
};

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Get unique categories
  const categories = ['All', ...new Set(dictionaryData.map(item => item.category))];

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    let items = dictionaryData;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      items = items.filter(item =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return items;
  }, [searchTerm, selectedCategory]);

  // Autocomplete suggestions
  const suggestions = useMemo(() => {
    if (searchTerm.length === 0) return [];
    
    return dictionaryData
      .filter(item => 
        item.term.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (term) => {
    setSearchTerm(term);
    setShowSuggestions(false);
  };

  const handleReadMore = (id) => {
    navigate(`/dictionary/${id}`);
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent size={60} className="text-white" /> : <BookOpen size={60} className="text-white" />;
  };

  return (
    <div className="min-h-screen px-5 pt-30 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Kamus Cuaca & Geografis</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 px-4">Pelajari istilah-istilah penting tentang cuaca dan geografi</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 relative animate-slide-down">
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
              <Search size={24} className="text-white/70" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => searchTerm && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Cari istilah cuaca atau geografis..."
              className="w-full pl-14 pr-5 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 outline-none border-2 border-white/20 focus:border-white/50 focus:bg-white/30 transition-all duration-300 text-lg"
              autoComplete="off"
            />

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white/20 animate-fade-in-up z-20">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion.term)}
                    className="px-5 py-3 text-white hover:bg-white/20 cursor-pointer transition-all duration-200 border-b border-white/10 last:border-b-0"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="font-semibold">{suggestion.term}</div>
                    <div className="text-sm opacity-70">{suggestion.category}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 justify-center mb-10 flex-wrap animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                selectedCategory === category
                  ? 'bg-white/40 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-white/70">
            Menampilkan {filteredItems.length} dari {dictionaryData.length} istilah
          </p>
        </div>

        {/* Dictionary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white/15 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-3">
                {item.category}
              </div>

              {/* Term */}
              <h3 className="text-2xl font-bold text-white mb-3">{item.term}</h3>

              {/* Short Description */}
              <p className="text-white/80 mb-4 line-clamp-3">{item.shortDesc}</p>

              {/* Read More Button */}
              <button
                onClick={() => handleReadMore(item.id)}
                className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Baca Selengkapnya →
              </button>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={80} className="text-white/50 mx-auto mb-4" />
            <p className="text-2xl text-white/70">Tidak ada hasil ditemukan</p>
            <p className="text-white/50 mt-2">Coba kata kunci lain atau pilih kategori berbeda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
