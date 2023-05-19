const http = require("http");
const user = require("./userFile");

console.log(
  user.getName() +
    " lives in " +
    user.getLocation() +
    ". He is an " +
    user.Nationality +
    "."
);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/http" });
    res.write("\t Hello People of Eritrea.\n\n");
    res.write("\t Happy Independene Day 2023!!\n\n\t");
    res.write(req.url + "\n\n");
    res.end("\t Remember to praise God.");
  })
  .listen(8080, () => console.log("Server is running on 8080"));

const express = require("express");
const app = express();

app.listen(8080, () => console.log("Hello Atum Amina!"));
