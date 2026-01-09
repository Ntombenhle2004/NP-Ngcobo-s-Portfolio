import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="copy">© {new Date().getFullYear()} Ntombenhle Ngcobo</div>
        <div className="links">
          {/* <Link to="#">Privacy</Link> */}
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
