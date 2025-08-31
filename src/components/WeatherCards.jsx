import { formatDate } from "../helper/FormatDate";
import { formatTime } from "../helper/formathTime";
import { formatTemp } from "../helper/FormatTemp";
import { getWeatherIcon } from "../helper/getWeatherIcon";

export const WeatherCards = ({ item }) => {
    return (
        <div className="flex-centered flex-col gap-3 rounded-2xl p-3 md:p-4 w-full
        bg-white/10 backdrop-blur-md border border-white/20 
        hover:bg-white/15 hover:scale-105 hover:-translate-y-1 hover:border-white/30
        transition-all duration-300 cursor-pointer group">
            
            <div className="text-white/80 flex-centered flex-col">
                <span className='para-sm font-medium'>{formatDate(item.dt_txt)}</span>
                <span className='para-xs text-white/60'>{formatTime(item?.dt)}</span>
            </div>
            
            <div className="icon-md group-hover:animate-bounce">
                {getWeatherIcon(item.weather?.[0]?.main)}
            </div>
            
            <div className="text-white font-bold para-md">
                {formatTemp(item.main.temp)}°
            </div>
            
            <div className="text-white/70 para-xs capitalize leading-tight text-center">
                {item.weather?.[0]?.description}
            </div>
            
            <div className="mt-2 text-white/60 para-xs flex items-center justify-between gap-2 md:gap-3">
                <div>H: {formatTemp(item.main.temp_max)}°</div>
                <div>L: {formatTemp(item.main.temp_min)}°</div>
            </div>
        </div>
    );
};