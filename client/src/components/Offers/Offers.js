import React from "react";
import "./Offers.css";
export default function Offers() {
  return (
    <>
      <div className="offers">
        <div className="offer-left">
          <h1>EXCLUSIVE</h1>
          <h1>OFFERS</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>

        <div className="offers-right">
          <img src="./images/discount1.jpg" />
        </div>
      </div>
    </>
  );
}
