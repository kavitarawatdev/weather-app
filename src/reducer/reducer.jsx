// action types
export const FETCH_CITY_DATA = 'city/fetch_data';
export const FETCH_CITY_DATA_FAILURE = 'city/fetch_error';
export const SET_LOADING = 'city/loading';
export const FETCH_CITY_WEATHER = 'city/fetch_weather';
export const SET_WEATHER_LOADING = 'city/weather_loading';
export const FETCH_WEATHER_DATA_FAILURE = 'city/weather_error';

const cityInitState = {
  cityData: {
    isLoading: false,
    isError: false,
    city: "",
    lon: "",
    lat: "",
    country: "",
    stateProvince: "", 
    errorMessage:""
  },
  weatherData: {
    isWeatherLoading: false,
    isWeatherError: false,
    forecastData: null,
    message:""
  }
};

export const cityReducer = (state = cityInitState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        cityData: {
          ...state.cityData,
          isLoading: true,
          isError: false,
        }
      };

    case FETCH_CITY_DATA: {
      if (!action.payload || action.payload.length === 0) {
        return {
          ...state,
          cityData: {
            ...state.cityData,
            isLoading: false,
            isError: true,
          }
        };
      }
      
      const { country, lon, lat, state: cityState, name } = action.payload[0];
      return {
        ...state,
        cityData: {
          ...state.cityData,
          isLoading: false,
          isError: false,
          city: name,
          lon,
          lat,
          country,
          stateProvince: cityState || "",
        }
      };
    }

    case FETCH_CITY_DATA_FAILURE:
      return {
        ...state,
        cityData: {
          ...state.cityData,
          isLoading: false,
          isError: true,
          errorMessage:action.payload
        }
      };

    case SET_WEATHER_LOADING:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isWeatherLoading: true,
          isWeatherError: false,
        }
      };

    case FETCH_CITY_WEATHER:{
      console.log("weather data: ", action.payload)
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isWeatherLoading: false,
          isWeatherError: false,
          forecastData:action.payload
        }
      };
    }

    case FETCH_WEATHER_DATA_FAILURE:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isWeatherLoading: false,
          isWeatherError: true,
          message:action.payload
        }
      };

    default:
      return state;
  }
};