var http = require("http");
var url = require("url");
var fs = require("fs");
var simple_calculatormod = require("./simple_calculatorMod");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var qdata = q.query;
    var filename = "." + q.pathname;
    if (q.pathname == "sim") {
      if (qdata.operation == "add") {
        simple_calculatormod.add(req, res, q.query);
        simple_calculatormod.displays(req, res, q.query);
      } else if (qdata.operation == "subtract") {
        simple_calculatormod.subtract(req, res, q.query);
        simple_calculatormod.displays(req, res, q.query);
      } else if (qdata.operation == "multiply") {
        simple_calculatormod.multiply(req, res, q.query);
        simple_calculatormod.displays(req, res, q.query);
      } else if (qdata.operation == "division") {
        simple_calculatormod.division(req, res, q.query);
        simple_calculatormod.displays(req, res, q.query);
      } else if (qdata.operation == "modules") {
        simple_calculatormod.modules(req, res, q.query);
        simple_calculatormod.displays(req, res, q.query);
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

exports.displays = function (req, res, vals) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write('<head><meta charset="utf-8"/>');
  res.write("<title>Calculator Web Site</title>");
  res.write("</head>");
  res.write("<body>");
  res.write(
    '<p style="background-color: lightgray" ; style="font:1.5rem bolder";> The output is: '
  );
  res.write(String(result));
  res.write("</p>");
  res.write(
    "<a href='https://yonanland.github.io/simple_calculator/simplecalculator.html'>To Perform another calculation</a>"
  );
  res.write("</body>");
  res.write("</html>");
  return res.end();
};
