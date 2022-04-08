const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const config = require("config");

const middleware = require("./middleware/auth");
const products = require("./routes/api/products");
const feedbacks = require("./routes/api/feedbacks");
const orders = require("./routes/api/orders");
const cart = require("./routes/api/cart");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

const app = express();

app.use(cors());
app.use(middleware);

app.use(express.json());

// const db = config.get("mongoURI");
const db =
  "mongodb+srv://rado:123123123@compute-yourself.zp8kc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(db)
  .then((res) => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/products", products);
app.use("/api/feedbacks", feedbacks);
app.use("/api/cart", cart);
app.use("/api/orders", orders);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
