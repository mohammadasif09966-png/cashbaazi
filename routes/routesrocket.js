const express = require("express");
const Wallet = require("../models/Wallet");
const algo = require("../utils/rocketAlgo");
const router = express.Router();

router.post("/play", async(req,res)=>{
  const { userId, bet, cashout } = req.body;
  const wallet = await Wallet.findOne({ userId });
  if(wallet.deposit < bet) return res.status(400).end();
  wallet.deposit -= bet;
  const crash = algo();
  if(cashout < crash){
    wallet.winning += Math.floor(bet*1.5);
  }
  await wallet.save();
  res.json({ crash });
});

module.exports = router;