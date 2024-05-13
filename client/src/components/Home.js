import React, { useState } from "react";
import "./Home.css";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function Home() {
  const [showItem1Items, setShowItem1Items] = useState(false);
  const [showOtherItems, setShowOtherItems] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      name: "Image 1",
      description: "Description 1",
      image: "./images/storebanner.jpeg",
    },
    {
      name: "Image 2",
      description: "Description 2",
      image: "./images/discount1.jpg",
    },
    {
      name: "Image 3",
      description: "Description 3",
      image: "./images/toolsbanner.jpg",
    },
    {
      name: "Image 4",
      description: "Description 4",
      image: "./images/discount2.jpg",
    },
    {
      name: "Image 5",
      description: "Description 4",
      image: "./images/discount3.jpg",
    },
  ];
  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleButtonClick = (index) => {
    // Add your button action here, for example:
    console.log(`Button ${index + 1} clicked!`);
  };

  const home_data = [
    { name: "WINTER ASSORTMENT", offer: "Upto 300 OFF", num: 0 },
    { name: "AHUJA", offer: "Shop Now", num: 1 },
    { name: "EAGLE", offer: "Upto 70% OFF", num: 2 },
    { name: "SAFETY SHOES", offer: "Upto 70% OFF", num: 3 },
    { name: "CANDES", offer: "Upto 50% OFF", num: 4 },
  ];

  const handleItem1HoverEnter = () => {
    setShowItem1Items(true);
    setShowOtherItems(false);
  };

  const handleAdditionalItemHoverEnter = (index) => {
    // Show only the hovered additional item
    setShowOtherItems(index);
  };

  const handleItemHoverEnter = () => {
    setShowOtherItems(false);
  };

  const handleItemHoverLeave = () => {
    setShowItem1Items(false);
    setShowOtherItems(false);
  };
  return (
    <>
      <div className="bg-white ">
        <div className=" bg-slate-100  rounded-t-xl mt-[-10px] pt-[1rem]">
          <div className="flex flex-row ml-[5px] mr-[5px] mt-[10px] mb-[5px] w-[100%] h-[100%] min-w-[300px] ">
            <div className="home-category bg-white rounded-xl border-2 border-black-200 m-2 w-[22%] h-[100%] min-w-[250px] relative">
              <a href="/stationary" className="no-underline text-black">
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Office Stationery & Supplies</p>
                </div>
              </a>

              <a
                href="/construction_tool
"
                className="no-underline text-black"
              >
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Electrical Tools & Equipment</p>
                </div>
              </a>
              <a href="/agricultural_tool" className="no-underline text-black">
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Agriculture & Gardening</p>
                </div>
              </a>
              <a href="/MedicalSupplies" className="no-underline text-black">
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Healthcare, Medical & Lab Supplies</p>
                </div>
              </a>
              <a href="/automotive" className="no-underline text-black">
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Automotive Supplies</p>
                </div>{" "}
              </a>

              <a href="/safety_tool" className="no-underline text-black">
                <div
                  className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                  onMouseEnter={handleItem1HoverEnter}
                  onMouseLeave={handleItemHoverLeave}
                >
                  <p>Safety Supplies</p>
                </div>
              </a>
              <a href="/Construction" className="no-underline text-black">

              <div
                className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                onMouseEnter={handleItem1HoverEnter}
                onMouseLeave={handleItemHoverLeave}
              >
                <p>Building & Construction Supplies</p>
              </div>
              </a>
              <a href="/package" className="no-underline text-black">

              <div
                className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                onMouseEnter={handleItem1HoverEnter}
                onMouseLeave={handleItemHoverLeave}
              >
                <p>Packaging & Material Handling</p>
              </div>
              </a>
              <a href="/allcategory" className="no-underline text-black">

              <div
                className="pl-[15px] pb-[9px] pt-[20px] pr-[25px] text-[1rem] hover:bg-slate-100"
                onMouseEnter={handleItem1HoverEnter}
                onMouseLeave={handleItemHoverLeave}
              >
                <p className="text-red-600">View All Category</p>
              </div>
              </a>

            </div>

            <div className="home-slider-div rounded-xl m-2 flex flex-col  w-[100%]">
              <div className=" home-slider-div2 rounded-xl bg-white border-2 border-black-200  ">
                <div className="h-fit">
                  {/* <div className="home-slider h-[70%] w-[100%] "></div> */}
                  <div className="flex flex-col justify-between gap-0">
                    <Carousel
                      autoPlay={true}
                      animation="slide"
                      interval={2000}
                      cycleNavigation={true}
                      // timeout={500}
                      swipe={true}
                      indicators={false}
                      navButtonsAlwaysVisible={false}
                      className="w-full custom-carousel"
                      index={activeIndex}
                      onChange={(index) => setActiveIndex(index)}
                    >
                      {/* Carousel items */}
                      {items.map((item, i) => (
                        <Paper key={i}>
                          <div className="flex justify-center">
                            <img
                              src={item.image}
                              className="w-full h-[300px] rounded-t-lg"
                              alt={`Image ${i + 1}`}
                            />
                          </div>
                        </Paper>
                      ))}
                    </Carousel>
                    <div className="home-category-brand grid grid-cols-5">
                      {home_data.map((data, index) => (
                        <button
                          key={data}
                          className={`rounded-sm home-discount border-r-2 border-r-slate-200 p-2 pr-4 ${
                            activeIndex === index
                              ? "border-b-[3px] border-red-500  border-r-0 text-red-500"
                              : ""
                          }`}
                          onClick={() => handleIndicatorClick(index)}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          {data.name}
                          <br />
                          {data.offer}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className=" h-[30%] flex justify-between gap-[5px]  mt-[10px] ">
                <div className="">
                  <img
                    src="./images/sub1.jpg"
                    className=" rounded-xl w-[100%] h-[100%]  "
                  />
                </div>
                <div className="">
                  <img
                    src="./images/sub2.jpg"
                    className="rounded-xl w-[100%]  h-[100%]"
                  />
                </div>
                <div className="">
                  <img
                    src="./images/sub3.jpeg"
                    className="rounded-xl w-[100%]  h-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h1>hhfhfhfh</h1>
        <div className="border-2 mx-auto max-w-screen-xl border-black flex justify-center">
          <Carousel
            autoPlay={true}
            animation="fade"
            interval={1000}
            timeout={1000}
            className="w-full"
            indicatorContainerProps={{
              style: {
                marginTop: "50px",
                textAlign: "center",
              },
            }}
            index={activeIndex}
            onChange={(index) => setActiveIndex(index)}
          >
            {items.map((item, i) => (
              <Paper key={i}>
                <div className=" flex justify-center">
                  <img
                    src={item.image}
                    className="w-full h-[300px]"
                    alt={`Image ${i + 1}`}
                  />
                </div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Button
                  className="CheckButton"
                  onClick={() => handleButtonClick(activeIndex)}
                >
                  Check it out!
                </Button>
              </Paper>
            ))}
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className="p-4 py-2 font-medium hover:bg-slate-200 rounded-lg"
              onClick={() => handleIndicatorClick(index)}
            >
              section{index}
            </button>
          ))}
        </div>
      </div> */}
    </>
  );
}
