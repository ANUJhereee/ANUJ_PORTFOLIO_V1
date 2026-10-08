import { useEffect, useState } from "react";
import "./Content.css";

const videos = [
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155939/reel-9.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155925/reel-7.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155911/reel-1.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155910/reel-3.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155903/reel-8.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788155892/reel-2.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788154865/reel-6.mp4",
  "https://res.cloudinary.com/oddeljyf/video/upload/v1791050189/manasvi_csi_for_anuj_webpage.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788266225/MANASVI_CSI_MARKETING__01_Final.mp4",
  "https://res.cloudinary.com/l4cvxluz/video/upload/v1788266218/JINAAN_CSI_LOW_QUALITY.mp4",
];

const videoUrl = (url) =>
  url.replace(
    "/video/upload/",
    "/video/upload/w_720,q_auto,f_auto/"
  );

const posterUrl = (url) =>
  url
    .replace(
      "/video/upload/",
      "/video/upload/so_0,w_640,q_auto,f_auto/"
    )
    .replace(".mp4", ".jpg");

function Content() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [modalClosing, setModalClosing] = useState(false);

  // Hover par sirf wahi video load hoga
  const handleMouseEnter = (e, url) => {
    const video = e.currentTarget.querySelector(
      ".portfolio-video"
    );

    if (!video) return;

    if (video.dataset.loaded !== "true") {
      video.src = videoUrl(url);
      video.dataset.loaded = "true";
      video.load();
    }

    const poster =
      e.currentTarget.querySelector(".portfolio-poster");

    if (poster) {
      poster.classList.add("poster-hidden");
    }

    video.play().catch(() => {});
  };

  // Mouse leave par video stop
  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector(
      ".portfolio-video"
    );

    const poster =
      e.currentTarget.querySelector(".portfolio-poster");

    if (!video) return;

    video.pause();

    video.removeAttribute("src");
    video.load();

    video.dataset.loaded = "false";

    if (poster) {
      poster.classList.remove("poster-hidden");
    }
  };

  // Open animation
  const openVideo = (url) => {
    setActiveVideo(videoUrl(url));
    setModalClosing(false);
  };

  // Close animation
  const closeVideo = () => {
    setModalClosing(true);

    setTimeout(() => {
      setActiveVideo(null);
      setModalClosing(false);
    }, 500);
  };

  // ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeVideo) {
        closeVideo();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [activeVideo]);

  // Prevent background scroll
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <>
      <section className="portfolio-section">

        {/* BACKGROUND ANIMATION */}

        <div className="ambient ambient-one"></div>
        <div className="ambient ambient-two"></div>
        <div className="ambient ambient-three"></div>

        <div className="ambient-grid"></div>

        {/* HEADER */}

        <div className="portfolio-header">

          <div className="portfolio-label">
            <span className="label-dot"></span>

            <span>
              SELECTED WORK
            </span>

            <span className="label-year">
              / 2025 — 2026
            </span>
          </div>

          <div className="portfolio-type">
            VIDEO / EDIT / STORY
          </div>

        </div>

        {/* TITLE */}

        <div className="portfolio-heading">

          <span className="heading-number">
            02
          </span>

          <div>
            <h2>
              BEHIND
              <br />
              <span>THE FRAME.</span>
            </h2>
          </div>

        </div>

        {/* DIVIDER */}

        <div className="section-line">
          <span></span>

          <small>
            10 WORKS
          </small>
        </div>

        {/* VIDEO GRID */}

        <div className="portfolio-grid">

          {videos.map((video, index) => (
            <div
              className="video-card"
              key={`${video}-${index}`}
              onMouseEnter={(e) =>
                handleMouseEnter(e, video)
              }
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                openVideo(video)
              }
            >

              <div className="video-wrapper">

                {/* POSTER */}

                <img
                  className="portfolio-poster"
                  src={posterUrl(video)}
                  alt=""
                  loading="lazy"
                  draggable="false"
                />

                {/* VIDEO */}

                <video
                  className="portfolio-video"
                  muted
                  loop
                  playsInline
                  preload="none"
                  data-loaded="false"
                />

                {/* DARK HOVER */}

                <div className="video-shade"></div>

                {/* PLAY BUTTON */}

                <div className="play-button">

                  <div className="play-circle">

                    <span className="play-icon"></span>

                  </div>

                </div>

                {/* RED EDGE */}

                <div className="red-edge"></div>

              </div>

            </div>
          ))}

        </div>

        {/* FOOTER */}

        <div className="portfolio-footer">

          <span>
            EVERY FRAME HAS A REASON.
          </span>

          <span>
            ANUJ SOLANKI
          </span>

        </div>

      </section>

      {/* =================================================
          VIDEO MODAL
      ================================================= */}

      {activeVideo && (
        <div
          className={`video-modal ${
            modalClosing
              ? "modal-closing"
              : ""
          }`}
          onClick={closeVideo}
        >

          {/* CLOSE */}

          <button
            className="modal-close"
            onClick={(e) => {
              e.stopPropagation();
              closeVideo();
            }}
            aria-label="Close video"
          >
            <span></span>
            <span></span>
          </button>

          {/* VIDEO */}

          <div
            className="modal-video-container"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <video
              src={activeVideo}
              controls
              autoPlay
              playsInline
              preload="auto"
            />

          </div>

        </div>
      )}
    </>
  );
}

export default Content;