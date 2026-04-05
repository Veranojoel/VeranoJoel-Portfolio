import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Hi, I'm Joel</h1>
        <p className="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
        <p className="hero-description">
          Building beautiful, functional web experiences
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
