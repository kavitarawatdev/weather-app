export const Loading = ({ type }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-2xl animate-pulse">
             {type === "city" ? "🔍" : "🌤️"}
          </div>
        </div>
        <div className="text-white/80 text-lg font-medium animate-pulse">
          {type === "city" ? "Searching location..." : "Loading weather data..."}
        </div>
      </div>
    </>
  );
};