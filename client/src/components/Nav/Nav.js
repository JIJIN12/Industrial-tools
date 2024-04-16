import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { Link,useLocation } from "react-router-dom";
import ShopCategory from "../../pages/ShopCategory";
import menuimg from "../Assets/images/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { cartitemdetails } from "../redux/slice/cartslice";
import axios from "axios";
export default function Nav() {
  const [menu, setMennu] = useState("shop");
  console.log(menu);
  const [cartdata, set_cartdata] = useState([]);
  const menuRef = useRef();
  const location = useLocation();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  useEffect(() => {
    axios.get("http://localhost:1000/cart").then((response) => {
      set_cartdata(response.data.details);
    });
  }, []);
  useEffect(() => {
    console.log("Current pathname:", location.pathname);
  }, [location]);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="./images/discount1.jpg " className="w-[5rem]" />
        <p>SHOPPER</p>
      </div>
      <img src={menuimg} onClick={dropdown_toggle} className="nav-dropdown" />
      <ul className="nav-menu " ref={menuRef}>
        <li
          onClick={() => {
            setMennu("shop");
          }}
        >
          <Link to={"/"} className="no-underline">
            shop
          </Link>
          {location.pathname == "/" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMennu("construction_tool");
          }}
        >
          <Link to={"/construction_tool"} className="no-underline">
            men
          </Link>
          {location.pathname == "/construction_tool" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMennu("agricultural_tool");
          }}
        >
          <Link to={"/agricultural_tool"} className="no-underline">
            kids
          </Link>
          {location.pathname == "/agricultural_tool" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart grid grid-cols-2 gap-5">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <img src="./images/cart.jpg " className="h-[3rem]" />
        </Link>
        <div className="nav-cart-count">{cartdata.length}</div>
      </div>
      {/* <ShopCategory props={menu}/> */}
    </div>
  );
}
