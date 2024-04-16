import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../components/redux/slice/shopcategoryslice";
import { useLocation, useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum.js/Breadcrum";
import axios from "axios";
import { productdetails } from "../components/redux/slice/productslice";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../components/Descriptionbox/Descriptionbox";
import RelatedProduct from "../components/RelatedProducts/RelatedProduct";
import { ShpContext } from "../components/context/ShpContext";
import { newcollectiondetails } from "../components/redux/slice/newcollection";
import { popularproductdetails } from "../components/redux/slice/popularslice";
import { relatedproductdetails } from "../components/redux/slice/relatedproductslice";

export default function Product() {
  const [product, setProduct] = useState([]);
  console.log(product);
  const dispatch = useDispatch();
  const location = useLocation();

  const { product_data } = useSelector((state) => state.product);
  const { newcollection_data } = useSelector((state) => state.newcollection);
  const { popularproduct_data } = useSelector((state) => state.popular);
  const { relatedproduct_data } = useSelector((state) => state.relatedproduct);

  const { productId } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    console.log("Page:", page);
    console.log("Product ID:", productId);
    if (page === "newcollection") {
      dispatch(newcollectiondetails(productId));
    } else if (page === "popular") {
      dispatch(popularproductdetails(productId));
    } else if (page === "tool") {
      dispatch(productdetails(productId));
    } else if (page === "related") {
      dispatch(relatedproductdetails(productId));
      }
  }, [page, productId]);

  useEffect(() => {
    if (page === "newcollection") {
      // Add page name to newcollection_data with key 'category'
      const updatedProduct = { ...newcollection_data, category: page };
      setProduct(updatedProduct);
    } else if (page === "popular") {
      // Add page name to popularproduct_data with key 'category'
      const updatedProduct = { ...popularproduct_data, category: page };
      setProduct(updatedProduct);
    } else if (page === "tool") {
      // Add page name to product_data with key 'category'
      // const updatedProduct = { ...product_data, category: page };
      setProduct(product_data);
    } else if (page === "related") {
      // Add page name to relatedproduct_data with key 'category'
      const updatedProduct = { ...relatedproduct_data, category: page };
      console.log(updatedProduct);
      setProduct(updatedProduct);
     
    }
  }, [
    page,
    product_data,
    newcollection_data,
    popularproduct_data,
    relatedproduct_data,
  ]);

  return (
    <div>
      <Breadcrum productId={product} />
      <ProductDisplay
        product={{
          product: product_data,
          newCollectionData: newcollection_data,
          popular: popularproduct_data,
          related: relatedproduct_data,
        }}
      />
      <Descriptionbox />
      <RelatedProduct />
    </div>
  );
}
