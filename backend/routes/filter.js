const router = require("express").Router();
const fs = require("fs");

router.get("/", async (req, res) => {
  const query = req.query.q;
  const data = fs.readFileSync("./10k.json", "utf8");
  const jsonData = JSON.parse(data);

  const filteredData = jsonData.filter((s) => s.num.includes(query));
  const response = filteredData.slice(0, 60);
  res.send(response);
});

module.exports = router;
