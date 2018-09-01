const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "it's so cool this get req!"
  });
});

router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(200).json({
    message: "it's so cool this post req!",
    createdProduct: product
  });
});

// get single product
// patch single product
// delete single product

module.exports = router;
