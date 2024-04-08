import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../components/redux/slice/shopcategoryslice";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum.js/Breadcrum";
import axios from "axios";
import { productdetails } from "../components/redux/slice/productslice";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../components/Descriptionbox/Descriptionbox";
import RelatedProduct from "../components/RelatedProducts/RelatedProduct";
import { newcollectiondetails } from "../components/redux/slice/newcollection";

export default function Product() {
  const [product, set_product] = useState([]);
  console.log(product);
  const dispatch = useDispatch();

  const { product_data } = useSelector((state) => state.product);
  console.log(product_data);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    // if(){
      dispatch(productdetails(productId));
    // }
  }, []);

  return (
    <div>
      <Breadcrum productId={productId} />
      <ProductDisplay product={product_data} />
      <Descriptionbox />
      <RelatedProduct />
    </div>
  );
}
