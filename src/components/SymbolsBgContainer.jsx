
export const SymbolsBgContainer = ({ children, topFizzy = false }) => {
    return (
        <div className={`w-full overflow-hidden relative bg-cream`}>

            {/* *****Sun-top****** */}
            <img src="/Vectors/sun.svg" alt="sun" className="absolute top-2 lg:top-5 pointer-events-none" />

            {/* *****Sun-bottom****** */}
            <img src="/Vectors/sun.svg" alt="sun" className="absolute hidden lg:block bottom-2 right-5 pointer-events-none" />

            {/* *****Saturn***** */}
            <img src="/Vectors/saturn.svg" alt="saturn" className="absolute hidden lg:block top-0 left-1/2 transform -translate-x-1/2 pointer-events-none" />

            {/* *****flares-left****  */}
            <img src="/Vectors/half-bottom-flare.svg" alt="flare-bottom" className="absolute bottom-0 left-0 pointer-events-none" />

            {/* *****flares-right****  */}
            <img src="/Vectors/half-right-flare.png" alt="flare-right" className="absolute hidden lg:block right-0 pointer-events-none" />

            {/* ****moon**** */}
            <img src="/Vectors/moon.svg" alt="moon" className="absolute hidden lg:block bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-none" />

            {/* ****bottom-fizzy**** */}
            <img src="/Vectors/bottom-fizzy.png" alt="bottom-fizzy" className="absolute left-0 right-0 bottom-0 w-full z-10 pointer-events-none" />

            {/* ****top-fizzy**** */}
            {topFizzy && <img src="/Vectors/top-fizzy.png" alt="top-fizzy" className="absolute left-0 right-0 top w-full pointer-events-none" />}


            {children}


        </div>
    )
}
