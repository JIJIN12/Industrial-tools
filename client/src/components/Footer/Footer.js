import React, { useEffect } from "react";
import "./Footer.css";
import Aos from "aos";
export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  });
  return (
    <div className="footer">
      <div className="foooter-logo">
        <img src="/images/google.jpeg" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links" data-aos="fade-up" data-aos-once="true">
        <li  >Company</li>
        <li >products</li>
        <li >Offices</li>
        <li >About</li>
        <li >Contact</li>
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
