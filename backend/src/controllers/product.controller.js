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
    const page = req.query.page || 1;
    const size = req.query.size || 4;
    // const products = await Product.find().lean().exec();
    const products = await Product.find().skip((page - 1) * size).limit(size).lean().exec();
    const totalpages = Math.ceil((await Product.find().countDocuments()) / size)
    return res.send({products , totalpages});
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
