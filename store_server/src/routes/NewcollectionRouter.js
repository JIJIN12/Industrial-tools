const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const NewCollection_model = require("../model/newcollectionModel");
const newcollectionRouter = express.Router();

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

newcollectionRouter.get('/',async function(req,res){
    try {
        const data = await NewCollection_model.find()
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

newcollectionRouter.post(
  "/add",
  upload.single("image"),
  async function (req, res) {
    try {
      const data = {
        image: req.file ? req.file.path : null,
        popular_name: req.body.popular_name,
        description: req.body?req.body.description:null,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
      };

      const savedata = await NewCollection_model(data).save();
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

module.exports = newcollectionRouter;
