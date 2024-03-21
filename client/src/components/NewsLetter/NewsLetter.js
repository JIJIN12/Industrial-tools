import React, { useEffect } from "react";
import "./NewsLetter.css";
import Aos from "aos";
export default function NewsLetter() {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <div className="newsletter">
      <h1 data-aos="fade-right" data-aos-once="true">Get Exclusive Offers On Your Email </h1>
      <p data-aos="fade-left" data-aos-once="true">Subscribe to our newsletter and stay updated</p>
      <div data-aos="fade-up" data-aos-once="true">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
