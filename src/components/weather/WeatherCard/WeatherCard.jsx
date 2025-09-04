import React from 'react';
import { useSelector } from 'react-redux';
import { formatTemperature, convertTemperature } from '../../../utils/formatters/temperatureFormatter';
import { formatDate } from '../../../utils/formatters/dateFormatter';
import { Button } from '../../common/Button';
import './WeatherCard.module.css';

export const WeatherCard = ({ weather, onAddToFavorites }) => {
  const { favorites } = useSelector(state => state.weather);
  
  const isFavorite = favorites.some(fav => fav.id === weather?.id);

  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <h2 className="weather-card__location">
          {weather.name}, {weather.sys.country}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddToFavorites(weather)}
          disabled={isFavorite}
        >
          {isFavorite ? '★' : '☆'}
        </Button>
      </div>
      
      <div className="weather-card__main">
        <div className="weather-card__temperature">
          {formatTemperature(weather.main.temp, 'C')}
          <span style={{ marginLeft: 8, color: 'var(--text-secondary)', fontWeight: 600 }}>
            ({Math.round(convertTemperature(weather.main.temp, 'C', 'F'))}°F)
          </span>
        </div>
        <div className="weather-card__condition">
          <img 
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <span>{weather.weather[0].main}</span>
        </div>
      </div>

      <div className="weather-card__details">
        <div className="detail-item">
          <span>Feels like</span>
          <span>
            {formatTemperature(weather.main.feels_like, 'C')} / {Math.round(convertTemperature(weather.main.feels_like, 'C', 'F'))}°F
          </span>
        </div>
        <div className="detail-item">
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span>Wind</span>
          <span>{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span>Pressure</span>
          <span>{weather.main.pressure} hPa</span>
        </div>
      </div>

      <div className="weather-card__footer">
        <small>Updated: {formatDate(new Date(), 'short')}</small>
      </div>
    </div>
  );
};
