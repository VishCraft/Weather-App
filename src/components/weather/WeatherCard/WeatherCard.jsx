import React from 'react';
import { useSelector } from 'react-redux';
import { formatTemperature, convertTemperature } from '../../../utils/formatters/temperatureFormatter';
import { formatDate } from '../../../utils/formatters/dateFormatter';
import { Button } from '../../common/Button';
import styles from './WeatherCard.module.css';

export const WeatherCard = ({ weather, onAddToFavorites }) => {
  const { favorites } = useSelector(state => state.weather);
  
  const isFavorite = favorites.some(fav => fav.id === weather?.id);

  if (!weather) return null;

  const condition = (weather.weather?.[0]?.main || '').toLowerCase();
  const variantClass =
    condition.includes('clear') ? 'is-sunny' :
    condition.includes('cloud') ? 'is-clouds' :
    condition.includes('rain') || condition.includes('drizzle') ? 'is-rain' :
    condition.includes('snow') ? 'is-snow' :
    condition.includes('thunder') ? 'is-thunder' :
    condition.includes('mist') || condition.includes('haze') || condition.includes('fog') ? 'is-mist' :
    'is-default';

  return (
    <div className={`${styles['weather-card']} ${styles[variantClass]} ${styles['animate-in']}`}>
      <div className={styles['weather-card__header']}>
        <h2 className={styles['weather-card__location']}>
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
      
      <div className={styles['weather-card__main']}>
        <div className={styles['weather-card__temperature']}>
          {formatTemperature(weather.main.temp, 'C')}
          <span style={{ marginLeft: 8, color: 'var(--text-secondary)', fontWeight: 600 }}>
            ({Math.round(convertTemperature(weather.main.temp, 'C', 'F'))}°F)
          </span>
        </div>
        <div className={styles['weather-card__condition']}>
          <img 
            src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <span className={styles['condition-text']}>{weather.weather[0].main}</span>
        </div>
      </div>

      <div className={styles['weather-card__details']}>
        <div className={styles['detail-item']}>
          <span>Feels like</span>
          <span>
            {formatTemperature(weather.main.feels_like, 'C')} / {Math.round(convertTemperature(weather.main.feels_like, 'C', 'F'))}°F
          </span>
        </div>
        <div className={styles['detail-item']}>
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className={styles['detail-item']}>
          <span>Wind</span>
          <span>{weather.wind.speed} m/s</span>
        </div>
        <div className={styles['detail-item']}>
          <span>Pressure</span>
          <span>{weather.main.pressure} hPa</span>
        </div>
      </div>

      <div className={styles['weather-card__footer']}>
        <small>Updated: {formatDate(new Date(), 'short')}</small>
      </div>
    </div>
  );
};
