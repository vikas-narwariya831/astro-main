const Loader = ({ bounce = false, zodiacSize = 'w-36 h-36', logoSize = 'w-14 h-14' }) => {
    return (
        <div className="flex w-96 justify-center items-center">
            <img src="/zodiac-circle.png" className={`absolute ${zodiacSize} slow-spin`} />

            <img src="/logo-center.png" className={`${logoSize} ${bounce && 'animate-bounce'}`} />
        </div>
    );
};

export { Loader };