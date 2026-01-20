require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.DB_URL)
  .then(()=>console.log("MongoDB connected"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/wallet", require("./routes/wallet"));
app.use("/api/rocket", require("./routes/rocket"));
app.use("/api/color", require("./routes/color"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/admin-credit", require("./routes/adminCredit"));
app.use("/api/support", require("./routes/support"));

app.get("/health",(req,res)=>res.json({ ok:true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log("Server running",PORT));