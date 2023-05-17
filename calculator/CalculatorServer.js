var express = require("express");
var app = express();
var path = require("path");
app.use(express.json());
app.use(express.urlencoded());
app.use(
  express.static(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/MyWapProjects/SimpleCalculatorLab/public"
  )
);

app.get("/", function (req, res, next) {
  res.sendFile(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/MyWapProjects/SimpleCalculatorLab/public/SimpleCalc.html"
  );
});

app.post("/CalculatorServer", function (req, res, next) {
  var bod = req.body;
  if (bod.process == "Addition") {
    var output = parseInt(bod.first) + parseInt(bod.second);
  } else if (bod.process == "Subtraction") {
    var output = parseInt(bod.first) - parseInt(bod.second);
  } else if (bod.process == "Multiplication") {
    var output = parseInt(bod.first) * parseInt(bod.second);
  } else {
    var output = parseInt(bod.first) / parseInt(bod.second);
  }

  res.send(`
    <div class="main" style="width: 40%;margin: 15% auto;color: rgb(110, 182, 244);background-color: rgb(188, 238, 238);border: 2px solid rgb(245, 209, 209);
            line-height: 40px;border: 5px solid grey;border-radius: 5px;box-shadow: 10px 10px 5px rgb(222, 196, 196);">
      <h1 style="color: rgb(5, 5, 5);margin-left: 15%;text-shadow: 5px 5px 10px rgb(36, 33, 33);">Simple Calculator</h1>
      <div id="form" style="margin: 10%;">
        <h1 class="res">The output is: ${output}</h1> <br>
        <h2 class="back"><a href="http://localhost:8080/">Another calculation</a></h2>
      </div>
    </div>
  `);
});
app.listen(8080);
