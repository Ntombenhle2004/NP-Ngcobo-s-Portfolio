import React from "react";
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
