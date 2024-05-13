import React from "react";

export default function Allcategory() {
  return (
    <div className="allcategory grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start  gap-x-[1rem] gap-y-[2rem] bg-slate-100 py-[2rem] px-[1rem]">
      {/* <div className="allcategory flex flex-wrap justify-start flex-rows gap-x-[1rem] gap-y-[2rem] bg-slate-100 py-[2rem]"> */}
      <a href='#' className="no-underline text-black">
        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Safety & PPE Supplies</h6>
          <p className="text-[.7rem]">
            Online safety & personal protective equipment store
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6> Industrial Tools & Machinery</h6>

          <p className="text-[.7rem]">
            One-stop shop for industrial & DIY home improvement Tools
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Electrical Tools & Equipment</h6>
          <p className="text-[.7rem]">
            All kind of electrical tools, appliances and electronic components
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Healthcare, Medical & Lab Supplies</h6>
          <p className="text-[.7rem]">
            Medical, dental, Lab and hospital supplies store online
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6> Automotive Supplies</h6>
          <p className="text-[.7rem]">
            Automotive parts and accessories at best price
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6> Office Stationery & Supplies</h6>
          <p className="text-[.7rem]">
            All kinds of office stationery, furniture, decor and appliances
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6> Building & Construction Supplies</h6>
          <p className="text-[.7rem]">
            Home hardware and plumbing tools at best price
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Agriculture, Gardening & Landscaping</h6>
          <p className="text-[.7rem]">
            All types of agriculture farming products & equipment
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Packaging & Material Handling</h6>
          <p className="text-[.7rem]">
            All types of material handling & packaging products
          </p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
           <a href='#' className="no-underline text-black">

        {" "}
        <div className="px-4 py-2  border-black rounded-lg bg-white shadow-md">
          <h6>Measurement & Testing</h6>
          <p className="text-[.7rem]">All types of Testing Equipment</p>
          <button className="text-red-600">View More</button>
        </div>
      </a>
    </div>
  );
}
