var http = require("http");
var url = require("url");
var fs = require("fs");
var calcMod = require("./simple_calculatorMod");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var qdata = q.query;
    var filename = "." + q.pathname;
    // this path ?????
    if (q.pathname == "/simple_calculator.js") {
      if (qdata.operation == "add") {
        calcMod.add(req, res, q.query);
        calcMod.displays(req, res, q.query);
      } else if (qdata.operation == "subtract") {
        calcMod.subtract(req, res, q.query);
        calcMod.displays(req, res, q.query);
      } else if (qdata.operation == "multiply") {
        calcMod.multiply(req, res, q.query);
        calcMod.displays(req, res, q.query);
      } else if (qdata.operation == "division") {
        calcMod.division(req, res, q.query);
        calcMod.displays(req, res, q.query);
      } else if (qdata.operation == "modules") {
        calcMod.modules(req, res, q.query);
        calcMod.displays(req, res, q.query);
      }
    } else
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/css" }); // Content-Type not included
        res.write(data);
        return res.end();
      });
  })
  .listen(8090);
