const express = require("express");
const cartmodel = require("../model/cartModel");
const allitems_model = require("../model/allitems");
const cartRouter = express.Router();

cartRouter.get("/", async function (req, res) {
    try {
      console.log("1");
      const cartitem = await cartmodel.aggregate([
        {
          $lookup: {
            from: "allitems_tbs",
            localField: "productid",
            foreignField: "_id",
            as: "products",
          },
        },
        {
          $unwind: "$products",
        },
        // {
        //   $match: {
        //     productid: new mongoose.Types.ObjectId,
        //   },
        // },
        {
          $group: {
            _id: "$_id",
            popular_name: { $first: "$products.popular_name" },
            category: { $first: "$products.category" },
            new_price: { $first: "$products.new_price" },
            old_price: { $first: "$products.old_price" },
            quantity: { $first: "$quantity" },
            image: { $first: "$products.image" },
          },
        },
        {
          $sort: { popular_name: 1 } // Sort by product_name in ascending order
        }
      ]);
      console.log("2");
      console.log(cartitem);
      if (cartitem) {
        return res
          .status(200)
          .json({ success: "true", error: "false", details: cartitem });
      } else {
        return res
          .status(400)
          .json({ success: False, error: true, message: "data not found" });
      }
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Something went wrong" });
    }
  });

cartRouter.post("/add/:id", async function (req, res) {
  try {
    console.log('kk');
    const id = req.params.id;
    const cartdata = await cartmodel.findOne({ productid: id });
    console.log("addcart1");
    if (cartdata) {
      return res.status(400).json({
        success: "false",
        error: "true",
        Message: "item already exist",
      });
    }
    const data = await allitems_model.findOne({_id:id})
    console.log(data);

    const savedata = {
      productid: id,
      // quantity: ,
    };
    console.log('addcart3');
    const cartsave = await cartmodel(savedata).save();
    console.log('addcart4');

    if (cartsave) {
      return res.status(200).json({
        success: "true",
        error: "false",
        Message: "cart added",
        details: cartsave,
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});




cartRouter.post("/incre/:id", async function (req, res) {
  try {
    const id = req.params.id;
    console.log(id, "id");

    const data = await cartmodel.findOne({ _id: id });
    console.log(data);
    console.log(data.quantity);
    const savedata = await cartmodel.updateOne(
      { _id: id },
      { $set: { quantity: data.quantity + 1 } }
    );
    // console.log(savedata);
    console.log("incre2");
    if (savedata) {
      return res.status(200).json({
        success: true,
        error: false,
        message: " incremented price updated",
        details: savedata,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, error: true, message: "increment error" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});
cartRouter.post("/decre/:id", async function (req, res) {
  try {
    const id = req.params.id;
    console.log(id, "id");
    const data = await cartmodel.findOne({ _id: id });
    if (data.quantity > 1) {
      const savedata = await cartmodel.updateOne(
        { _id: id },
        {
          $set: {
            quantity: data.quantity - 1,
          },
        }
      );
      console.log("decre2", data);
      if (savedata) {
        return res.status(200).json({
          success: true,
          error: false,
          message: " decremented price updated",
          details: savedata,
        });
      } else {
        return res
          .status(400)
          .json({ success: false, error: true, message: "decrement error" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, error: true, message: "Invalid action" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});

cartRouter.post("/delete/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const data = await cartmodel.deleteOne({ _id: id });
    if (data) {
      return res.status(200).json({
        success: "true",
        error: "false",
        Message: "Removal Succesfull",
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, error: true, message: "Something went wrong" });
  }
});
module.exports = cartRouter