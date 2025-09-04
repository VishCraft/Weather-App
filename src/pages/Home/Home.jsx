import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from '../../components/weather/SearchBar/SearchBar';
import { WeatherCard } from '../../components/weather/WeatherCard/WeatherCard';
import { ForecastList } from '../../components/weather/ForecastList/ForecastList';
import { LocationPicker } from '../../components/weather/LocationPicker/LocationPicker';
import { useWeather } from '../../hooks/useWeather';
import { useGeolocation } from '../../hooks/useGeolocation';
import { addToFavorites } from '../../store/slices/weatherSlice';
import { weatherApi } from '../../services/api/weatherApi';
import './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const [currentLocation, setCurrentLocation] = useState('');
  const { currentWeather, forecast, loading, error } = useWeather(currentLocation);
  const { location: geoLocation, getCurrentPosition } = useGeolocation();

  const handleSearch = (city) => {
    setCurrentLocation(city);
  };

  const handleUseLocation = async () => {
    if (geoLocation) {
      try {
        const weather = await weatherApi.getWeatherByCoords(
          geoLocation.latitude, 
          geoLocation.longitude
        );
        setCurrentLocation(weather.name);
      } catch (error) {
        console.error('Error getting weather by coordinates:', error);
      }
    } else {
      getCurrentPosition();
    }
  };

  const handleAddToFavorites = (weather) => {
    dispatch(addToFavorites({
      id: weather.id,
      name: weather.name,
      country: weather.sys.country,
    }));
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1>Weather App</h1>
        <p>Get current weather and forecasts for any city</p>
      </div>

  <SearchBar 
        onSearch={handleSearch}
        onUseLocation={handleUseLocation}
      />

  <LocationPicker onPick={handleSearch} />

      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}

      {loading && (
        <div className="loading">
          <p>Loading weather data...</p>
        </div>
      )}

      {currentWeather && (
        <div className="weather-content">
          <WeatherCard 
            weather={currentWeather}
            onAddToFavorites={handleAddToFavorites}
          />
          {forecast && <ForecastList forecast={forecast} />}
        </div>
      )}
    </div>
  );
};

export default Home;
