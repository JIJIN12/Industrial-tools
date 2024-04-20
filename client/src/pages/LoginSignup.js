import React, { useState } from "react";
import "./CSS/Loginsignup.css";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
export default function LoginSignup() {
  const [login_data, set_logindata] = useState({});
  const [login_store_data,set_loginstore_data] = useState([])
  const [open, setOpen] = useState(false);

  console.log(login_data);
  console.log(login_store_data);
  const login_inputs = (e) => {
    const { name, value } = e.target;
    set_logindata({ ...login_data, [name]: value });
  };
  const submit = (e) => {
    try {
      e.preventDefault();
      axios.post("https://industrial-tools-3.onrender.com/login", login_data).then((Response) => {
        console.log(Response.data.Message);

        set_loginstore_data(Response.data);
        const token = Response.data.token
        setOpen(true);

        if(token){
          localStorage.setItem("token", Response.data.token);
          localStorage.setItem("username", Response.data.username);
          window.location.href = '/';

        }
       
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="loginsignup w-[100%] h-[100%] bg-[#fce3fe] pt-[100px] pb-[100px]">
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert
          onClose={handleClose}
          severity="error"
          // autoHideDuration={5000}
          variant="filled"
          sx={{
            width: "fit-content",
            top: "114px", // Adjust top position to accommodate any top elements, like headers
            right: "16px", // Adjust right position to set it to the top-right corner
            position: "fixed", // Ensure the Snackbar stays fixed on the screen
          }}
        >
          {login_store_data.Message}
        </Alert>
      </Snackbar>
      <div className="loginsignup-container w-[590px] h-auto bg-white m-auto mb-20 px-[60px] py-[40px] ">
        <h1 className="my-[20px] flex justify-center">Sign Up</h1>
        <div className="loginsignup-fields flex flex-col gap-[30px] mt-[30px] ">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            onChange={login_inputs}
          />
          {/* <input type='text' placeholder=' Email Address' name='Email' className='h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]'/> */}
          <input
            type="password"
            placeholder=" Password"
            name="password"
            className="h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            onChange={login_inputs}
          />
        </div>
        <button
          className="w-[100%] h-[72px] text-white bg-[#ff4141] mt-[30px] border-none font-medium cursor-pointer"
          onClick={submit}
        >
          Continue
        </button>
        <p className="loginsignup-login mt-[20px] text-[#5c5c5c] text-[18px] font-medium">
          Already have an account?
          <span className="text-[#ff4141] font-semibold">Login Here</span>
        </p>
        <div className="loginsignup-agree flex items-center  mt-[25px] gap-[25px] text-[#5c5c5c] text-[18px] font-medium ">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policies </p>
        </div>
      </div>
    </div>
  );
}
