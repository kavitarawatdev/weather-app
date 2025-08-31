// Get dynamic background gradient based on weather

export const getWeatherGradient = (condition) => {
  const gradients = {
    'clear': 'bg-gradient-to-br from-orange-400 via-yellow-700 to-amber-400',
    'clouds': 'bg-gradient-to-br from-slate-400 via-slate-600 to-slate-700', 
    'rain':'bg-gradient-to-br from-slate-700 via-blue-600 to-indigo-800',
    'snow':'bg-gradient-to-br from-slate-300 via-blue-300 to-cyan-500',
    'thunderstorm':'bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-900',
    'default': 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'
  };
  return gradients[condition?.toLowerCase()] || gradients.default;
};