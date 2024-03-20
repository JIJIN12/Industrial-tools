const express = require("express");
const webtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const loginmodel = require("../model/loginModel");
const registermodel = require("../model/registerModel");
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  try {
    console.log("start login", req.body);
    const user_name = req.body.username;
    const oldusername = await loginmodel.findOne({ username: user_name });
    console.log("0", oldusername);
    if (!oldusername) {
      return res
        .status(200)
        .json({ success: false, error: true, Message: "username not found" });
    }
    console.log("1");
    const oldpassword = await bcrypt.compare(
      req.body.password,
      oldusername.password
    );
    console.log(oldpassword);
    if (!oldpassword) {
      return res
        .status(200)
        .json({ success: false, error: true, Message: "password not found" });
    } else {
      var token = webtoken.sign(
        {
          username: oldusername.username,
          password: oldusername.password,
          id: oldusername._id,
        },
        "divide&rule"
      );
      return res.status(200).json({
        success: true,
        error: false,
        token: token,
        user_id: oldusername._id,
        username: oldusername.username,
        Message: "Login Succesfull",
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

module.exports = loginRouter;
