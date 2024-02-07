import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Footer from "../components/Footer/Footer";
import banner from "../components/Assets/images/banner1.jpg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../components/redux/slice/shopcategoryslice";
import { ShpContext } from "../components/context/ShpContext";

export default function ShopCategory() {
  const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);
  const [shopcate_data, set_shopcate_data] = useState([]);
  const [updatedata, set_updatedata] = useState([]);
  console.log(shopcate_data);
  console.log(updatedata);
  const { category } = useParams(); // Destructure category from useParams
  console.log(category);

  // useEffect(() => {
  //   try {
  //     axios.get("http://localhost:1000/allitems").then((Response) => {
  //       set_shopcate_data(Response.data.details);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  useEffect(() => {
    try {
      dispatch(allitemdetails());
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    try {
      if (category === "construction_tool") {
        set_updatedata(
          allitem_data.filter((data) => data.category === "construction_tool")
        );
      }

      if (category === "agricultural_tool") {
        set_updatedata(
          allitem_data.filter((data) => data.category === "agricultural_tool")
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [category, allitem_data]); // Include shopcate_data in the dependency array

  return (
    <>
      <div className="shop-category">
        <img
          src={banner}
          className="shop-category-banner block mx-auto my-8 w-[82%] h-[18rem]"
        />
        {/* <div className=" "> */}

        <div className="shopcategory-indexsort flex justify-between align-middle mx-36">
          <p>
            <span className="font-bold">Showing 1-12</span> out of all products
          </p>
          <div className="shopcategory-sort p-3 rounded-3xl border-2 border-[#888] font-semibold">
            Sort by <img src="" />
          </div>
        </div>

        <div className="shopcategory-products mx-36 my-3 grid grid-cols-4 gap-y-[80px]">
          {/* flex flex-wrap gap-[1rem] w-full pb-10  */}
          {updatedata.map((data, key) => (
            <div className="flex flex-col w-fit ">
              <div className="rounded-md w-[12rem]  m-2 border-2 border-slate h-[28rem] pb-2">
                <Link to={`/product/${data._id}`}>
                  <img
                    src={data.image}
                    className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4 "
                    onClick={window.scrollTo(0,0)}
                  />
                </Link>

                <div className="pl-3 pr-1">
                  <p className="text-xs pt-3">{data.popular_name}</p>
                  <div className="">
                    <p>
                      <b>RS {data.new_price}</b>
                      <p className="text-xs">
                        MRP RS<strike>{data.old_price}</strike>
                      </p>
                    </p>
                    <p>FREE Delivery </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto my-[90px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-base font-medium">
          Explore more
        </div>
      </div>
    </>
  );
}
