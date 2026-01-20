const express = require("express");
const Wallet = require("../models/Wallet");
const AdminCredit = require("../models/AdminCredit");
const router = express.Router();

router.post("/add", async(req,res)=>{
  const { userId, amount, reference, reason } = req.body;
  const exist = await AdminCredit.findOne({ reference });
  if(exist) return res.status(400).end();
  const wallet = await Wallet.findOne({ userId });
  wallet.deposit += amount;
  await wallet.save();
  await AdminCredit.create({ userId,amount,reference,reason });
  res.json({ ok:true });
});

module.exports = router;