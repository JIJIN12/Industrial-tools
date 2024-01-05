import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid border-2 m-4  h-fit ">
        <div className="border-2 border-black-200  m-2 col-start-1 col-end-2 row-start-1 row-end-5 ">
          <div className="p-4 hover:bg-slate-100">
            <p>Office Stationery & Supplies<i className="category_hover inline-block p-2 "></i></p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          <div className="p-4 hover:bg-slate-300">
            <p>Office Stationery & Supplies</p>
          </div>
          
        </div>

        <div className="border-2 border-black-200  m-2 col-start-2 col-end-5 row-start-1 row-end-3">
          <img src="/images/google.jpeg" className="h-full w-full" />
        </div>
        <div className="border-2 border-black-200  m-2 col-start-2 col-end-5 row-start-3 row-end-3 grid grid-cols-5 h-fit">
          <div className="border-2 border-black text-sm/6 p-2">
            WINTER ASSORTMENT Upto 300 OFF
          </div>
          <div className="border-2 border-black text-sm/6 p-2">AHUJA Shop Now</div>
          <div className="border-2 border-black text-sm/6 p-2">EAGLE Upto 70% OFF</div>
          <div className="border-2 border-black text-sm/6 p-2">
            SAFETY SHOES Upto 70% OFF
          </div>
          <div className="border-2 border-black text-sm/6 p-2 ">CANDES Upto 50% OFF</div>
        </div>
        <div className=" border-2 border-black-200 m-2 col-start-2 col-end-3 row-start-4">
          <img
            src="/images/discount1.jpeg"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div className="   m-2 col-start-3 col-end-4 row-start-4">
          <img
            src="/images/discount1.jpg"
            className="h-full w-full rounded-lg"
          />
        </div>
        <div className="rounded-md m-2 col-start-4 col-end-5 row-start-4">
          <img
            src="/images/discount2.jpeg"
            className="h-full w-full rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
