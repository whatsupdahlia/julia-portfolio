import { personalInfo } from "../data/portfolioData";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I AM</p>
          <h1>Julia Asturga</h1>
          <h2>{personalInfo.title}</h2>
          <p className="hero-text">{personalInfo.intro}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <span className="floating-tag one">Web Developer</span>
          <span className="floating-tag two">UI Lover</span>
          <span className="floating-tag three">Mobile Creator</span>

          <img
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;