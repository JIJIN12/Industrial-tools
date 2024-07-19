import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import menuimg from "../Assets/images/menu.png";
import { useDispatch, useSelector } from "react-redux";
import { cartitemdetails } from "../redux/slice/cartslice";
import axios from "axios";
import TrackOrder from "../new collection/TrackOrder/TrackOrder";
import profileicon from "../Assets/images/profile1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default function Nav() {
  const [showTrackOrder, setShowTrackOrder] = useState(false);
  const [menu, setMennu] = useState("shop");
  const [cartdata, set_cartdata] = useState([]);
  const menuRef = useRef();
  const location = useLocation();
  const [showList, setShowList] = useState(false);
  console.log(showList);
  // const dropdown_toggle = (e) => {
  //   menuRef.current.classList.toggle("nav-menu-visible");
  //   e.target.classList.toggle("open");
  // };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    border: "2px solid #DDDDDD",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
    borderRight: "0",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "35ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md min-w-[400px]">
  <div className="navbar border-b-2 flex justify-between items-center px-4">
    <div className="nav-logo">
      <img src="./images/logo.png" className="w-24" alt="logo" />
      <a className="no-underline" href="/">
        <p>INDUSNET</p>
      </a>
    </div>
    <div className="flex">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Product, Category, Brand…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <button className=" border-l-0 px-3 py-2 bg-red-500 text-white rounded-r-lg ">
        Search
      </button>
    </div>

    <div className="nav-login-cart flex gap-4">
      <Link to="/login">
        <button>Login Now</button>
      </Link>
      <button onClick={handleOpenTrackOrder} className="border-0 border-white">
        Track Order
      </button>
      <TrackOrder open={showTrackOrder} handleClose={handleCloseTrackOrder} />
      <Link to="/profile">
        <img src={profileicon} className="h-[4rem]" alt="profile" />
      </Link>
      <Link to="/cart">
        <img src="./images/cart.jpg" className="h-12" alt="cart" />
      </Link>
      <div className="nav-cart-count">{cartdata.length}</div>
    </div>
  </div>
  {showList && (
    <div>
      <div
        className={
          location.pathname === "/"
            ? "sticky-navbar sticky top-20 z-40 bg-white py-0 px-9 border-b-[1px] "
            : "sticky-navbar sticky top-5 z-40 bg-white py-0 px-9"
        }
      >
        <ul className="list-none flex justify-between gap-[1rem] px-3 py-2">
          <a href="" className="no-underline text-black">
            <li onClick={() => setMennu("safety_tool")}>
              <Link to="/safety_tool" className="no-underline text-black" onClick={scrollToTop}>
                Safety
              </Link>
              {location.pathname === "/safety_tool" && <hr />}
            </li>
          </a>
          <a href="" className="no-underline text-black">
            <li onClick={() => setMennu("safety_tool")}>
              <Link to="/electrical" className="no-underline text-black" onClick={scrollToTop}>
                Electrical
              </Link>
              {location.pathname === "/electrical" && <hr />}
            </li>
          </a>
          <li onClick={() => setMennu("construction_tool")}>
            <Link to="/construction_tool" className="no-underline text-black" onClick={scrollToTop}>
              Power Tools
            </Link>
            {location.pathname === "/construction_tool" && <hr />}
          </li>
          <li onClick={() => setMennu("pumps")}>
            <Link to="/pumps" className="no-underline text-black" onClick={scrollToTop}>
              Motors & pumps
            </Link>
            {location.pathname === "/pumps" && <hr />}
          </li>
          <a href="" className="no-underline text-black">
            <li onClick={() => setMennu("agricultural_tool")}>
              <Link to="/agricultural_tool" className="no-underline text-black" onClick={scrollToTop}>
                Gardening Tools
              </Link>
              {location.pathname === "/agricultural_tool" && <hr />}
            </li>
          </a>
          <li onClick={() => setMennu("MedicalSupplies")}>
            <Link to="/MedicalSupplies" className="no-underline text-black" onClick={scrollToTop}>
              Medical Supplies
            </Link>
            {location.pathname === "/MedicalSupplies" && <hr />}
          </li>
        </ul>
      </div>
    </div>
  )}
</div>
  );
}
