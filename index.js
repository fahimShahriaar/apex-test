const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect("mongodb://localhost/apex-test")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/stock", require("./routes/stockHandler"));

app.listen(9001, () => {
  console.log("Server started on port 9001");
});
