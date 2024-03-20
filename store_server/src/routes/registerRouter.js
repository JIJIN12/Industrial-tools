const express = require("express");
const bcrypt = require("bcryptjs");
const registermodel = require("../model/registerModel");
const loginmodel = require("../model/loginModel");
const registerRouter = express.Router();

registerRouter.post("/", async (req, res)=> {
    console.log('start');
  try {
    const oldemail = await registermodel.findOne({ Email: req.body.Email });
    if (oldemail) {
      return res
        .status(400)
        .json({ success: false, error: true, Message: "Email already exists" });
    }
    const oldusername = await loginmodel.findOne({
      username: req.body.username,
    });
    if (oldusername) {
      return res
        .status(400)
        .json({
          success: false,
          error: true,
          Message: "Username already exists",
        });
    }
    const hashpassword = await bcrypt.hash(req.body.password, 12);
    const logindata = {
      username: req.body.username,
      password: hashpassword,
    };
    const savelogindata = await loginmodel(logindata).save();

    const registerdata = {
        login_id:savelogindata._id,
        FullName:req.body.FullName,
        Email: req.body.Email
    };

    const save_Registerdata = await registermodel(registerdata).save()
    if(save_Registerdata){
        return res.status(200).json({ success: true, error: false, details: save_Registerdata })

    }
    else {
        return res.status(400).json({ success: false, error: true, Message: "registration error" })

    }
  } catch (error) {
    return res.status(400).json({ success: false, error: true, message: "Something went wrong" })

  }
});

module.exports = registerRouter;
