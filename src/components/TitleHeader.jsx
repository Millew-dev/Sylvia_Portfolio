import React from 'react'

const TitleHeader = ({ title, sub }) => {
    return (
        <div className="flex flex-col items-center gap-4 md:gap-5">
            <div className="hero-badge whitespace-normal break-words max-w-[90%] sm:max-w-[80%] text-center px-3 sm:px-4 py-1.5 sm:py-2">
                <p className="text-xs sm:text-sm md:text-base leading-snug">{sub}</p>
            </div>
            <div>
                <h1 className="font-semibold md:text-5xl text-3xl text-center">
                    {title}
                </h1>

            </div>
        </div>

    );
};
export default TitleHeader;