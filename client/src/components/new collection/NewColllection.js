import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import axios from "axios";
import Aos from "aos";
export default function NewColllection() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [shuffledCollection, setShuffledCollection] = useState([]);
console.log(refreshCount);
  const [newcollection, set_newcollection] = useState([]);
  console.log(newcollection);
  useEffect(() => {
    axios.get("http://localhost:1000/newcollection").then((Response) => {
      set_newcollection(Response.data.details);
    });
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  },[]);
 
  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const shuffledCollection = shuffleArray(newcollection);
 
 
  useEffect(() => {
    // Function to shuffle the array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
console.log('1');
    // Get the refresh count from localStorage or default to 0
    const refreshCount = parseInt(localStorage.getItem("refreshCount")) || 0;
    console.log('2');

    // If refreshCount is not set in localStorage, increment it by 1 and store it
    if (!localStorage.getItem("refreshCount")) {
      console.log('ll');
      localStorage.setItem("refreshCount", refreshCount + 1);
    }
    if (localStorage.getItem("refreshCount")) {
      console.log('ll');
      localStorage.setItem("refreshCount", refreshCount + 1);
    }

    // If refreshCount is divisible by 2, shuffle the collection
    if ((refreshCount + 1) % 5 === 0) {
      setShuffledCollection(shuffleArray(newcollection.slice(0, 5)));
    } else {
      // Otherwise, keep the collection unchanged
      setShuffledCollection(newcollection.slice(0, 5));
    }
  }, [newcollection]);
  
  return (
    <div className="mb-[100px]">
      <div className="new-collections">
        <h1  data-aos="fade-right " data-aos-offset="200"
              data-aos-duration="1000" data-aos-once="true">NEW Collection</h1>
        <hr  data-aos="fade-right " data-aos-offset="200"
              data-aos-duration="1000" data-aos-once="true" />
        <div className="collections">
          {/* {NewColllection.map((data,key)=>(
                   return <Item key={i} id={Item.id} name={Item.name} new_price={Item.new_price} old_price ={Item.old_price}

        ) */}
          <div className="flex justify-start flex-wrap  gap-6 mx-[10rem]  pb-3">
            {/* {newcollection.slice(0, 5).map((data, i) => (
              <div className="rounded-md w-[12rem] my-2 border-2 border-slate h-[25rem] pb-2"  data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000" data-aos-once="true">
                <div className=" flex justify-end "><img src="./images/new.png" className="h-9"/></div>
                <img
                  src={data.image}
                  className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4 "
                />
                <div className="pl-3 pr-1">
                  <p className="text-xs pt-3">
                    {data.popular_name
                      ? `${data.popular_name.substring(0, 35)}...`
                      : ""}
                  </p>
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
            ))} */}

{shuffledCollection.slice(0,5).map((data, i) => (
        <div
          key={i}
          className="rounded-md w-[12rem] my-2 border-2 border-slate h-[25rem] pb-2"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex justify-end">
            <img src="./images/new.png" className="h-9" alt="New" />
          </div>
          <img
            src={data.image}
            alt="Product"
            className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4"
          />
          <div className="pl-3 pr-1">
            <p className="text-xs pt-3">
              {data.popular_name
                ? `${data.popular_name.substring(0, 35)}...`
                : ""}
            </p>
            <div>
              <p>
                <b>${data.new_price}</b>
                <p className="text-xs">
                  MRP $<strike>{data.old_price}</strike>
                </p>
              </p>
              <p>FREE Delivery</p>
            </div>
          </div>
        </div>
      ))}
          
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-[2rem]  ">
        <a className="text-black no-underline" href="#">more..</a>
      </div>
    </div>
  );
}
