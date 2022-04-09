const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const product = require("../../models/Product");

// route GET api/products
router.get("/", (req, res) => {
  Product.find()
    // .sort({data: -1})
    .then((products) => res.json(products));
});

// route POST api/products
router.post("/", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    case: req.body.case,
    motherboard: req.body.motherboard,
    cpu: req.body.cpu,
    ram: req.body.ram,
    storage: req.body.storage,
    gpu: req.body.gpu,
    psu: req.body.psu,
    image: req.body.image,
    reviewLink: req.body.reviewLink,
    price: req.body.price,
  });

  newProduct.save().then((product) => res.json(product));
});

// route DELETE api/products
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => product.remove().then(() => res.json({ success: true })))
    .catch((res) => res.status(404).json({ success: false }));
});

//route PATCH one product
router.patch("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product)
    return res
      .status(404)
      .json({ msg: "There is no such product with the given ID" });

  (product.title = req.body.title),
    (product.case = req.body.case),
    (product.motherboard = req.body.motherboard),
    (product.cpu = req.body.cpu),
    (product.ram = req.body.ram),
    (product.storage = req.body.storage),
    (product.gpu = req.body.gpu),
    (product.psu = req.body.psu),
    (product.image = req.body.image),
    (product.reviewLink = req.body.reviewLink),
    (product.price = req.body.price);

  const updatedProduct = await product.save();

  res.status(200).json({ product: updatedProduct.toObject() });
});

//route GET one product
router.get("/:id", (req, res) => {
  Product.findById(req.params.id).then((product) => {
    res.json(product);
  });
});

module.exports = router;
