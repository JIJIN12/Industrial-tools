import React, { useEffect } from "react";
import "./Breadcrum.css";
import { useDispatch, useSelector } from "react-redux";
import { productdetails } from "../redux/slice/productslice";
import { newcollectiondetails } from "../redux/slice/newcollection";
export default function Breadcrum({ productId }) {
  console.log(productId);


  if (productId && productId.relatedproduct_name) {
    productId.popular_name = productId.relatedproduct_name;
    delete productId.relatedproduct_name;
  }
  return (
    <div className="breadcrum flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold mx-[170px] my-[60px] capitalize">
      HOME <img src="/images/breadcrum.png" className="h-5" />
      SHOP
      <img src="/images/breadcrum.png" className="h-5" />
      {productId.category}
      <img src="/images/breadcrum.png" className="h-5" />
      {productId.popular_name && productId.popular_name.substring(0, 100)}
    </div>
  );
}
