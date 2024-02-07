import React, { useEffect, useState } from "react";
import star from "../Assets/images/star_icon.png";
import dull_star from "../Assets/images/dull_star_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { allitemdetails } from "../redux/slice/shopcategoryslice";
import axios from "axios";
export default function ProductDisplay(props1) {
 
  
  const { product } = props1;
  console.log(product);
const dispatch = useDispatch();
  const { allitem_data } = useSelector((state) => state.allitem);
  console.log(allitem_data);
  useEffect(()=>{
    dispatch(allitemdetails())
  },[])

  const getdefaultcart = ()=>{
    let cart = {}
    console.log(cart);
    for(let i=0;i<allitem_data.length;i++){
      cart[i]=0;
    }
    return cart;
  }
  const[cart,set_cart] = useState(getdefaultcart())
  console.log(cart);
  const addtocart = (id)=>{
    console.log(id);
    axios.post(` http://localhost:1000/cart/add/${id}`).then((Response)=>{
      console.log(Response.data.details);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="flex mx-[170px]">
      <div className="h-[1000px] flex gap-3">
        <div className="flex flex-col gap-[20px]">
          <img
            src={product.image}
            className="h-[210px] p-2 border-1 border-slate-600"
          />
          <img
            src={product.image}
            className="h-[210px] p-2 border-1 border-slate-600"
          />
          <img
            src={product.image}
            className="h-[210px] p-2 border-1 border-slate-600"
          />
          <img
            src={product.image}
            className="h-[210px] p-2 border-1 border-slate-600"
          />
        </div>
        <div className="w-[690px] h-[900px] border-1 border-slate-600">
          <img src={product.image} className="h-full p-4" />
        </div>
      </div>
      <div className="mx-[60px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-[30px] font-bold">
          {product.popular_name}
        </h1>
        <div className="w-7 flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-[16px]">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={dull_star} />
          <p>{122}</p>
        </div>
        <div className="flex my-[40px] gap-[30px] text-[24px] font-bold">
          <div className="text-[#818181] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="mt-55px text-[#656565] text-[20px] font-semibold">
          Select your favorite social network and share our icons with your
          contacts or friends.
        </div>
        <div className="my-[30px] gap-[20px]">
          <h1>Select Size</h1>
          <div className="flex gap-5 px-[24px] py-[18px] bg-[#fbfbfb] border-1 border-[#ebebeb] rounded-[3px] cursor-pointer">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="h-12 px-[40px]py-[20px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer" onClick={()=>{addtocart(product._id)}}>
          ADD TO CART
        </button>
        <p className="mt-[10px]">
          <span className="font-semibold">Category :</span>Women , T-Shirt ,
          Crop Top
        </p>
        <p>
          <span className="font-semibold">Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
}
