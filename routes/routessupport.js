const express = require("express");
const Support = require("../models/SupportChat");
const router = express.Router();

router.post("/send", async(req,res)=>{
  const { userId,text } = req.body;
  let chat = await Support.findOne({ userId });
  if(!chat) chat = await Support.create({ userId,messages:[] });
  chat.messages.push({ sender:"USER", text });
  await chat.save();
  res.json({ ok:true });
});

router.post("/reply", async(req,res)=>{
  const { userId,text } = req.body;
  const chat = await Support.findOne({ userId });
  chat.messages.push({ sender:"ADMIN", text });
  await chat.save();
  res.json({ ok:true });
});

module.exports = router;