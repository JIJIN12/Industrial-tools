const express = require("express");
const registermodel = require("../model/registerModel");
const profileRouter = express.Router();
profileRouter.get("/", async function (req, res) {
  try {
    const data = await registermodel.find();
    console.log(data);
    if (data) {
      return res
        .status(200)
        .json({ success: true, error: false, details: data });
    } else {
      return res
        .status(400)
        .json({ success: false, error: true, Message: "profile error error" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

module.exports = profileRouter;
