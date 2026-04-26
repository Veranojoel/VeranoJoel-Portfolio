//src/components/TechStack.jsx
import "../styles/techStack.css";

export default function TechStack() {
  const categories = [
    {
      title: "Languages & Frameworks",
      items: ["Java", "JavaScript", "C++", "Python", "Django"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "React", "Vite"],
    },
    {
      title: "Backend",
      items: ["Node.js", "spring boot", "Rest APIs", "postgreSQL"],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "Figma",
        "Microsoft Teams",
        "Workbench",
        "Postman",
        "PGAdmin4",
      ],
    },
  ];

  return (
    <section id="techstack" className="tech-stack">
      <div className="container">
        <h2>Tech Stack & Tools</h2>
        <p className="tech-stack-subtitle">
          A look at the technologies and tools I’m currently learning and using
          to build projects.
        </p>

        <div className="tech-stack-grid">
          {categories.map((category) => (
            <div key={category.title} className="tech-category">
              <h3>{category.title}</h3>
              <div className="tech-items">
                {category.items.map((item) => (
                  <span key={item} className="tech-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
