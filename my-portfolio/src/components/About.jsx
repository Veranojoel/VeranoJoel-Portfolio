// src/components/About.jsx
import profileImage from "../assets/images/profile.jpg";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <img src={profileImage} alt="Joel Verano" className="profile-image" />
          <div className="about-text">
            <p>
              An aspiring developer with hands-on experience in frontend
              development, prototyping, and collaborative project delivery.
              Focused on building reliable, usercentered solutions while
              applying practical skills in real world settings. Recognized for
              strong communication and consistent contributions to efficient,
              well-organized teams.
            </p>
            <p>
              With a growing interest in modern web technologies like React,
              Node.js, and responsive design. I’m focused on building my skills
              and creating websites that are both functional and user-friendly.
              Whether I’m learning new tools or working on projects, I enjoy
              turning ideas into simple and effective digital experiences.
            </p>
            <div className="skills">
              <h3>Key Skills</h3>
              <div className="skills-list">
                <span className="skill">Project Coordination</span>
                <span className="skill">Interface Prototyping</span>
                <span className="skill">Basic Software Documentation</span>
                <span className="skill">Version Control Collaboration</span>
                <span className="skill">
                  Clear and Structured communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
