import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../components/redux/slice/shopcategoryslice";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum.js/Breadcrum";
import axios from "axios";
import { productdetails } from "../components/redux/slice/productslice";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../components/Descriptionbox/Descriptionbox";
import RelatedProduct from "../components/RelatedProducts/RelatedProduct";

export default function Product() {
  const [product, set_product] = useState([]);
  console.log(product);
  const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);

  const { product_data } = useSelector((state) => state.product);
  console.log(product_data);
  const { productId } = useParams();
  console.log(productId);
  // useEffect(()=>{
  //   try {
  //     axios.get(`http://localhost:1000/allitems/${productId}`).then((Response)=>{
  //       set_product(Response.data.details);
  //       console.log('ll');
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },[])

  useEffect(() => {
    dispatch(productdetails(productId));
  }, []);
  // useEffect(()=>{
  //   dispatch(allitemdetails())
  // },[])
  // useEffect(() => {
  //   try {
  //     dispatch(allitemdetails());
  //   } catch (error) {}
  // }, [dispatch]);

  // const product = allitem_data && allitem_data.find((e) => e._id === Number(productId));
  // const product =  allitem_data.find((allitem_data) => {
  //   console.log(allitem_data._id);
  //   return allitem_data._id === Number(productId);
  // });
  // console.log(product);
  // if (product) {
  //   console.log(product);
  // } else {
  //   console.log(`Product with ID ${productId} not found`);
  // }
  return <div>
    <Breadcrum productId={productId} />
    <ProductDisplay product={product_data}/>
    <Descriptionbox/>
    <RelatedProduct/>
    </div>;
}
