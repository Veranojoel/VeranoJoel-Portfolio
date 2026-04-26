// src/components/Footer.jsx
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Joel Verano. All rights reserved.</p>
      </div>
    </footer>
  );
}
