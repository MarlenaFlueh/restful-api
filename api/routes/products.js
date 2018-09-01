const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(resutl => {
      console.log(result);
      res.status(200).json({
        message: "it's so cool this post req!",
        createdProduct: product
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// get single product
// patch single product
// delete single product

module.exports = router;
