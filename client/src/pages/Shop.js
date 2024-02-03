import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewColllection from "../components/new collection/NewColllection";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewColllection />
      <NewsLetter />
    </div>
  );
}
