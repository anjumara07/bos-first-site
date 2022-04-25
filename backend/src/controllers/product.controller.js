const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    var page = req.query.page || 1;
    var size = req.query.size || 4;
    // const products = await Product.find().lean().exec();
    // console.log(req.query)
    if(req.query.price === 'asc'){
      
      const products = await Product.find().lean().exec();
      // console.log(products)
      const ans = products.sort((a,b)=>{
        return a.cost_per_day - b.cost_per_day;
      })
      // console.log(ans)
      // const product = ans.skip((page - 1) * size).limit(size).lean().exec();
      // const totalpages = Math.ceil((ans.find().countDocuments()) / size)
      // console.log(product)
      return res.send(ans);
    }
    else if(req.query.price === 'desc'){
        const products = await Product.find().lean().exec();

        const ans = products.sort((a,b)=>{
          return b.cost_per_day - a.cost_per_day;
        })
        
        return res.send(ans)

    }
    else if(req.query.rating === 'asc'){
        const products = await Product.find().lean().exec();

        const ans = products.sort((a,b)=>{
          return a.rating - b.rating;
        })
        
        return res.send(ans)

    }
    else if(req.query.rating === 'desc'){
        const products = await Product.find().lean().exec();

        const ans = products.sort((a,b)=>{
          return b.rating - a.rating;
        })
       
        return res.send(ans)

    }
    else if(req.query.verified === 'yes'){
        const products = await Product.find().lean().exec();

        const ans = products.filter((e)=>{
             return e.verified === req.query.verified
        })
        return res.send(ans)
    }

    const products = await Product.find().skip((page - 1) * size).limit(size).lean().exec();
    const totalpages = Math.ceil((await Product.find().countDocuments()) / size)

    return res.send({products , totalpages});

  } catch (err) {

    return res.status(500).send({ message: err.message });
    
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(product)
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

module.exports = router;
