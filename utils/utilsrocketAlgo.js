const crypto = require("crypto");
module.exports = ()=>{
  const h = crypto.randomBytes(4).readUInt32BE(0);
  const e = 2**32;
  const r = Math.max(1,e/(e-h));
  return Math.min(+r.toFixed(2),10);
};