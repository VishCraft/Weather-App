import { baseApi } from './baseApi';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const weatherApi = {
  getCurrentWeather: async (location) => {
    const params = {
      q: location,
      units: 'metric',
      appid: API_KEY,
    };
    
    return baseApi.get('/weather', { params });
  },

  getForecast: async (location) => {
    const params = {
      q: location,
      units: 'metric',
      cnt: 40,
      appid: API_KEY,
    };
    
    return baseApi.get('/forecast', { params });
  },

  getWeatherByCoords: async (lat, lon) => {
    const params = {
      lat,
      lon,
      units: 'metric',
      appid: API_KEY,
    };
    
    return baseApi.get('/weather', { params });
  },

  getAirQuality: async (lat, lon) => {
    const params = {
      lat,
      lon,
      appid: API_KEY,
    };
    
    return baseApi.get('/air_pollution', { params });
  },
};
