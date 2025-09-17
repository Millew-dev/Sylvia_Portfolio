import React from 'react'
import TitleHeader from '../components/TitleHeader.jsx'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y:50, opacity:0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
            }
        })
    })

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="My Technical Toolbox"
                    sub="Tools I Use to Deliver Results"
                />

                <div className="tech-grid">

                    {techStackImgs.map((icon) => (
                        <div
                            key={icon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            {/* Background animation */}
                            <div className="tech-card-animated-bg" />

                            {/* Card content */}
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper flex items-center justify-center">
                                    <img
                                        src={icon.imgPath}
                                        alt={icon.name}
                                        className="w-20 h-20 object-contain"
                                    />
                                </div>
                                <div className="padding-x w-full">
                                    <p className="text-center">{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>

    )
}
export default TechStack