const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/simple_calculator.html");
});
app.post("/calculate", (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const operation = req.body.operation;
  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
    default:
      result = "Invalid Operation";
  }
  res.send(`
    <h1>The Answer is: ${result}</h1>
    <a href="/">Another calculation</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
