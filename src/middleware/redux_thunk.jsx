import {
  setCityData,
  setErrorCity,
  setErrorWeather,
  setLoadingCity,
  setLoadingWeather,
  setWeatherData,
} from "../Action Creator/action";
import { setLocalStorage, STORAGE_KEY } from "../store/store";

const API_KEY = import.meta.env.VITE_API_KEY;


export const fetchCityData = (city) => {
  return async (dispatch) => {
    if (!city || typeof city !== 'string' || city.trim() === '') {
      dispatch(setErrorCity('Please enter a city name'));
      return;
    }

    dispatch(setLoadingCity());
    try {
      const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city.trim())}&appid=${API_KEY}`;
      const response = await fetch(URL);
      
      if (!response.ok) {
        dispatch(setErrorCity(`Failed to fetch city data: ${response.status}`));
      }
      
      const data = await response.json();
      
      if (!data || data.length === 0) {
        throw new Error('City not found');
      }
      
      dispatch(setCityData(data));

       // 🚀 AUTO-FETCH WEATHER DATA
      const { lat, lon } = data[0];
      if (lat && lon) {
        console.log("Auto-fetching weather after city fetch");
        dispatch(fetchWeatherData(city, lon, lat));
      }
    } catch (error) {
      console.error('City fetch error:', error);
      dispatch(setErrorCity(error.message));
    }
  };
};

export const fetchWeatherData = (city, lon, lat) => {
    console.log("inside fetchweather", lon, lat);
  return async (dispatch) => {
    if (typeof lat !== 'number' || typeof lon !== 'number') {
      dispatch(setErrorWeather('Invalid coordinates'));
      return;
    }

    dispatch(setLoadingWeather());
    try {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      console.log(URL);
      const response = await fetch(URL);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.status}`);
      }
      
      const data = await response.json();
      setLocalStorage(STORAGE_KEY,city)
      dispatch(setWeatherData(data));
    } catch (error) {
      console.error('Weather fetch error:', error);
      dispatch(setErrorWeather(error.message));
    }
  };
};