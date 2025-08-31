export const Error = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      <div className="p-6 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl">
        <div className="text-6xl animate-bounce">⚠️</div>
      </div>
      <div className="text-center space-y-2">
        <div className="text-red-300 text-lg font-semibold">{message}</div>
        <div className="text-red-200/80">Please check your connection and try again</div>
      </div>
      <button 
        onClick={onRetry}
        className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
};