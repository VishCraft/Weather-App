import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeather, fetchForecast } from '../store/slices/weatherSlice';

export const useWeather = (location) => {
  const dispatch = useDispatch();
  const { currentWeather, forecast, loading, error } = useSelector(state => state.weather);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather(location));
      dispatch(fetchForecast(location));
    }
  }, [dispatch, location]);

  const refetch = () => {
    if (location) {
      dispatch(fetchWeather(location));
      dispatch(fetchForecast(location));
    }
  };

  return {
    currentWeather,
    forecast,
    loading,
    error,
    refetch,
  };
};
