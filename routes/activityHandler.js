const express = require("express");
const router = express.Router();
const StockReqRes = require("../models/StockReqRes");

router.get("/req-res/:ref", async (req, res) => {
  try {
    const stockReqRes = await StockReqRes.findOne({ ref: req.params.ref });
    res.json(stockReqRes);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
