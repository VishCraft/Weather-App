// src/api.js

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
export const OPEN_WEATHER_API_KEY = 'YOUR_API_KEY';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export function getWeatherByCity(city) {
  return fetch(`${BASE_URL}/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
    .then(response => response.json());
}
