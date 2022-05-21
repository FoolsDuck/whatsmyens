const router = require("express").Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  let response;
  const page = Number(req.query.page);
  let limit = 60;
  if (page) {
    skip = page * limit;
  } else {
    skip = 0;
  }
  let end = skip + limit;
  const data = fs.readFileSync("./10k.json", "utf8");
  const jsonData = JSON.parse(data);
  if (req.query.q) {
    const filteredData = jsonData.filter((s) => s.num.includes(req.query.q));
    if (req.query.sortby && req.query.sortby != "Default") {
      let sortedData;
      if (
        req.query.sortby === "dividersSum" ||
        req.query.sortby === "dividersCount"
      ) {
        sortedData = jsonData.sort(
          (a, b) => b.analysis[req.query.sortby] - a.analysis[req.query.sortby]
        );
      } else {
        sortedData = jsonData.sort(
          (a, b) => a.analysis[req.query.sortby] - b.analysis[req.query.sortby]
        );
      }
      response = sortedData.slice(skip, end);
    } else {
      response = filteredData.slice(skip, end);
    }
  } else {
    if (req.query.sortby && req.query.sortby != "Default") {
      let sortedData;
      if (
        req.query.sortby === "dividersSum" ||
        req.query.sortby === "dividersCount"
      ) {
        sortedData = jsonData.sort(
          (a, b) => b.analysis[req.query.sortby] - a.analysis[req.query.sortby]
        );
      } else {
        sortedData = jsonData.sort(
          (a, b) => a.analysis[req.query.sortby] - b.analysis[req.query.sortby]
        );
      }
      response = sortedData.slice(skip, end);
    } else {
      response = jsonData.slice(skip, end);
    }
  }
  res.send(response);
});

router.get("/options", async (req, res) => {
  const options = [
    "dividersCount",
    "dividersSum",
    "digitCount",
    "unixDate",
    "cubeRoot",
    "binary",
    "possibleNumeralSystem",
    "reversedNumber",
    "square",
    "squareRoot",
    "sine",
    "cosine",
    "tangent",
  ];
});

module.exports = router;
