import React, { createContext, useContext, useState } from 'react';

const CityContext = createContext();

export const useCityContext = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error('useCityContext must be used within CityProvider');
  }
  return context;
};

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState({
    name: 'Jakarta',
    lat: -6.2088,
    lon: 106.8456
  });

  const [weatherCondition, setWeatherCondition] = useState(1000); // Default: Sunny

  return (
    <CityContext.Provider value={{ 
      selectedCity, 
      setSelectedCity,
      weatherCondition,
      setWeatherCondition
    }}>
      {children}
    </CityContext.Provider>
  );
};
