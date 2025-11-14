function isValidUTF8(buffer) {
  try {
    buffer.toString("utf8");
    return true;
  } catch {
    return false;
  }
}

console.log(isValidUTF8(Buffer.from("Hello")));   // true
