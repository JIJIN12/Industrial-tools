const mongoose = require("mongoose");
const schema = mongoose.Schema;

const allitems_schema = new schema({
  image: { type: String },
  popular_name: { type: String },
  category: { type: String },
  new_price: { type: String },
  old_price: { type: String },
  date:{type:String,default:Date.now}
});
const allitems_model = mongoose.model("allitems_tb", allitems_schema);
module.exports = allitems_model;
