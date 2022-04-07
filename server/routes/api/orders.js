const express = require("express");
const Order = require("../../models/Order");
const router = express.Router();

const order = require("../../models/Order");

// route GET api/order
router.get("/", (req, res) => {
  Order.find()
    // .sort({data: -1})
    .then((order) => res.json(order));
});

// route POST api/order
router.post("/", (req, res) => {
  const newOrder = new Order({
    uid: req.body.uid,
    order: req.body.order,
    total: req.body.total,
    name: req.body.name,
    surname: req.body.surname,
    number: req.body.number,
    city: req.body.city,
    address: req.body.address,
  });

  newOrder.save().then((order) => res.json(order));
});

//route GET one invoice
router.get("/:id", (req, res) => {
  Order.findById(req.params.id).then((order) => res.json(order));
});

module.exports = router;
