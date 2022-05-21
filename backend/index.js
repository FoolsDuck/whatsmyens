const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
dotenv.config();
const port = 8080;

// Add headers

app.use(function (req, res, next) {
  // Origin to allow
  const allowedOrigins = ["http://localhost:3000", "https://*.ens.domains"];
  const origin = req.headers.origin;
  // if (allowedOrigins.includes(origin)) {
  //   res.setHeader("Access-Control-Allow-Origin", origin);
  // }
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  // Request headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,token,auth-token"
  );
  next();
});

app.use(bodyParser.json());
app.disable("x-powered-by");

const rank = require("./routes/rank");
const filter = require("./routes/filter");
const imgRecord = require("./routes/getImg");

// routes
app.use("/api/rank", rank);
app.use("/api/filter", filter);
app.use("/img", imgRecord);

app.use(express.static(path.join(__dirname, `../frontend/build`)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, `../frontend/build`, "index.html"));
});

app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
