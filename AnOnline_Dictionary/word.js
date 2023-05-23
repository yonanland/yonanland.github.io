const mysql = require("mysql");

// configration file
var connection = mysql.createConnection({
  user: "yonanland",
  password: "root",
  server: "localhost",
  database: "entries",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.wordMeaning = function (res, searchterm) {
  connection.query(
    'select * from entries where word = "' + searchterm + '"',
    function (err, rows) {
      if (err) throw err;
      //   res.send(rows);
      res.status(200).json(rows);
    }
  );
};
