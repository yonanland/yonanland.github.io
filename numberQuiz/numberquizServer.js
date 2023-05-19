var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var output = require("./numberquiz.js");
http
  .createServer(function (req, res) {
    var q = new URL(req.url, "https://localhost:8080/");
    output.guessnumber(req, res, q.searchParams);
  })
  .listen(8080, () => console.log("Server is running on 8080"));
