const mongoose = require("mongoose");
const schema = mongoose.Schema;

const allitems_schema = new schema({
  image: { type: String },
  popular_name: { type: String },
  category: { type: String },
  new_price: { type: String },
  old_price: { type: String },
});
const allitems_model = mongoose.model("Allitems_tb", allitems_schema);
module.exports = allitems_model;
