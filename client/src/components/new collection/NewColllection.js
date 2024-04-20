import React, { useEffect, useState } from "react";
import "./NewCollection.css";
import axios from "axios";
import Aos from "aos";
import Button from "@mui/material/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NewColllection() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [shuffledCollection, setShuffledCollection] = useState([]);
  const [newcollection, set_newcollection] = useState([]);
  const [viewnewcoll_data, set_viewnewcoll_data] = useState(false);
  const navigate = useNavigate();
  const page = "newcollection";

  useEffect(() => {
    axios.get("https://industrial-tools-3.onrender.com/newcollection").then((response) => {
      set_newcollection(response.data.details);
    });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  useEffect(() => {
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const refreshCount = parseInt(localStorage.getItem("refreshCount")) || 0;

    if (!localStorage.getItem("refreshCount")) {
      localStorage.setItem("refreshCount", refreshCount + 1);
    }
    if (localStorage.getItem("refreshCount")) {
      localStorage.setItem("refreshCount", refreshCount + 1);
    }

    if ((refreshCount + 1) % 5 === 0) {
      setShuffledCollection(shuffleArray(newcollection));
    } else {
      setShuffledCollection(newcollection);
    }
  }, [newcollection]);

  const viewall = () => {
    set_viewnewcoll_data((prev) => !prev);
  };

  return (
    <div className="mb-[100px]">
      <div className="new-collections">
        <h1
          data-aos="fade-right "
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          NEW Collection
        </h1>
        <hr
          data-aos="fade-right "
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
        />
        <div className="w-full float-right mr-9">
          <Button
            variant=""
            sx={{
              bgcolor: "#ffe6e6",
              fontWeight: "bold",
              color: "red",
              borderRadius: "10%",
            }}
            className="float-right px-4"
            onClick={viewall}
          >
            {viewnewcoll_data ? "View less" : "View"}
          </Button>
        </div>
        <div className="collections">
          <div className="flex justify-start flex-wrap  gap-6 mx-[10rem]  pb-3">
            {shuffledCollection
              .slice(0, viewnewcoll_data ? shuffledCollection.length : 5)
              .map((data, i) => (
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
                  <Link to={`/product/${data._id}?page=${page}`}>
                    <img
                      src={data.image}
                      alt="Product"
                      className="border-b-2 border-slate h-[12rem] w-full p-2 pb-4"
                    />
                  </Link>
                  <div className="pl-3 pr-1">
                    <p className="text-xs pt-3">
                      {data.popular_name &&
                        `${data.popular_name.substring(0, 35)}...`}
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
    </div>
  );
}
