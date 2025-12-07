import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import VideoBackground from './component/VideoBackground';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Dictionary from './pages/Dictionary';
import DictionaryDetail from './pages/DictionaryDetail';
import Quiz from './pages/Quiz';
import Activities from './pages/Activities';
import { CityProvider, useCityContext } from './context/CityContext';

function AppContent() {
  const { weatherCondition } = useCityContext();

  return (
    <div className="min-h-screen relative ">
      {/* Dynamic Video Background */}
      <VideoBackground conditionCode={weatherCondition} />

      {/* Background Animation Elements (subtle overlay) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <Navbar className="pb-100 z-1000" />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/dictionary/:termId" element={<DictionaryDetail />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <CityProvider>
      <Router>
        <AppContent />
      </Router>
    </CityProvider>
  );
}

export default App;
