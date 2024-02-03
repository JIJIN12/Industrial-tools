import React, { useState } from "react";
import "./Home.css";
import swiper from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Carousel, Card } from 'react-bootstrap';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <>
      <div className="flex justify-around">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid border-2 h-[100vh]  ">
          <div className="category rounded-lg border-2 border-black-200 text-lg m-2 col-start-1 col-end-2  grid 2xl:min-w-[100px]  md:min-w-[200px] sm:min-w-[100px] ">
            <div className="pl-4 pt-4 hover:bg-slate-100">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4  hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
            <div className="pl-4 hover:bg-slate-300">
              <p>Office Stationery & Supplies</p>
            </div>
          </div>

          <div className="rounded-lg border-2 border-black-200  m-2 col-start-2 col-end-5 row-start-1 h-[100vh]  ">
            <div className="grid h-[100vh] div2">
              <div className="rows-start-1 max-h-lvh">
                <div className="h-3/5">
                  <img
                    src="/images/google.jpeg"
                    className=" w-full h-full max-h-lvh"
                  />
                </div>
                <div className="    grid grid-cols-5 h-fit ">
                  <div className="rounded-sm discount text-sm/6 p-2 border-r-2">
                    <p>
                      WINTER ASSORTMENT<p>Upto 300 OFF</p>
                    </p>
                  </div>
                  <div className="rounded-sm discount text-sm/6 p-2 border-r-2">
                    <p>
                      AHUJA <p>Shop Now</p>
                    </p>
                  </div>
                  <div className="rounded-sm discount text-sm/6 p-2 border-r-2">
                    <p>
                      EAGLE<p>Upto 70% OFF</p>
                    </p>
                  </div>
                  <div className="rounded-sm discount text-sm/6 p-2 border-r-2">
                    <p>
                      SAFETY SHOES<p>Upto 70% OFF</p>
                    </p>
                  </div>
                  <div className="rounded-sm discount text-sm/6 p-2 ">
                    <p>
                      CANDES<p>Upto 50% OFF</p>
                    </p>
                  </div>
                </div>
                <div className="offers grid grid-cols-3  border-2 border-black-200 h-fit ">
                  <div className=" border-2 border-black-200 mt-2 col-start-1 col-end-2 row-start-4   ">
                    <img
                      src="/images/discount1.jpeg"
                      className="image h-full  w-full rounded-lg "
                    />
                  </div>
                  <div className=" rounded-md  mt-2 mr-1 ml-1 col-start-2 col-end-3 row-start-4">
                    <img
                      src="/images/discount1.jpg"
                      className="image h-full w-full rounded-lg"
                    />
                  </div>
                  <div className=" rounded-md mt-2  col-start-3 col-end-4 row-start-4">
                    <img
                      src="/images/discount2.jpeg"
                      className="image h-full w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border-2 border-black-200  m-2 col-start-2 col-end-5 row-start-1 row-end-3">
          <img src="/images/google.jpeg" className="h-full w-full" />
        </div>
        <div className="border-2 border-black-200  m-2 col-start-2 col-end-5 row-start-3 row-end-3 grid grid-cols-5 h-fit">
          <div className="border-2 border-black text-sm/6 p-2">
            WINTER ASSORTMENT Upto 300 OFF
          </div>
          <div className="border-2 border-black text-sm/6 p-2">
            AHUJA Shop Now
          </div>
          <div className="border-2 border-black text-sm/6 p-2">
            EAGLE Upto 70% OFF
          </div>
          <div className="border-2 border-black text-sm/6 p-2">
            SAFETY SHOES Upto 70% OFF
          </div>
          <div className="border-2 border-black text-sm/6 p-2 ">
            CANDES Upto 50% OFF
          </div>
        </div> */}
        </div>
      </div>
      {/* <div>
        <div className="wrapper bg-slate-500 mt-11">
          <Swiper
            className="Home_swiper"
            spaceBetween={5}
            slidesPerView={5}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="">
                <img
                  src="./images/discount1.jpg"
                  className="home_img m-0"
                  alt="Discount 1"
                />
              </a>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
      {/* </Swiper>
          <div className="swiper-button-next bg-black"></div>
          <div className="swiper-button-prev bg-black border-black"></div>
        </div> */}
      {/* </div>  */}

      <div><h1>hhfhfhfh</h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Card className="h-2">
              <Card.Body>
                <Card.Img src="./images/discount1.jpeg"></Card.Img>
                <Card.Title>jhjhfh</Card.Title>
                <Card.Text>Content for card 1.</Card.Text>
              </Card.Body>
              
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card>
              <Card.Body>
              <Card.Img src="./images/discount2.jpeg"></Card.Img>

                <Card.Title>Card 2</Card.Title>
                <Card.Text>Content for card 2.</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
          {/* Add more Carousel.Items with Card content as needed */}
        </Carousel>
      </div>
    </>
  );
}
