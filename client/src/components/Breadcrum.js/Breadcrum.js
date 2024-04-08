import React, { useEffect } from "react";
import "./Breadcrum.css";
import { useDispatch, useSelector } from "react-redux";
import { productdetails } from "../redux/slice/productslice";
import { newcollectiondetails } from "../redux/slice/newcollection";
export default function Breadcrum({ productId }) {
  console.log(productId);
  const dispatch = useDispatch();
  const { product_data } = useSelector((state) => state.product);
  console.log(product_data);
  useEffect(() => {
    dispatch(productdetails(productId));
    dispatch(newcollectiondetails(productId));
  }, []);
  const popularname = product_data.popular_name
    ? `${product_data.popular_name.substring(0, 20)}...`
    : product_data.popular_name;
  return (
    <div className="breadcrum flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold mx-[170px] my-[60px] capitalize">
      HOME <img src="/images/breadcrum.png" className="h-5" />
      SHOP
      <img src="/images/breadcrum.png" className="h-5" />
      {product_data.category}
      <img src="/images/breadcrum.png" className="h-5" />
      {popularname}
    </div>
  );
}
