import "../styles/projectCard.css";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubLink,
  demoLink,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              View Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
