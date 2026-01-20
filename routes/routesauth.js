const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Wallet = require("../models/Wallet");
const router = express.Router();

router.post("/signup", async(req,res)=>{
  const { mobile,email,password } = req.body;
  const hash = await bcrypt.hash(password,10);
  const user = await User.create({ mobile,email,passwordHash:hash });
  await Wallet.create({ userId:user._id });
  res.json({ ok:true });
});

router.post("/login", async(req,res)=>{
  const { email,password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(401).end();
  const ok = await bcrypt.compare(password,user.passwordHash);
  if(!ok) return res.status(401).end();
  const token = jwt.sign({ id:user._id },process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;