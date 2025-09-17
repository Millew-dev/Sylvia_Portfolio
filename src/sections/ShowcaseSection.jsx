
import React from 'react'
import { useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef =useRef(null);

    const proj3Ref = useRef(null);
    const proj4Ref = useRef(null);
    const proj5Ref = useRef(null);
    const pro1Ref = useRef(null);
    const proj2Ref = useRef(null);

    const project =[proj3Ref.current, proj4Ref.current,
        proj5Ref.current, pro1Ref.current, proj2Ref.current];


    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        //Animations for each project showcase//
        project.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

    }, []);
    return (
        /* Start Here*/
        <section id="work" ref={sectionRef} className="app-showcase bg-black py-16">
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="showcaselayout gap-10">

                    {/* Left: Title & Description */}
                    <div className="md:w-1/3 text-left">
                        <h2 className="text-5xl sm:text-6xl font-bold text-white inline-block pb-2 border-b-4 border-yellow-500">
                            Projects
                        </h2>
                    </div>

                    {/* Stretching Description */}
                    <div className="md:w-2/3 text-left">
                        <p className="mt-2 text-white text-2xl font-semibold leading-relaxed">
                            I worked on these projects as both a Data Scientist and ML Engineer,
                            building machine learning models and analyzing data while also
                            deploying them in production.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {/* Project 1 */}
                        <div className="project relative bg-[#111] rounded-md shadow-md overflow-hidden px-6 py-4
                transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/30"
                             ref={proj3Ref}>

                            {/* Title + GitHub Arrow */}
                            <div className="flex justify-between items-start">
                                <h2 className="project-title mb-4 text-xl text-gray-600">Credit Scoring Model – Loan Default Prediction</h2>

                                {/* GitHub Link Icon */}
                                <a href="https://github.com/SylviaMwai/CREDIT-SCORING-MODEL"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-yellow-500 text-2xl">
                                    ↗
                                </a>
                            </div>

                            {/* Image */}
                            <div className="image-wrapper mb-3">
                                <img src="/images/proj3.jpg" alt="Credit Scoring" className="w-full h-auto rounded" />
                            </div>

                            {/* Description */}
                            <div className="text-content bg-black p-3 rounded-md text-white text-sm">
                                <h3 className="font-bold text-xl">01.</h3>
                                <p>Developed ML models to assess loan default risk, improving fraud detection,
                                    early risk flagging, and reducing lending losses.</p>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="project relative bg-[#111] rounded-md shadow-md overflow-hidden px-6 py-4
                transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/30"
                             ref={proj4Ref}>

                            <div className="flex justify-between items-start">
                                <h2 className="project-title mb-4 text-xl text-gray-600">Exploratory NFL Player Analysis</h2>
                                <a href="https://github.com/SylviaMwai/NFL-Players-Analytics-EDA-"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-yellow-500 text-2xl">
                                    ↗
                                </a>
                            </div>

                            <div className="image-wrapper mb-3">
                                <img src="/images/proj4.jpg" alt="NFL Player Analysis" className="w-full h-auto rounded" />
                            </div>

                            <div className="text-content bg-black p-3 rounded-md text-white text-sm">
                                <h3 className="font-bold text-xl">02.</h3>
                                <p>Analyzed NFL player attributes to reveal trends in physical metrics and education,
                                    providing insights for talent scouting and development.</p>
                            </div>
                        </div>


                        {/* Project 3 */}
                        <div className="project relative bg-[#111] rounded-md shadow-md overflow-hidden px-6 py-4
                transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/30"
                             ref={proj5Ref}>

                            <div className="flex justify-between items-start">
                                <h2 className="project-title mb-4 text-xl text-gray-600">FitGuru Classifier – Workout Classification Using KNN</h2>
                                <a href="https://github.com/SylviaMwai/FitGuru-Classifier-Using-KNN"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-yellow-500 text-2xl">
                                    ↗
                                </a>
                            </div>

                            <div className="image-wrapper mb-3">
                                <img src="/images/proj5.jpg" alt="FitGuru Classifier" className="w-full h-auto rounded" />
                            </div>

                            <div className="text-content bg-black p-3 rounded-md text-white text-sm">
                                <h3 className="font-bold text-xl">03.</h3>
                                <p>Developed an ML model to classify workouts (Cardio vs Strength) from fitness tracker
                                    data, boosting accuracy in logging and fitness planning.</p>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="project relative bg-[#111] rounded-md shadow-md overflow-hidden px-6 py-4
                transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/30"
                             ref={pro1Ref}>

                            <div className="flex justify-between items-start">
                                <h2 className="project-title mb-4 text-xl text-gray-600">KPMG Data Analytics Consulting Simulation</h2>
                                <a
                                    href="/cv/SYLVIA-KPMG.pdf"  // 👈 put your PDF path here
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-yellow-500 text-2xl"
                                    title="Download Certificate"
                                >
                                    ↗
                                </a>
                            </div>

                            <div className="image-wrapper mb-3">
                                <img src="/images/pro1.png" alt="KPMG Simulation" className="w-full h-auto rounded" />
                            </div>

                            <div className="text-content bg-black p-3 rounded-md text-white text-sm">
                                <h3 className="font-bold text-xl">04.</h3>
                                <p>Built customer segmentation dashboards using Excel & Power BI,
                                    improving targeting precision by 20% and operational efficiency by 12%.</p>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="project relative bg-[#111] rounded-md shadow-md overflow-hidden px-6 py-4
                transition-transform duration-300 hover:scale-105 hover:shadow-yellow-500/30"
                             ref={proj2Ref}>

                            <div className="flex justify-between items-start">
                                <h2 className="project-title mb-4 text-xl text-gray-600">Omdena – Airbnb Dynamic Pricing</h2>
                                <a
                                    href="/cv/SYLVIA-OMDENA.pdf"  // 👈 put your PDF path here
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-yellow-500 text-2xl"
                                    title="Download Certificate"
                                >
                                    ↗
                                </a>
                            </div>

                            <div className="image-wrapper mb-3 flex justify-center">
                                <img src="/images/proj2.png" alt="Airbnb Dynamic Pricing" className="w-3/4 h-80 rounded-md" />
                            </div>

                            <div className="text-content bg-black p-3 rounded-md text-white text-sm">
                                <h3 className="font-bold text-xl">05.</h3>
                                <p>Collaborated with 15+ engineers to build ML models in Python (Scikit-Learn) that
                                    optimized Airbnb pricing, boosting accuracy by 8%, speeding processing by 25%,
                                    and driving 12% projected revenue growth.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}
export default ShowcaseSection