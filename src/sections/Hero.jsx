import React from "react";
import Button from '../components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'Power2.inOut' }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 z-0 pointer-events-none">
                <img src="/images/bg.png" alt="background" className="w-full h-auto" />
            </div>

            <div className="hero-layout flex-col md:flex-row h-auto md:h-dvh relative z-10">
                {/* LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-1/2 w-screen md:pl-0 px-5">
                    <div className="flex flex-col gap-7">
                        {/* Title */}
                        <div className="hero-text">
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Transforming Data<br/>
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Into Actionable<br/>
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                Intelligence
                            </h1>
                        </div>

                        {/* Mobile-only image */}
                        <div className="block md:hidden mt-4">
                            <img
                                src="/images/sy.png"
                                alt="Sylvia profile"
                                className="w-full h-auto object-contain rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 md:text-xl leading-relaxed">
                            Hi, I'm Sylvia, a Data Scientist and ML Engineer<br />
                            with a passion for turning data into intelligent<br />
                            systems that drive real world impact.
                        </p>

                        {/* Button */}
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="Download CV"
                            href="/cv/my-resume.pdf"
                            download="my-resume.pdf"
                        />
                    </div>
                </header>

                {/* RIGHT: PROFILE IMAGE */}
                <figure className="hidden md:block md:w-5/12 md:mt-0 relative z-10 pointer-events-none pr-30">
                    <div className="hero-3d-layout h-[60vh] md:h-screen w-full -mt-20
      md:translate-x-4 md:-translate-y-4
      lg:translate-x-6 lg:-translate-y-6
      xl:translate-x-8 xl:-translate-y-8
      transition-transform duration-300">
                        <img
                            src="/images/sy.png"
                            alt="Sylvia profile"
                            className="w-full h-full object-contain rounded-lg md:opacity-100"
                        />
                    </div>
                </figure>




            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;
