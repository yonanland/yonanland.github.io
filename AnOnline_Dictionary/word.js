const mysql = require("mysql");

// configration file
var connection = mysql.createConnection({
  user: "user",
  password: "root",
  server: "localhost",
  database: "entries",
  port: 3306,
});

connection.connect();

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
