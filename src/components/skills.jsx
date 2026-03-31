import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="section alt-bg">
      <div className="container">
        <span className="section-label">WHAT I USE</span>
        <h2 className="section-title">Tools and skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;