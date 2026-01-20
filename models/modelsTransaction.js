const mongoose = require("mongoose");
module.exports = mongoose.model("Transaction", new mongoose.Schema({
  userId: String,
  type: String,
  amount: Number,
  reference: String,
  createdAt:{ type:Date, default:Date.now }
}));