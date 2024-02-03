import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foooter-logo">
        <img src="/images/google.jpeg" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-social-icons-container">
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="footer-social-icons-container">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className="footer-social-icons-container">
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 - All Right Reserved </p>
      </div>
    </div>
  );
}
