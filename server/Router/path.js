const { application } = require("express");
const express = require("express");
const db = require("../config/database.js");
const router = express.Router();

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

router.get("/", (request, response) => {
  const sql = "select * from secretPost";
  db.query(sql, function (err, result) {
    if (err) throw err;
    response.send(result);
  });
});

router.get("/", (request, response) => {
  const sql = "select * from secretPost";
  db.query(sql, function (err, result) {
    if (err) throw err;
    response.send(result);
  });
});

/* 보내기 */

router.post("/create", (request, response) => {
  console.log("1");
  const sqlInsert = "INSERT INTO secretPost(title, content) VALUES(?,?)";

  db.query(
    sqlInsert,
    [`${request.body.title}`, `${request.body.content}`],
    function (err, result) {
      if (err) throw err;
      console.log(result);
      response.redirect("/");
    }
  );
});

module.exports = router;
