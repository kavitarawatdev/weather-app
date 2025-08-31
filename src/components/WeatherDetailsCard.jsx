export const WeatherDetailsCard = ({ value, label, icon }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1.5 sm:p-3 md:p-4 flex-centered flex-col sm:gap-2 
        border border-white/20 hover:bg-white/15 hover:scale-105 hover:border-white/30 
        transition-all duration-300 cursor-pointer group">
            <div className='icon-sm group-hover:animate-bounce'>{icon}</div>
            <div className="text-white/70 text-xs md:text-sm font-medium">{label}</div>
            <div className="text-white font-bold text-sm md:text-lg">
                {value}
            </div>
        </div>
    );
};