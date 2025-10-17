import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  return (
    <header className="site-nav">
      <div className="container nav-inner" style={{ width: '90%' }}>
        <div className="brand">Ntombenhle Ngcobo</div>
        <nav>
          <ul>
            <li className={location.hash === "#about" ? "active" : ""}>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
