const secretKey = "~gh3et47y23ge52sd!@#!$5";
const express = require("express");
const router = express.Router();

const Stock = require("../models/stockModel");
const StockReqRes = require("../models/StockReqRes");

var convert = require("xml-js");

router.post("/", async (req, res) => {
  try {
    if (req.body.KEY === secretKey) {
      // console.log("hoii");
      for (let i = 0; i < req.body.stocks.length; i++) {
        // console.log(req.body.stocks[i]);
        // Add data to stock database
        const stock = new Stock({
          SITE: req.body.stocks[i].SITE,
          PART_NO: req.body.stocks[i].PART_NO,
          LOT_BATCH_NO: req.body.stocks[i].LOT_BATCH_NO,
          MRP: req.body.stocks[i].MRP,
          Available_Qty: req.body.stocks[i].Available_Qty,
        });
        const result = await stock.save();
      }

      try {
        // Add data to stockReqRes database
        const stockReqRes = new StockReqRes({
          request: req.body.stocks,
          response: {
            status: true,
          },
        });
        const resultReqRes = await stockReqRes.save();
        const xmlResponse = convert.json2xml(
          { success: true, ref: resultReqRes.ref },
          { compact: true, spaces: 4 }
        );
        res.header("Content-Type", "application/xml");
        res.send(xmlResponse);
        // return res.json({ success: true, ref: resultReqRes.ref });
      } catch (error) {
        console.log(error);
        res.header("Content-Type", "application/xml");
        return res.status(200).send(`<error>${error}</error>`);
      }

      //   res.header("Content-Type", "application/xml");
      //   res.status(200).send(newResultReqRes);
    } else {
      res.header("Content-Type", "application/xml");
      return res.status(200).send("<error>Invalid Key</error>");
    }
  } catch (error) {
    // res.send(error);
    res.header("Content-Type", "application/xml");
    return res.status(200).send(`<error>${error}</error>`);
  }
});

module.exports = router;
