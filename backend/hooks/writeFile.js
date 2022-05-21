const fs = require("fs");

const writeFile = (path, data) => {
  fs.writeFileSync(path, data, "utf-8", function (err) {
    if (err) throw err;
  });
};

module.exports.writeFile = writeFile;
