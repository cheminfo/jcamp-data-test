const { readFileSync } = require("fs");
const { join } = require("path");

const toc = JSON.parse(readFileSync(join(__dirname, 'toc.json')));
let jcamp = {};
for (let file of toc){
  let name = file.filename;
  jcamp[name] = readFileSync(join(__dirname, file.url)).toString();
}
module.exports = {
  jcamp,
};

