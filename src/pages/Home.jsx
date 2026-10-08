
import "./Home.css";

function Home() {
    return (
        <main className="home">

            <div className="overlay"></div>

            {/* =========================
                TOP BAR
            ========================= */}
            <header className="top-bar">
                <span>PORTFOLIO / 2025-2026</span>
                <span>INDIA</span>
            </header>


            {/* =========================
                MAIN CONTENT
            ========================= */}
            <section className="hero">

                {/* MAIN TITLE */}

                <div className="hero-title">

                    <p>VIDEO EDITOR</p>

                    <h1>
                        ANUJ
                        <br />
                        SOLANKI
                    </h1>

                    <h2>
                        Visual Storyteller
                    </h2>

                </div>


                {/* INTRO */}

                <div className="intro">

                    <p>
                        I make moments
                        <br />
                        impossible to forget.
                    </p>

                </div>


                {/* SERVICES */}

                <div className="services">

                    <span>CINEMATOGRAPHY</span>
                    <span>FILM EDITING</span>
                    <span>VISUAL STORYTELLING</span>

                </div>


                {/* =========================
                    BOTTOM
                ========================= */}
                <div className="bottom">

                    <div className="socials">

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/anuj.solanki.__/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            INSTAGRAM
                        </a>
                        <a
                            href="mailto:aanujx007@gmail.com"
                        >
                            EMAIL
                        </a>


                        {/* Phone */}
                        <a
                            href="tel:+919301992252"
                        >
                            CALL
                        </a>


                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919301992252"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WHATSAPP
                        </a>

                    </div>


                    {/* WhatsApp Contact */}

                    <a
                        href="https://wa.me/919301992252?text=Hi%20Anuj%2C%20I%20want%20to%20discuss%20a%20video%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact"
                    >
                        LET'S WORK →
                    </a>

                </div>

            </section>

        </main>
    );
}

export default Home;

