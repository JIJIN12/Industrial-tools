import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import axios from "axios";
export default function NewColllection() {
  const [newcollection,set_newcollection] = useState([])
console.log(newcollection);
  useEffect(()=>{
    axios.get('http://localhost:1000/newcollection').then((Response)=>{
      set_newcollection(Response.data.details)
    })
  },[])
  return (
    <div className="new-collections">
      <h1>NEW Collection</h1>
      <hr/>
      <div className="collections">
        {/* {NewColllection.map((data,key)=>(
                   return <Item key={i} id={Item.id} name={Item.name} new_price={Item.new_price} old_price ={Item.old_price}

        ) */}
        <div className="flex justify-start  pb-3">
          {newcollection.map((data, i) => (
            <div className="rounded-md w-[12rem]  m-2 border-2 border-slate h-[28rem] pb-2">
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
