var result = 0;
exports.add = function (req, res, vals) {
  result = parseInt(vals.first) + parseInt(vals.second);
};
exports.subtract = function (req, res, vals) {
  result = parseInt(vals.first) - parseInt(vals.second);
};
exports.multiply = function (req, res, vals) {
  result = parseInt(vals.first) * parseInt(vals.second);
};
exports.division = function (req, res, vals) {
  result = parseInt(vals.first) / parseInt(vals.second);
};
exports.modules = function (req, res, vals) {
  result = parseInt(vals.first) % parseInt(vals.second);
};

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
    <div class="responder">"<a href='https://yonanland.github.io/simple_calculator/simplecalculator.html'>To Perform another calculation <br/> Click me! </a>"</div>
  );


<div class="main" style="width: 40%;margin: 15% auto;color: rgb(110, 182, 244);background-color: rgb(188, 238, 238);border: 2px solid rgb(245, 209, 209);
            line-height: 40px;border: 5px solid grey;border-radius: 5px;box-shadow: 10px 10px 5px rgb(222, 196, 196);">
      <h1 style="color: rgb(5, 5, 5);margin-left: 15%;text-shadow: 5px 5px 10px rgb(36, 33, 33);">Simple Calculator</h1>
      <div id="form" style="margin: 10%;">
        <h1 class="res">The output is: ${output}</h1> <br>
        <h2 class="back"><a href="http://localhost:8080/">Another calculation</a></h2>
      </div>
    </div>







  res.write("</body>");
  res.write("</html>");
  return res.end();
};
