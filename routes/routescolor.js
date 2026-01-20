const express = require("express");
const Wallet = require("../models/Wallet");
const router = express.Router();

router.post("/play", async(req,res)=>{
  const { userId, bets } = req.body;
  const wallet = await Wallet.findOne({ userId });

  let totalBet = bets.reduce((a,b)=>a+b.amount,0);
  if(wallet.deposit < totalBet) return res.status(400).end();

  const num = Math.floor(Math.random()*10);
  let win = 0;

  bets.forEach(b=>{
    if(b.type==="NUMBER" && b.value===num) win+=b.amount*9;
  });

  wallet.deposit -= totalBet;
  wallet.winning += win;
  await wallet.save();

  res.json({ number:num, win });
});

module.exports = router;