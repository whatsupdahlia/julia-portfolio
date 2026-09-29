import { personalInfo } from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="section alt-bg">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-box">
          <p>
            <strong>Email:</strong> {personalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
          <p>
            <strong>Location:</strong> {personalInfo.location}
          </p>

          <div className="social-links">
            <a
              href="https://github.com/whatsupdahlia"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href= "https://www.linkedin.com/in/julia-carmela-asturga-42a3401ba/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;