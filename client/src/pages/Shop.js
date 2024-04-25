import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewColllection from "../components/new collection/NewColllection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home";
export default function Shop() {
  return (
    <div>
      {/* <Hero /> */}
      <Home />
      <div className="bg-white  mt-[-5px]">
        <div className=" my-1 bg-white rounded-x-xl  border-b-0 border-b-white ">
          <Popular />
          <Offers />
          <NewColllection />
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}
