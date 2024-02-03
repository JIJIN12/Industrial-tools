const mongoose = require("mongoose");
const schema = mongoose.Schema;

const popularschema = new schema({
  image: { type: String },
  popular_name: { type: String },
  new_price: { type: String },
  old_price: { type: String },
});
const popular_model = mongoose.model("popular_tb", popularschema);
module.exports = popular_model;
