const mongoose = require("mongoose");
const schema = mongoose.Schema;

const NewCollectionschema = new schema({
  image: { type: String },
  popular_name: { type: String },
  new_price: { type: String },
  old_price: { type: String },
});
const NewCollection_model = mongoose.model("Newcollection_tb", NewCollectionschema);
module.exports = NewCollection_model;
