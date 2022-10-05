const { application } = require("express");
const express = require("express");
const { default: App } = require("../../client/src/App.js");
const db = require("../config/database.js");
const router = express.Router();

// https://velog.io/@secho/React-03%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%EB%85%B8%EB%93%9C%EC%82%AC%EC%9D%B4%EC%9D%98-%ED%86%B5%EC%8B%A0-%EB%85%B8%EB%93%9C%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0

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
module.exports = router;
