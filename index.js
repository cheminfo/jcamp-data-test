const { readFileSync } = require("fs");
const { join } = require("path");

let path = join(__dirname, "./Rutin_NMRdata_400MHz_DMSOd6_JDX/");

const Rutin = {
  path: path,
  experiment: {
    proton: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx")
    ),
    carbon: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_13CNMR_400MHz_JDX.jdx")
    ),
    cosy: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_COSY_400MHz_JDX.jdx")
    ),
    hsqc: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_HSQC_400MHz_JDX.jdx")
    ),
    hmbc: readFileSync(
      join(path, "Rutin_3080ug200uL_DMSOd6_HMBC_400MHz_JDX.jdx")
    ),
  },
};

module.exports = {
  Rutin,
};
