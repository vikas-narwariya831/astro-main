export const SunFlareBgContainer = ({ children }) => {
    return (
        <div className="w-full overflow-hidden relative bg-white">
            {/* Sun-bottom */}
            <img
                src="/Vectors/sun.svg"
                alt="sun"
                className="absolute bottom-2 -right-4 pointer-events-none"
            />

            {/* Flares-left */}
            <img
                src="/Vectors/half-left-flare.png"
                alt="flare-right"
                className="absolute left-0 pointer-events-none"
            />

            {children}
        </div>
    );
};
