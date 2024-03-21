import React, { useEffect } from "react";
import "./Offers.css";
import Aos from "aos";
export default function Offers() {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <>
      <div className="offers">
        <div className="offer-left" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-once="true">
          <h1>EXCLUSIVE</h1>
          <h1>OFFERS</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>

        <div className="offers-right" data-aos="fade-left"
     data-aos-offset="400"
     data-aos-easing="ease-in-sine" data-aos-once="true">
          <img src="./images/discount1.jpg" />
        </div>
      </div>
    </>
  );
}
