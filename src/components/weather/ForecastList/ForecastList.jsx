import React from 'react';
import { convertTemperature } from '../../../utils/formatters/temperatureFormatter';

export const ForecastList = ({ forecast }) => {
  if (!forecast?.list?.length) return null;

  return (
    <div className="card" style={{ padding: '1rem', marginTop: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>5-Day Forecast</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {forecast.list.slice(0, 8).map((item, idx) => {
          const c = Math.round(item.main.temp);
          const f = Math.round(convertTemperature(item.main.temp, 'C', 'F'));
          return (
            <li key={idx} style={{ padding: '.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <span style={{ minWidth: 170 }}>{new Date(item.dt * 1000).toLocaleString()}</span>
                <span style={{ fontWeight: 600 }}>{c}°C / {f}°F</span>
                <img width="36" height="36" src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
