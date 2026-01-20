const express = require("express");
const Wallet = require("../models/Wallet");
const Withdrawal = require("../models/Withdrawal");
const auth = require("../utils/authMiddleware");
const router = express.Router();

router.post("/withdraw", auth, async(req,res)=>{
  const { amount, bank } = req.body;
  const wallet = await Wallet.findOne({ userId:req.user.id });
  if(wallet.winning < amount) return res.status(400).end();
  wallet.winning -= amount;
  await wallet.save();
  await Withdrawal.create({ userId:req.user.id, amount, bank });
  res.json({ ok:true });
});

module.exports = router;