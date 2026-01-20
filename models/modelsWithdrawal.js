const mongoose = require("mongoose");
module.exports = mongoose.model("Withdrawal", new mongoose.Schema({
  userId:String,
  amount:Number,
  bank:Object,
  status:{ type:String, default:"PENDING" }
},{ timestamps:true }));