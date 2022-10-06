const express = require("express");
const app = express();
const path = require("./Router/path");
const cors = require("cors");
const bodyParser = require("body-parser");

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  next();
});

app.use(bodyParser.json());

app.use("/", path);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
