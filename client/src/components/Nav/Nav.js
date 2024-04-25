import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import menuimg from "../Assets/images/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { cartitemdetails } from "../redux/slice/cartslice";
import axios from "axios";
import TrackOrder from "../new collection/TrackOrder/TrackOrder";
import profileicon from "../Assets/images/profile1.jpg";

export default function Nav() {
  const [showTrackOrder, setShowTrackOrder] = useState(false);
  const [menu, setMennu] = useState("shop");
  const [cartdata, set_cartdata] = useState([]);
  const menuRef = useRef();
  const location = useLocation();
  const [showList, setShowList] = useState(false);
console.log(showList);
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  useEffect(() => {
    axios
      .get("https://industrial-tools-3.onrender.com/cart")
      .then((response) => {
        set_cartdata(response.data.details);
      });
  }, []);
  console.log(location.pathname);

  const handleScroll = () => {
    if (location.pathname === "/") {
      if (window.scrollY > 500) {
        setShowList(true);
      } else {
        setShowList(false);
      }
    } else {
      setShowList(true);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    console.log("Current pathname:", location.pathname);
  }, [location]);

  const handleOpenTrackOrder = () => {
    setShowTrackOrder(true);
  };

  const handleCloseTrackOrder = () => {
    setShowTrackOrder(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="navbar border-b-2 flex justify-between items-center px-4">
        <div className="nav-logo">
          <img src="./images/discount1.jpg" className="w-20" alt="logo" />
          <p>INDUSNET</p>
        </div>
        <img
          src={menuimg}
          onClick={dropdown_toggle}
          className="nav-dropdown"
          alt="menu"
        />
        <ul className="nav-menu hidden" ref={menuRef}>
          <li
            onClick={() => {
              setMennu("shop");
            }}
          >
            <Link to={"/"} className="no-underline">
              Home
            </Link>
            {location.pathname === "/" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMennu("construction_tool");
            }}
          >
            <Link to={"/construction_tool"} className="no-underline">
              Power Tools
            </Link>
            {location.pathname === "/construction_tool" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMennu("agricultural_tool");
            }}
          >
            <Link to={"/agricultural_tool"} className="no-underline">
              Gardening Tools
            </Link>
            {location.pathname === "/agricultural_tool" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart flex gap-4">
          <Link to={"/login"}>
            <button>Login Now</button>
          </Link>
          <button
            onClick={handleOpenTrackOrder}
            className="border-0 border-white"
          >
            Track Order
          </button>
          <TrackOrder
            open={showTrackOrder}
            handleClose={handleCloseTrackOrder}
          />
          <Link to={"/profile"}>
            <img src={profileicon} className="h-[4rem]" alt="profile" />
          </Link>
          <Link to={"/cart"}>
            <img src="./images/cart.jpg" className="h-12" alt="cart" />
          </Link>
          <div className="nav-cart-count">{cartdata.length}</div>
        </div>
      </div>
      {showList && (
        <div>
          {/* <hr className="w-full h-[1px]" /> */}
          <div
            className={
              location.pathname === "/"
                ? "sticky top-20 z-40 bg-white py-2 px-9 border-b-[1px] "
                : "sticky top-5 z-40 bg-white py-2 px-9"
            }
          >
            <ul className="list-none grid grid-cols-5 gap-[1rem] justify-center px-3 py-2">
              <a href="" className="no-underline text-black">
                <li className="text-[1rem]">Safety</li>
              </a>
              <a href="" className="no-underline text-black">
                <li>Electricals</li>
              </a>
              <li
                onClick={() => {
                  setMennu("construction_tool");
                }}
              >
                <Link to={"/construction_tool"} className="no-underline text-black">
                  Power Tools
                </Link>
                {location.pathname === "/construction_tool" ? <hr className="" /> : <></>}
              </li>
              <a href="" className="no-underline text-black">
                <li>Pumps & Motors</li>
              </a>
              <a href="" className="no-underline text-black">
                <li>Medical Supplies</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
