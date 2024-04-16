import React, { useEffect, useState } from "react";
import "./Popular.css";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Item from "../Items/Item";
import { useDispatch, useSelector } from "react-redux";
import { populardetails } from "../redux/slice/popularslice";
import Aos from "aos";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom";
export default function Popular() {
  const usedispatch = useDispatch();
  const { popular_data } = useSelector((state) => state.popular);
  // const [populardata, set_populardata] = useState([]);
  // console.log(populardata);

  useEffect(() => {
    usedispatch(populardetails());
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    //need upload datas about products
    <div className="popular mb-[8rem]">
      <div
        className="flex flex-col justify-center items-center"
        data-aos="fade-right "
        data-aos-offset="200"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h1 className="popular-h1">POPULAR</h1>
        <hr className="popular-hr " />
        <div className='w-full float-right mr-9' >
        <Button variant=""  sx={{bgcolor:'#ffe6e6',fontWeight:'bold',color:'red',borderRadius:'10%'}} className="float-right px-4" >View</Button>
        </div>
      </div>
      <div className="popular-item">
        <div className=" flex flex-wrap justify-start gap-6 ml-[10rem] mr-[5rem]  pb-3">
          {popular_data.slice(0, 5).map((data, i) => (
            <div
              className="popular-card rounded-md w-[12rem] my-2 border-2 border-slate h-[23rem] pb-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-once="true"
            >
              <Link to={`/product/${data._id}?page=popular`}>
                <img
                  src={data.image}
                  className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4 "
                />
              </Link>
              <div className="pl-3 pr-1">
                <Typography gutterBottom variant="body1" component="div">
                  {data.popular_name
                    ? `${data.popular_name.substring(0, 35)}...`
                    : ""}
                </Typography>
                {/* <p className="text-xs pt-3 text-[15px] font-sans subpixel-antialiased font-normal text-black">{data.popular_name
                ? `${data.popular_name.substring(0, 40)}...`
                : ""}</p> */}
                <div className="">
                  <p>
                    <b>${data.new_price}</b>
                    <p className="text-xs">
                      MRP $<strike>{data.old_price}</strike>
                    </p>
                  </p>
                  <p>FREE Delivery </p>
                </div>
                {/* <Typography variant="p" color="text.primary">
                  <b> RS {data.new_price}</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "13px" }}
                >
                  <strike> RS {data.old_price}</strike>
                </Typography> */}
              </div>
            </div>
          ))}
          
        </div>
       
      </div>
     
    </div>
  );
}
