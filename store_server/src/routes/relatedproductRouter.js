const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Relatedproduct_model = require("../model/relatedproduct");
const relatedproductRouter = express.Router();

cloudinary.config({
  cloud_name: "ddjp6omvg",
  api_key: "123553778373481",
  api_secret: "KeHv2Fi5dFSVKgqIkoBFDfYnzMY",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "relatedproduct_files",
  },
});

const upload = multer({ storage: storage });

relatedproductRouter.get('/',async function(req,res){
    try {
        const data = await Relatedproduct_model.find()
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

relatedproductRouter.post(
  "/add",
  upload.single("image"),
  async function (req, res) {
    try {
      const data = {
        image: req.file ? req.file.path : null,
        relatedproduct_name: req.body.relatedproduct_name,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      };

      const savedata = await Relatedproduct_model(data).save();
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
  }
);

relatedproductRouter.get('/:id',async function(req,res){
  try {
    const productId = req.params.id
    console.log("productId",productId);
    const data = await Relatedproduct_model.findOne({_id:productId})
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
module.exports = relatedproductRouter;
