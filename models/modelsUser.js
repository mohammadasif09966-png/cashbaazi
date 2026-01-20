const mongoose = require("mongoose");
module.exports = mongoose.model("User", new mongoose.Schema({
  mobile: { type:String, unique:true },
  email: { type:String, unique:true },
  passwordHash: String,
  referralCode: String,
  referredBy: String
},{ timestamps:true }));