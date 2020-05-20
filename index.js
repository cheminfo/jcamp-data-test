const { readFileSync } = require("fs");
const { join } = require("path");
const recursive = require('recursive-readdir-synchronous');

const toc = JSON.parse(readFileSync(join(__dirname, 'toc.json')));
let jcamp = {};
for (let file of toc){
  let name = file.filename;
  jcamp[name] = readFileSync(join(__dirname, file.url));
}
module.exports = {
  jcamp,
};

// const { readFileSync } = require("fs");
// const { join } = require("path");

// let path = join(__dirname, "./Rutin_NMRdata_400MHz_DMSOd6_JDX/");

// const Rutin = {
//   path: path,
//   experiment: {
//     proton: readFileSync(
//       join(path, "Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx")
//     ),
//     carbon: readFileSync(
//       join(path, "Rutin_3080ug200uL_DMSOd6_13CNMR_400MHz_JDX.jdx")
//     ),
//     cosy: readFileSync(
//       join(path, "Rutin_3080ug200uL_DMSOd6_COSY_400MHz_JDX.jdx")
//     ),
//     hsqc: readFileSync(
//       join(path, "Rutin_3080ug200uL_DMSOd6_HSQC_400MHz_JDX.jdx")
//     ),
//     hmbc: readFileSync(
//       join(path, "Rutin_3080ug200uL_DMSOd6_HMBC_400MHz_JDX.jdx")
//     ),
//   },
// };

// module.exports = {
//   Rutin,
// };

