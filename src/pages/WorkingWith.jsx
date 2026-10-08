import React, { useEffect, useState } from "react";
import "./WorkingWith.css";

import logo1 from "../assets/LOGO1.png";
import logo2 from "../assets/LOGO2.png";
import logo3 from "../assets/LOGO3.png";
import logo4 from "../assets/LOGO4.png";
import logo5 from "../assets/LOGO5.png";

const companies = [
    {
        number: "01",
        name: "Code Sikha",
        type: "IT EDUCATION",
        role: "VIDEO EDITOR",
        logo: logo3,
        url: "https://www.codesikha.com/lander?oref=https%3A%2F%2Fwww.google.com%2F",
    },
    {
        number: "02",
        name: "Prakhar Art Solutions",
        type: "MARKETING",
        role: "VIDEO EDITOR",
        logo: logo4,
        url: "https://prakharart.com/",
    },
    {
        number: "03",
        name: "Chit Code Technologies",
        type: "IT COMPANY",
        role: "VIDEO EDITOR",
        logo: logo2,
        url: "https://www.chitcodes.com/",
    },
    {
        number: "04",
        name: "Patchline Technologies",
        type: "TECHNOLOGY",
        role: "VIDEO EDITOR",
        logo: logo5,
        url: "https://patchlinetech.com/",
    },
    {
        number: "05",
        name: "Byteon",
        type: "STAFFING & CONSULTANCY",
        role: "VIDEO EDITOR",
        logo: logo1,
        url: "https://byteoninfotech.com/",
    },
];

function WorkingWith() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => {
                return (current + 1) % companies.length;
            });
        }, 3200);

        return () => clearInterval(interval);
    }, [isPaused]);

    const getPosition = (index) => {
        let position = index - activeIndex;

        if (position > 2) {
            position -= companies.length;
        }

        if (position < -2) {
            position += companies.length;
        }

        return position;
    };

    const handleNext = () => {
        setActiveIndex(
            (current) => (current + 1) % companies.length
        );
    };

    const handlePrevious = () => {
        setActiveIndex(
            (current) =>
                (current - 1 + companies.length) %
                companies.length
        );
    };

    const openCompany = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="working-section" id="working-with">

            {/* BACKGROUND */}

            <div className="working-red-glow"></div>
            <div className="working-red-line"></div>


            {/* HEADER */}

            <div className="working-header">

                <div className="working-small-title">
                    <span></span>
                    CURRENTLY WORKING WITH
                </div>

                <h2>
                    BRANDS & <br />
                    <span>COMPANIES.</span>
                </h2>

                <p>
                    Creating visual content and video
                    experiences for companies across
                    technology, education, marketing
                    and digital industries.
                </p>

            </div>


            {/* CAROUSEL */}

            <div
                className="carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                <button
                    className="carousel-arrow carousel-prev"
                    onClick={handlePrevious}
                    aria-label="Previous company"
                    type="button"
                >
                    ←
                </button>


                <div className="carousel-stage">

                    {companies.map((company, index) => {

                        const position = getPosition(index);

                        return (
                            <div
                                className={`company-card ${
                                    position === 0 ? "active" : ""
                                }`}
                                key={company.number}
                                style={{
                                    "--position": position,
                                }}
                                onClick={() =>
                                    openCompany(company.url)
                                }
                                role="link"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter" ||
                                        e.key === " "
                                    ) {
                                        e.preventDefault();
                                        openCompany(company.url);
                                    }
                                }}
                            >

                                {/* NUMBER */}

                                <div className="card-number">
                                    {company.number}
                                </div>


                                {/* LOGO */}

                                <div className="logo-area">

                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                    />

                                </div>


                                {/* COMPANY INFO */}

                                <div className="card-bottom">

                                    <div>

                                        <h3>
                                            {company.name}
                                        </h3>

                                        <div className="company-meta">

                                            <span>
                                                {company.type}
                                            </span>

                                            <span className="meta-dot">
                                                •
                                            </span>

                                            <span>
                                                {company.role}
                                            </span>

                                        </div>

                                    </div>


                                    <span className="card-arrow">
                                        ↗
                                    </span>

                                </div>

                            </div>
                        );
                    })}

                </div>


                <button
                    className="carousel-arrow carousel-next"
                    onClick={handleNext}
                    aria-label="Next company"
                    type="button"
                >
                    →
                </button>

            </div>


            {/* INDICATORS */}

            <div className="carousel-indicators">

                {companies.map((company, index) => (

                    <button
                        key={company.number}
                        type="button"
                        className={
                            index === activeIndex
                                ? "indicator active"
                                : "indicator"
                        }
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show ${company.name}`}
                    />

                ))}

            </div>


            {/* FREELANCE CTA */}

            <div className="freelance-box">

                <div className="freelance-content">

                    <span className="freelance-label">
                        ALSO AVAILABLE FOR
                    </span>

                    <h3>
                        FREELANCE PROJECTS
                    </h3>

                </div>


                <a href="#contact">

                    <span>
                        LET'S WORK TOGETHER
                    </span>

                    <b>
                        ↗
                    </b>

                </a>

            </div>

        </section>
    );
}

export default WorkingWith;