const express = require("express");
const router = express.Router();

const cartProduct = require("../../models/Cart");

// route GET api/cart
router.get("/", (req, res) => {
  Cart.find()
    // .sort({data: -1})
    .then((cart) => res.json(cart));
});

// route POST api/cart
router.post("/", (req, res) => {
  const newProduct = new Cart({
    image: req.body.image,
    title: req.body.title,
    price: req.body.price,
  });

  newProduct.save().then((product) => res.json(product));
});

// route DELETE api/cart
router.delete("/:id", (req, res) => {
  Cart.findById(req.params.id)
    .then((cart) => cart.remove().then(() => res.json({ success: true })))
    .catch((res) => res.status(404).json({ success: false }));
});

module.exports = router;
