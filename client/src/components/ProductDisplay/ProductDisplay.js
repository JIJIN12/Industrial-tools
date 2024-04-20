import React, { useEffect, useState } from "react";
import "./Productdisplay.css";
import star from "../Assets/images/star_icon.png";
import dull_star from "../Assets/images/dull_star_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../redux/slice/shopcategoryslice";
import axios from "axios";
import { cartitemdetails } from "../redux/slice/cartslice";
import RelatedProduct from "../RelatedProducts/RelatedProduct";
import newcollection from "../redux/slice/newcollection";
export default function ProductDisplay(props1) {
  const { product, newCollectionData, popular, related } = props1.product;
  console.log(product);
  console.log(Array.isArray(product) ? product : [product]);
  console.log(
    Array.isArray(newCollectionData) ? newCollectionData : [newCollectionData]
  );

  const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  const { cartitems_data } = useSelector((state) => state.cartitem);
  console.log(cartitems_data);
  console.log(allitem_data);

  useEffect(() => {
    dispatch(allitemdetails());
  }, []);

  const getdefaultcart = () => {
    let cart = {};
    console.log(cart);
    for (let i = 0; i < allitem_data.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  
  const [cart, set_cart] = useState(getdefaultcart());
  console.log(cart);
  const addtocart = (id) => {
    console.log(id);
    dispatch(cartitemdetails(id));
  
  };

  return (
    <>
      <div>
        <div className="productdisplay flex mx-[170px] gap-0">
          <div className="productdisplay-left  flex gap-3 border-r-2 border-slate-200 bg-white">
            <div className="productdisplay-img-list flex flex-col gap-[20px] ">
              {Array.from({ length: 2 }).map((_, index) => (
                <img
                  key={index}
                  src={
                    (product && product.image) ||
                    (newCollectionData && newCollectionData.image) ||
                    (popular && popular.image) ||
                    (related && related.image)
                  }
                  className="h-[140px] p-2 border-1 border-slate-200"
                />
              ))}
              {Array.from({ length: 2 }).map((_, index) => (
                <img
                  key={index}
                  src={
                    (product && product.image) ||
                    (newCollectionData && newCollectionData.image) ||
                    (popular && popular.image) ||
                    (related && related.image)
                  }
                  className="h-[130px] p-2 border-1 border-slate-200"
                />
              ))}
            </div>
            <div className="productdisplay-main-img w-[590px] h-[600px] ">
              <img
                src={
                  (product && product.image) ||
                  (newCollectionData && newCollectionData.image) ||
                  (popular && popular.image) ||
                  (related && related.image)
                }
                className="h-full p-4"
                alt="Product Image"
              />
            </div>
          </div>
          <div className="productdisplay-right mx-[60px] flex flex-col p-5 rounded-lg border-2 border-slate-200 bg-white">
            <h1 className="text-[#3d3d3d] text-[20px] font-bold">
              {(product && product.popular_name) ||
                (newCollectionData && newCollectionData.popular_name) ||
                (popular && popular.popular_name)||
                (related && related.relatedproduct_name)}
            </h1>
            <div className="productdisplay-right-stars w-7 flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
              {[...Array(4)].map((_, index) => (
                <img key={index} src={star} alt={`Star ${index + 1}`} />
              ))}
              <p>122</p>
            </div>
            <div className="productdisplay-right-prices flex my-[40px] gap-[30px] text-[24px] font-bold">
              <div className="text-[#818181] line-through">
                $
                {(product && product.old_price) ||
                  (newCollectionData && newCollectionData.old_price) ||
                  (popular && popular.old_price)||
                  (related && related.old_price)}
              </div>
              <div className="text-[#ff4141]">
                $
                {(product && product.new_price) ||
                  (newCollectionData && newCollectionData.new_price) ||
                  (popular && popular.new_price)||
                  (related && related.new_price)}
              </div>
            </div>
            <div className="productdisplay-right-description mt-55px text-[#656565] text-[20px] font-semibold">
              {(product && product.description) ||
                (newCollectionData && newCollectionData.description) ||
                (popular && popular.description)||
                (related && related.description)}
            </div>
            <button
              className="h-12 px-[40px] py-[20px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer"
              onClick={() => {
                addtocart(
                  (product && product._id) ||
                    (newCollectionData && newCollectionData._id) ||
                    (popular && popular._id)||
                    (related && related._id)
                );
              }}
            >
              ADD TO CART
            </button>
            <p className="productdisplay-right-category mt-[10px]">
              <span className="font-semibold">Category :</span> Women, T-Shirt,
              Crop Top
            </p>
            <p>
              <span className="font-semibold">Tags :</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
