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
              I'm a calm, professional full-stack developer and UI/UX designer
              with a passion for creating beautiful and functional web
              experiences. I believe in clean code, intuitive design, and
              user-centered development.
            </p>
            <p>
              With expertise in modern web technologies like React, Node.js, and
              responsive design, I help businesses bring their ideas to life.
              Whether you're looking for a developer or designer, I'm here to
              turn your vision into reality.
            </p>
            <div className="skills">
              <h3>Key Skills</h3>
              <div className="skills-list">
                <span className="skill">React</span>
                <span className="skill">JavaScript</span>
                <span className="skill">Node.js</span>
                <span className="skill">CSS / Responsive Design</span>
                <span className="skill">UI/UX Design</span>
                <span className="skill">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
