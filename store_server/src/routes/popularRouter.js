const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const popular_model = require("../model/popular");
const multer = require("multer");
const popularRouter = express.Router();

cloudinary.config({
  cloud_name: "ddjp6omvg",
  api_key: "123553778373481",
  api_secret: "KeHv2Fi5dFSVKgqIkoBFDfYnzMY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "popular_files",
  },
});

const upload = multer({ storage: storage });

popularRouter.get("/", async function (req, res) {
  try {
    const data = await popular_model.find();
    if (data) {
      return res
        .status(200)
        .json({ success: true, error: false, details: data });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

popularRouter.post("/add", upload.single("image"), async function (req, res) {
  //upload.single('image') where image is fieldname
  try {
    console.log("1");
    console.log(req.body);
    console.log(req.file);
    const data = {
      image: req.file ? req.file.path : null,
      popular_name: req.body.popular_name,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    };
    console.log(data);

    const savedata = await popular_model(data).save();
    if (savedata) {
      return res
        .status(200)
        .json({ success: true, error: false, details: savedata });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

popularRouter.get('/:id',async function(req,res){
  try {
    const productId = req.params.id
    console.log("productId",productId);
    const data = await popular_model.findOne({_id:productId})
    console.log(data);
    if(data){
      return res
        .status(200)
        .json({ success: true, error: false, details: data });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
})
module.exports = popularRouter;
