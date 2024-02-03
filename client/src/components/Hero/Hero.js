import React from "react";
import './Hero.css'
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src="./images/discount1.jpeg" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collections</div>
          <img src="./images/arrow.png" className="h-9 block mix-blend-multiply arrow" />
        </div>
      </div>
      <div className="hero-right">
        <img src="./images/discount1.jpeg"/>
      </div>
    </div>
  );
}
