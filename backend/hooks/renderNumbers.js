const { writeFile } = require("./writeFile");
const aboutnumber = require("aboutnumber");

let arr = [];
for (let i = 1; i < 10000; i++) {
  let str;
  if (i > 999) {
    str = i.toString().padStart(4, "0");
  } else {
    // str = i.toString().padStart(3, "0");
    str = i.toString().padStart(3, "0");
  }
  // let str = i.toString().padStart(4, "0");
  let num = Number(str);
  let obj = {
    num: str,
    analysis: aboutnumber(num),
  };
  arr.push(obj);
}

writeFile("./10k_1.json", JSON.stringify(arr));
