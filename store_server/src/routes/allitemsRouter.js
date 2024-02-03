const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const allitems_model = require("../model/allitems");
const allitemsRouter = express.Router();

cloudinary.config({
  cloud_name: "ddjp6omvg",
  api_key: "123553778373481",
  api_secret: "KeHv2Fi5dFSVKgqIkoBFDfYnzMY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Newcollections_files",
  },
});

const upload = multer({ storage: storage });

allitemsRouter.get('/',async function(Req,res){
  try {
    console.log('start');
    const data = await allitems_model.find()
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

allitemsRouter.post("/add", upload.single("image"), async function (req, res) {
  try {
    const popular_name = req.body.popular_name;
    const repeatdata = await allitems_model.findOne({
      popular_name: popular_name,
    });
    if (repeatdata) {
      return res
        .status(200)
        .json({ success: true, error: false, Message: "Data Already Exists" });
    }
    const data = {
      image: req.file ? req.file.path : null,
      popular_name: req.body.popular_name,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    };

    const savedata = await allitems_model(data).save();
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

allitemsRouter.get('/:id',async function(req,res){
  try {
    const productId = req.params.id
    console.log(productId);
    const data = await allitems_model.findOne({_id:productId})
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

module.exports = allitemsRouter;
