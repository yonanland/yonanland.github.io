const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/word", function (req, res) {
  // console.log('calling server...' + req.query.word);
  const word = req.query.word;
  console.log("calling server..." + word);
  conn.connect(function (err) {
    // if (err) throw err;
    if (err) console.log(err.message);
    console.log("connected");
    const squery = conn.query(
      `SELECT * FROM entries where word = '${word}'  `,
      function (err, result) {
        // if (err) throw err;
        console.log("end of query");
        if (err) console.log(err.message);
        res.json(result);
      }
    );
  });
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "entries",
});

app.listen(8080, () => {
  console.log("server running on http://localhost:8080");
});
