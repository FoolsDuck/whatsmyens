const router = require("express").Router();
const fs = require("fs");

router.get("/:img", async (req, res) => {
  const params = req.params;
  res.sendFile(`${__dirname}/images/${params.img}.jpeg`);
});

module.exports = router;
