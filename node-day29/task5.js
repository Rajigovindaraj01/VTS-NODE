process.on("uncaughtException", (err) => {
  console.error("Global Error:", err.message);
});

throw new Error("Crash!");
