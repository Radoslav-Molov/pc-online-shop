const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const products = require("./routes/api/products");
const feedbacks = require("./routes/api/feedbacks");
const orders = require("./routes/api/orders");
const cart = require("./routes/api/cart");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then((res) => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/products", products);
app.use("/api/feedbacks", feedbacks);
app.use("/api/cart", cart);
app.use("/api/orders", orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
