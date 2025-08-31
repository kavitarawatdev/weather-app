import { useDispatch, useSelector } from "react-redux";
import { fetchCityData } from "../middleware/redux_thunk";

export const WeatherError = () => {
    const dispatch = useDispatch();
    const { city } = useSelector(state => state.cityData);
    
    const handleRetry = () => {
        if (city) {
            dispatch(fetchCityData(city));
        }
    };

    return (
        <div className="flex-centered flex-col py-16 space-y-6">
            <div className="p-6 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl animate-bounce">
                <div className="text-4xl md:text-6xl">⚠️</div>
            </div>
            <div className="text-center space-y-3 px-4">
                <div className="text-red-300 text-lg md:text-xl font-semibold">
                    Could not fetch weather data
                </div>
                <div className="text-red-200/80 para-sm max-w-md mx-auto">
                    Please check your connection and try again
                </div>
            </div>
            <button 
                onClick={handleRetry}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 
                rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
            >
                Try Again
            </button>
        </div>
    );
};
