const mongoose = require("mongoose");
module.exports = mongoose.model("AdminCredit", new mongoose.Schema({
  userId:String,
  amount:Number,
  reference:String,
  reason:String,
  createdAt:{ type:Date, default:Date.now }
}));