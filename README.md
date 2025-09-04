# Weather App (React + Vite)

A modern, fast, and clean weather application built with React and Vite. It fetches current conditions and forecast data from OpenWeather and showcases a polished light/dark theme, routing, state management, and tests.

## Features
- Fast dev/build with Vite
- React 18 + React Router v6
- State management with Redux Toolkit
- API layer with Axios and interceptors
- Theming with light/dark toggle (persisted)
- WeatherCard with temperatures in °C and °F
- Forecast list preview
- Vitest + Testing Library setup
- GitHub Actions CI (install, test, build)

## Tech Stack
- Build tool: Vite
- UI: React, CSS Modules + global CSS
- Routing: react-router-dom
- State: @reduxjs/toolkit, react-redux
- HTTP: axios
- Testing: vitest, @testing-library/react, jsdom
- CI: GitHub Actions

## Project Structure
```
src/
  components/
    common/ (Button, Spinner, ErrorBoundary)
    layout/ (Header, Footer, Layout)
    weather/ (WeatherCard, ForecastList, LocationPicker)
  contexts/ (ThemeContext)
  hooks/ (useWeather, useGeolocation, useDebounce)
  pages/ (Home, Dashboard, Settings, About, NotFound)
  routes/ (AppRouter)
  services/api/ (baseApi, weatherApi)
  store/ (index, slices/weatherSlice)
  styles/ (globals.css)
  index.jsx, App.jsx
public/
  icons/weather/
```

## Prerequisites
- Node.js 18+ (recommended) and npm
- An OpenWeather API key

## Setup
1) Install dependencies
```sh
npm install
```
2) Configure environment
```sh
cp .env.example .env
# Edit .env and set your real key
VITE_OPENWEATHER_API_KEY=your_real_key
```

## Development
Start the dev server (default: http://localhost:3000):
```sh
npm run dev
```

## Build & Preview
Production build:
```sh
npm run build
```
Preview the production build locally:
```sh
npm run preview
```

## Testing
Run unit tests (Vitest + jsdom):
```sh
npm test
```
Open the interactive UI runner:
```sh
npm run test:ui
```
Vitest config: `vite.config.test.js`

## Environment Variables
- `VITE_OPENWEATHER_API_KEY` — your OpenWeather API key
- `VITE_API_BASE_URL` — defaults to `https://api.openweathermap.org/data/2.5`
- `VITE_APP_NAME` — display name

## API Layer
- `src/services/api/baseApi.js` — axios instance with interceptors and base URL
- `src/services/api/weatherApi.js` — wrappers for weather/forecast endpoints

Example usage (already wired via hooks and store):
```js
import { weatherApi } from '@/services/api/weatherApi';
const data = await weatherApi.getCurrentWeather('London');
```

## Redux Store
- `src/store/index.js` — configures Redux store
- `src/store/slices/weatherSlice.js` — async thunks and reducers for weather data

## Theming
- `src/contexts/ThemeContext.jsx` — provides theme state and toggle
- Persists to localStorage and sets `data-theme` on the document

## CI
GitHub Actions workflow at `.github/workflows/ci.yml` runs install, tests, and build on pushes/PRs to `main`.

## Troubleshooting
- Port in use: run `npm run dev -- --port 3001` or stop the other process.
- Env not picked up: ensure `.env` exists and restart the dev server after changes.
- Tests fail with ESM plugin errors: tests use `vite.config.test.js` (no plugin import). Run `npm test`.
- Clean install issues:
```sh
rm -rf node_modules package-lock.json
npm install
```

## Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm test` — run tests
- `npm run test:ui` — run tests with UI

---
Made with React + Vite. Contributions welcome.
