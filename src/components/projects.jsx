import { projects } from "../data/portfolioData";

function Projects() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">THINGS I’VE BUILT</span>
        <h2 className="section-title">Selected projects</h2>

        <div className="projects-grid">
          <div className="project-card featured">
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>

            <div className="tech-list">
              {featured.tech.map((item) => (
                <span className="tech-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <a href={featured.link} className="project-link">
              View Project
            </a>
          </div>

          <div className="projects-side">
            {others.map((project) => (
              <div className="project-card small" key={project.title} style={{ marginBottom: "1rem" }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item) => (
                    <span className="tech-badge" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;