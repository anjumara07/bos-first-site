const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find().populate("admin_id").lean().exec();
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete('/:id',authenticate, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(product)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;
