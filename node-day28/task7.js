const base64 = Buffer.from("Hello").toString("base64");
const buf = Buffer.from(base64, "base64");
console.log(buf.toString());
