import React, { useEffect, useState } from "react";
import "./loader.css";
import logo from "../assets/logo.png";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Smooth Exit Animation Delay
          setTimeout(() => {
            setIsFadingOut(true);
          }, 200);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`dark-loader ${isFadingOut ? "loader-fade-exit" : ""}`}>
      {/* Deep Dark Ambient Spotlight */}
      <div className="studio-spotlight"></div>

      {/* Center Hero Section */}
      <div className="loader-center">
        {/* Subtle Rotating Focus Ring */}
        <div className="focus-ring"></div>

        {/* Logo with Soft Glow */}
        <div className="logo-holder">
          <img src={logo} alt="Anuj Solanki" className="dark-logo" />
        </div>

        {/* Brand Name & Credits */}
        <div className="brand-header">
          <h1 className="title-text">ANUJ SOLANKI</h1>
          <div className="subtitle-tags">
            <span>VIDEO EDITOR</span>
            <span className="dot">•</span>
            <span>FILMMAKER</span>
            <span className="dot">•</span>
            <span>STORYTELLER</span>
          </div>
        </div>

        {/* Film Strip Progress Loader */}
        <div className="film-loader-block">
          <div className="track-header">
            <span className="track-title">LOADING REEL</span>
            <span className="track-count">{progress}%</span>
          </div>

          <div className="dark-progress-track">
            <div
              className="dark-progress-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="head-light"></div>
            </div>
          </div>

          {/* Film Strip Perforations Graphic */}
          <div className="film-dots">
            <span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </div>

      {/* Minimal Footer Info */}
      <div className="loader-footer">
        <span>CREATIVE PORTFOLIO</span>
        <span>EST. 2026</span>
      </div>
    </div>
  );
};

export default Loader;