const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "it's so cool this get req!"
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "it's so cool this post req!"
  });
});

// get single product
// patch single product
// delete single product

module.exports = router;
