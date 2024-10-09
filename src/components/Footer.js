import React from "react";
import "./css/Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <a
          href="https://www.instagram.com/couscouscollective"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
