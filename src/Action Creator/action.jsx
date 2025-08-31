import { FETCH_CITY_DATA, FETCH_CITY_DATA_FAILURE, FETCH_CITY_WEATHER, SET_LOADING, SET_WEATHER_LOADING, FETCH_WEATHER_DATA_FAILURE } from "../reducer/reducer";

export const setLoadingCity=()=>{
    return{type: SET_LOADING}
}

export const setErrorCity=(data)=>{
    return{type:FETCH_CITY_DATA_FAILURE, payload:data}
}

export const setCityData=(data)=>{
    return{type:FETCH_CITY_DATA, payload:data}
}

export const setLoadingWeather=()=>{
    return{type: SET_WEATHER_LOADING}
}

export const setErrorWeather=(data)=>{
    return{type:FETCH_WEATHER_DATA_FAILURE, payload:data} // Corrected this line
}

export const setWeatherData=(data)=>{
    return{type:FETCH_CITY_WEATHER, payload:data}
}