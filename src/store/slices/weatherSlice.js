import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { weatherApi } from '../../services/api/weatherApi';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location) => {
    const response = await weatherApi.getCurrentWeather(location);
    return response;
  }
);

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (location) => {
    const response = await weatherApi.getForecast(location);
    return response;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: null,
    forecast: null,
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const newFavorite = action.payload;
      if (!state.favorites.find(fav => fav.id === newFavorite.id)) {
        state.favorites.push(newFavorite);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites, clearError } = weatherSlice.actions;
export default weatherSlice.reducer;
