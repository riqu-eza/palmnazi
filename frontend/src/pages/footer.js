import React from "react";
import "./home.css"; // Import CSS file for styling
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <div className="social-media">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://linkedin.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} style={{ marginRight: "10px" }} />
          </a>
          <a
            href="https://github.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} style={{ marginRight: "10px" }} />
          </a>
        </div>
      </div>

      <div className="contact-details">
        <p>Contact us:</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="pages">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          {/* Add more pages as needed */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
