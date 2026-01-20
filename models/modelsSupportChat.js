const mongoose = require("mongoose");
module.exports = mongoose.model("SupportChat", new mongoose.Schema({
  userId:String,
  messages:[{
    sender:String,
    text:String,
    time:{ type:Date, default:Date.now }
  }],
  status:{ type:String, default:"OPEN" }
},{ timestamps:true }));