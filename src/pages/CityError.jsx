export const CityError = () => {
    return (
        <div className="flex-centered flex-col py-16 space-y-6">
            <div className="p-6 bg-red-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl animate-bounce">
                <div className="text-4xl md:text-6xl">🚫</div>
            </div>
            <div className="text-center space-y-3 px-4">
                <div className="text-red-300 text-lg md:text-xl font-semibold">
                    City not found
                </div>
                <div className="text-red-200/80 para-sm max-w-md mx-auto">
                    Please check the spelling and try again
                </div>
            </div>
        </div>
    );
};
