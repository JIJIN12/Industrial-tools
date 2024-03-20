const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Relatedproductschema = new schema({
  image: { type: String },
  relatedproduct_name: { type: String },
  new_price: { type: String },
  old_price: { type: String },
});
const Relatedproduct_model = mongoose.model("Relatedproduct_tb", Relatedproductschema);
module.exports = Relatedproduct_model;
