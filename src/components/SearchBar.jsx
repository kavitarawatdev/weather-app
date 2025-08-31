import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchCityData } from "../middleware/redux_thunk";
import { useDispatch, useSelector } from "react-redux";

export const SearchBar = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    
    const { isLoading } = useSelector(state => state.cityData);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        dispatch(fetchCityData(city.trim()));
        setCity("");
    };


    return (
        <section className="section relative z-10">
            <div className="container">
                <div className="max-w-xs xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
                        <form action=""
                        className='relative group'
                        onSubmit={handleFormSubmit}
                        >
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Search for any city..."
                            aria-label="Search for a city"
                            className="w-full py-2 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 pr-16 md:pr-20 heading-6 font-medium
                            bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl 
                            text-white placeholder-white/60 outline-none 
                            focus:border-white/40 focus:bg-white/15 focus:shadow-2xl
                            hover:bg-white/12 transition-all duration-300"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleFormSubmit}
                            disabled={isLoading || !city.trim()}
                            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 
                            p-1.5 sm:p-3 md:p-4 bg-white/20 hover:bg-white/30 disabled:opacity-50 
                            disabled:cursor-not-allowed rounded-xl transition-all duration-300 
                            hover:scale-105 group-hover:shadow-lg"
                        >
                            <FiSearch className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </button>
                        
                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};