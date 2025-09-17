import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            {/* Responsive grid: stack on small, 2 cols on small tablets, 3 cols on large screens (unchanged for desktop) */}
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {abilities.map(({ imgPath, title, desc}) => (
                    <div
                        key={title}
                        className="card-border rounded-xl p-6 md:p-8 flex flex-col gap-3 md:gap-4"
                    >
                        <div className="size-12 md:size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-xl md:text-2xl font-semibold mt-1 md:mt-2">{title}</h3>
                        <p className="text-white-50 text-base md:text-lg leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>

        </div>

    )
}
export default FeatureCards