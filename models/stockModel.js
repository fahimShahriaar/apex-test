const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const stockSchema = new mongoose.Schema(
  {
    SITE: String,
    PART_NO: String,
    LOT_BATCH_NO: String,
    MRP: Number,
    Available_Qty: Number,
  },
  { timestamps: true }
);

// stockSchema.plugin(AutoIncrement, { inc_field: "sl" });
const Stock = new mongoose.model("Stock", stockSchema);

module.exports = Stock;

// [
//   {
//     SITE: "UNIT2",
//     PART_NO: "03-TX006-A-WHT",
//     PART_DESC: "SYNTHETIC LINING-TELA STRONG COL-WHT",
//     LOT_BATCH_NO: "B288326-1-1",
//     LOCATION_NO: "U2B2FRETURN",
//     LOCATION_DESC: "FLOOR RETURN",
//     BAY_NO: "41",
//     QTY_ONHAND: 5.87,
//     QTY_RESERVED: 0,
//     QTY_IN_TRANSIT: 0,
//     UNIT_COST: 22.23809035472043278835175174048081325127,
//   },
//   {
//     SITE: "UNIT2",
//     PART_NO: "03-TX006-A-WHT",
//     PART_DESC: "SYNTHETIC LINING-TELA STRONG COL-WHT",
//     LOT_BATCH_NO: "B288326-1-1",
//     LOCATION_NO: "U2RMNONM",
//     LOCATION_DESC: "NON MOVING STORE",
//     BAY_NO: "1",
//     QTY_ONHAND: 954.5182,
//     QTY_RESERVED: 0,
//     QTY_IN_TRANSIT: 0,
//     UNIT_COST: 22.23809035472043278835175174048081325127,
//   },
//   {
//     SITE: "UNIT2",
//     PART_NO: "03-TX508-X-202-EVA",
//     PART_DESC:
//       "JENS FABRIC PRINTED COL- PINK ( CANVAS Y185-5)+ 1 MM EVA (LAMINATE)",
//     LOT_BATCH_NO: "B284550-1-1",
//     LOCATION_NO: "U2RMNONM",
//     LOCATION_DESC: "NON MOVING STORE",
//     BAY_NO: "1",
//     QTY_ONHAND: 4,
//     QTY_RESERVED: 0,
//     QTY_IN_TRANSIT: 0,
//     UNIT_COST: 477.414265828227382994637879088727571317,
//   },
// ];
