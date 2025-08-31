import { useDispatch, useSelector } from "react-redux";
import { getWeatherGradient } from "../helper/getWeatherGradient";
import { SearchBar } from "../components/SearchBar";
import { Loading } from "../components/Loading";
import { MainWeatherCard } from "../components/MainWeatherCard";
import { WeatherError } from "./WeatherError";
import { CityError } from "./CityError";
import { fetchCityData } from "../middleware/redux_thunk";
import { useEffect } from "react";
import { getLocalStorage, STORAGE_KEY } from "../store/store";

export const WeatherApp = () => {
    const { cityData, weatherData, errorMessage } = useSelector((state) => state);
    const { isWeatherLoading, isWeatherError, forecastData, message } = weatherData;
    const { isLoading, isError, city } = cityData;
    const dispatch=useDispatch()
    // Get weather condition for dynamic background
    const currentCondition = forecastData?.list?.[0]?.weather?.[0]?.main?.toLowerCase();
    useEffect(() => {
        const recent=getLocalStorage(STORAGE_KEY);
        console.log(STORAGE_KEY, recent)
        recent? dispatch(fetchCityData(recent)):city=="" || !city || !recent? dispatch(fetchCityData("delhi")):dispatch(fetchCityData(city));

    }, []);

    return (
        <div className={`min-h-screen ${getWeatherGradient(currentCondition)} transition-all duration-1000`}>
            {/* Floating background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Header with enhanced styling */}
            <header className="section relative z-10">
                <div className="container flex-centered">
                    <div className="flex-centered gap-3 flex-col">
                        <h1 className="heading-2 text-white p-3 w-fit animate-pulse-glow">
                            ⛅ Weather App
                        </h1>
                        <p className="para-md text-white/80 font-medium">
                            By Kavita Rawat
                        </p>
                    </div>
                </div>
            </header>

            {/*Search Bar */}
            <SearchBar />

            {/* Content with states */}
            <div className="relative z-10">
                {city === "" && (
                    <div className="flex-centered flex-col h-48 md:h-64 text-center text-white space-y-4">
                        <div className="text-6xl md:text-8xl animate-bounce">🔍</div>
                        <p className="para-md text-white/80 max-w-md mx-auto px-4">
                            Search for any city to get started with weather insights
                        </p>
                    </div>
                )}

                {   
                isLoading ? <Loading type={"city"}/>
                :isWeatherLoading ? <Loading type={"weather"}/>
                :""
                }
                {isError && <CityError message={errorMessage}/>}
                {isWeatherError && <WeatherError message={message}/>}

                {/* Enhanced main card */}
                {forecastData && !isWeatherLoading && <MainWeatherCard />}
            </div>
        </div>
    );
};
