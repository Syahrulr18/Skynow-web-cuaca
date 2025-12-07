import React, { useState, useEffect, useRef } from 'react';
import Sunny from '../assets/weather-bg/Sunny.mp4';
import PartlyCloudy from '../assets/weather-bg/Partly_Cloudy.mp4';
import Cloudy from '../assets/weather-bg/Cloudy_Overcast.mp4';
import Misty from '../assets/weather-bg/Misty.mp4';
import Rain from '../assets/weather-bg/rain.mp4';
import Thunderstorm from '../assets/weather-bg/Thunderstorm.mp4';
import Snowy from '../assets/weather-bg/Snowy.mp4';
import SleetIcy from '../assets/weather-bg/Sleet_Icy.mp4';

// Map weather condition codes to video files
const getWeatherVideo = (conditionCode) => {
  // Sunny conditions (1000)
  if (conditionCode === 1000) return Sunny;
  
  // Partly cloudy (1003)
  if (conditionCode === 1003) return PartlyCloudy;
  
  // Cloudy/Overcast (1006, 1009)
  if ([1006, 1009].includes(conditionCode)) return Cloudy;
  
  // Mist/Fog (1030, 1135, 1147)
  if ([1030, 1135, 1147].includes(conditionCode)) return Misty;
  
  // Rain conditions
  if ([1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(conditionCode)) return Rain;
  
  // Thunder conditions
  if ([1087, 1273, 1276, 1279, 1282].includes(conditionCode)) return Thunderstorm;
  
  // Snow conditions
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(conditionCode)) return Snowy;
  
  // Sleet/Ice conditions
  if ([1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264].includes(conditionCode)) return SleetIcy;
  
  return Sunny;
};

const VideoBackground = ({ conditionCode }) => {
  const [currentVideo, setCurrentVideo] = useState(Sunny);
  const [nextVideo, setNextVideo] = useState(null);
  const [opacity, setOpacity] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const newVideo = getWeatherVideo(conditionCode);
    
    if (newVideo !== currentVideo) {
      setNextVideo(newVideo);
      setIsTransitioning(true);
    }
  }, [conditionCode, currentVideo]);

  const handleCanPlay = () => {
    if (isTransitioning) {

      setOpacity(0); 
      
      setTimeout(() => {
        setCurrentVideo(nextVideo);
        setNextVideo(null);
        setOpacity(1);
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-gray-900">
      
      {/* Current/Main Video */}
      <video
        key={currentVideo} 
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        style={{ opacity: opacity }}
        src={currentVideo}
      />

      {/* Next/Preload Video (Layer under current, or visible during fade) */}
      {nextVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={nextVideo}
          onCanPlay={handleCanPlay} 
        />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground;
