const { writeFileSync } = require("fs");
const { join } = require("path");
const recursive = require("recursive-readdir-synchronous");

//let path = join(__dirname, "./data/Rutin_NMRdata_400MHz_DMSOd6_Jeol/");
let path = join(__dirname, "data");

let parentDir = join(__dirname);
let files = recursive(path).map((file) => file.replace(parentDir, "."));

let toc = [];

for (let file of files) {
  let parts = file.split("/");
  toc.push({
    filename: parts.slice(2).join(" "),
    url: file,
  });
}

writeFileSync(
  join(__dirname, "./toc.json"),
  `${JSON.stringify(toc, undefined, 2)}`
);

console.log(JSON.stringify(toc, undefined, 2));
