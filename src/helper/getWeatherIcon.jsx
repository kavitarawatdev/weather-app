
export const getWeatherIcon = (condition) => {
  const icons = {
    'clear': '☀️',
    'clouds': '☁️', 
    'rain': '🌧️',
    'snow': '❄️',
    'thunderstorm': '⛈️',
    'drizzle': "🌦️",
    'mist': "🌫️",
    'fog': "🌫️",
    'default': '🌤️'
  };
  return icons[condition?.toLowerCase()] || icons.default;
};
