import { useSelector } from "react-redux";
import { formatTime } from "../helper/formathTime";
import { getWeatherIcon } from "../helper/getWeatherIcon";
import { WeatherDetailsCard } from "./WeatherDetailsCard";
import { WeatherCards } from "./WeatherCards";

export const MainWeatherCard = () => {
    const { cityData, weatherData } = useSelector((state) => state);
    const { city, country, stateProvince, } = cityData;
    const { forecastData } = weatherData;
    const currentWeather = forecastData?.list?.[0];
    const forecast = forecastData?.list

    return (
        <section className="section flex-centered flex-col gap-8 md:gap-12 relative z-10">
            <div className="container flex-centered">
                <div className="card flex flex-col
                 min-w-[90%] md:min-w-xl lg:min-w-3xl hover:scale-[1.02] transition-all duration-500">
                    {/* Location */}
                    <div className="flex items-center justify-between xs:justify-center xs:flex-col text-white mb-6 md:mb-8 gap-2">
                        <p className="heading-5 font-semibold flex items-center sm:gap-2">
                            <span className="text-base sm:text-2xl">📍</span>
                            {city}, <span className="hidden sm:inline" >{stateProvince}</span>
                            {country}
                        </p>
                        <span className='para text-white/70'>
                            {formatTime(currentWeather?.dt)}
                        </span>
                    </div>

                    {/* Main Weather Display */}
                    <div className="mb-4 xs:mb-6 sm:mb-8 gap-4 sm:gap-8 mx-2 lg:mx-5 grid xs:grid-cols-2 ">
                        <div className="flex items-center justify-between xs:flex-col xs:items-start md:px-2 lg:px-4">
                            {/*  weather icon */}
                            <div className="text-white mb-4 sm:mb-6 animate-float">
                                <div className='icon-xl hover:scale-110 transition-transform duration-300'>
                                    {getWeatherIcon(currentWeather?.weather?.[0]?.main)}
                                </div>
                            </div>

                            <div className="text-center flex-centered flex-col gap-1 sm:gap-3">
                                {/* Temperature with enhanced styling */}
                                <div className="heading-2 text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
                                    {Math.round(currentWeather?.main?.temp - 273.15)}°C
                                </div>
                                {/* Description */}
                                <div className="para text-white/90 capitalize font-medium">
                                    {currentWeather?.weather?.[0]?.description}
                                </div>
                            </div>
                        </div>

                        <div className="text-white/80 flex flex-col gap-1 xs:gap-2 sm:gap-5 items-center my-auto">
                            {/* Feels like */}
                            <div className="para w-full bg-white/10 rounded-xl p-1 sm:p-2 md:p-6 backdrop-blur-md">
                                Feels like {Math.round(currentWeather?.main?.feels_like - 273.15)}°C
                            </div>
                            
                            {/* Sunrise/Sunset */}
                            <div className="w-full flex items-center justify-between xs:flex-col gap-1 xs:gap-2 sm:gap-4">
                                <div className="flex items-center justify-center lg:justify-end sm:gap-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                    <span className='icon-sm'>🌅</span>
                                    <p className='para w-fit'>
                                        <span className="hidden xs:inline">Sunrise</span>
                                        : {formatTime(forecastData.city.sunrise)}
                                    </p>
                                </div>
                                <div className="flex items-center justify-center lg:justify-end sm:gap-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                                    <span className='icon-sm'>🌆</span>
                                    <p className='para w-fit'>
                                        <span className="hidden xs:inline">Sunset</span> 
                                        : {formatTime(forecastData.city.sunset)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Weather Details Grid */}
                    <div className="grid grid-cols-2 xs:grid-cols-4 gap-2.5 sm:gap-6 md:gap-4">
                        <WeatherDetailsCard
                            value={currentWeather?.main?.humidity + "%"}
                            label={"Humidity"}
                            icon={"💧"}
                        />
                        <WeatherDetailsCard
                            value={Math.round(currentWeather?.wind?.speed * 3.6) + " km/h"}
                            label={"Wind Speed"}
                            icon={"🍃"}
                        />
                        <WeatherDetailsCard
                            value={ Math.round(currentWeather?.visibility / 1000) + " km"}
                            label={"Visibility"} 
                            icon={"👁️"}
                        />
                        <WeatherDetailsCard
                            value={currentWeather?.main?.pressure + " hPa"}
                            label={"Pressure"}
                            icon={"🌡️"}
                        />
                    </div>
                </div>
            </div>

            {/* forecast cards */}
            <div className="container">
                <h2 className="heading-5 text-white text-center mb-6 md:mb-8 font-semibold">
                    12-Hour Forecast
                </h2>
                <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 auto-rows-max">
                    {forecast?.slice(0, 14)?.map((currData, i) => (
                        <WeatherCards key={i} item={currData} />
                    ))}
                </div>
            </div>
        </section>
    );
};