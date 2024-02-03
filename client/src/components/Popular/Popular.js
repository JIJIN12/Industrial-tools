import React, { useEffect, useState } from "react";
import "./Popular.css";
import axios from "axios";
import Item from "../Items/Item";
import { useDispatch, useSelector } from "react-redux";
import { populardetails } from "../redux/slice/popularslice";
export default function Popular() {
  const usedispatch = useDispatch()
  const {popular_data} = useSelector((state)=>state.popular)
  // const [populardata, set_populardata] = useState([]);
  // console.log(populardata);

  useEffect(()=>{
    usedispatch(populardetails())
  },[])

  // useEffect(() => {
  //   axios.get("http://localhost:1000/popular").then((Response) => {
  //     set_populardata(Response.data.details);
  //   });
  // }, []);

  return (
    //need upload datas about products
    <div className="popular">
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        <div className="flex justify-start  pb-3">
          {popular_data.map((data, i) => (
            <div className="rounded-md w-[12rem]  m-2 border-2 border-slate h-[23rem] pb-2">
              <img
                src={data.image}
                className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4 "
              />
              <div className="pl-3 pr-1">
                <p className="text-xs pt-3">{data.popular_name}</p>
                <div className="">
                  <p>
                    <b>${data.new_price}</b>
                    <p className="text-xs">
                      MRP $<strike>{data.old_price}</strike>
                    </p>
                  </p>
                  <p>FREE Delivery </p>
                </div>
              </div>
            </div>
          ))}
          {/* // <Item key={i} id={Item.id} name={Item.name} new_price={Item.new_price} old_price ={Item.old_price}/> */}

          {/* map items */}
        </div>
      </div>
    </div>
  );
}
