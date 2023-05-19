let http = require("http");
let dt = require("./myModule.js");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDate());
    res.end("Enjoy your day!");
  })
  .listen(8080, () => console.log("Server started on 8080"));
