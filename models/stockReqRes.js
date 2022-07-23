const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const stockReqResSchema = new mongoose.Schema(
  {
    ref: Number,
    request: [
      {
        SITE: String,
        PART_NO: String,
        LOT_BATCH_NO: String,
        MRP: Number,
        Available_Qty: Number,
      },
    ],
    response: {
      ref: String,
      status: Boolean,
    },
  },
  { timestamps: true }
);

stockReqResSchema.plugin(AutoIncrement, { inc_field: "ref" });
const StockReqRes = new mongoose.model("StockReqRes", stockReqResSchema);

module.exports = StockReqRes;
