process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise:", err);
});

Promise.reject("Unhandled rejection!");
