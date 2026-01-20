const mongoose = require("mongoose");
module.exports = mongoose.model("Wallet", new mongoose.Schema({
  userId: String,
  deposit: { type:Number, default:0 },
  winning: { type:Number, default:0 }
}));