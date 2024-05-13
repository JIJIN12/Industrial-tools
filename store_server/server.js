const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const popularRouter = require("./src/routes/popularRouter");
const newcollectionRouter = require("./src/routes/NewcollectionRouter");
const allitemsRouter = require("./src/routes/allitemsRouter");
const cartRouter = require("./src/routes/cartRouter");
const cors = require('cors');
const registerRouter = require("./src/routes/registerRouter");
const loginRouter = require("./src/routes/loginRouter");
const relatedproductRouter = require("./src/routes/relatedproductRouter");
const profileRouter = require("./src/routes/profileRouter");
const app = express();

// app.use(bodyparser())
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //  * every url can access
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/popular", popularRouter);
app.use("/newcollection", newcollectionRouter);
app.use("/allitems", allitemsRouter);
app.use("/cart", cartRouter);
app.use("/relatedproducts", relatedproductRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/profile", profileRouter);

const url =
  "mongodb+srv://jijinsuresh6:jijinsuresh6@cluster0.dh7smys.mongodb.net/TOOLS_SERVER?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    app.listen(1000, function () {
      console.log("started http://localhost:1000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
