import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'yes',
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export const fetchForecast = async (city, days = 3) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                days: days,
                aqi: 'yes'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        throw error;
    }
}

export const fetchCityFromCoords = async (lat, lon) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: {
                key: API_KEY,
                q: `${lat},${lon}`,
                aqi: 'yes'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching city from coordinates:", error);
        throw error;
    }
}
