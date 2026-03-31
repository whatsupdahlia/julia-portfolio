import { personalInfo } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-label">A LITTLE ABOUT ME</span>
        <h2 className="section-title">More than just code</h2>

        <div className="about-panel">
          <div className="about-card">
            <p className="section-text">{personalInfo.about}</p>
          </div>

          <div className="quote-card">
            <p>
              I like creating digital spaces that feel soft, thoughtful, and
              alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;