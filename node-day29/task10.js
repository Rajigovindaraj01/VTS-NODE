class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

throw new MyCustomError("Custom error occurred!");
