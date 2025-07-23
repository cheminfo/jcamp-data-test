# jcamp-data-test

Provides JCAMP-DX NMR data files for testing purposes.

## usage

`jcampFiles` is a `JCampDataTestApi` instance, it extends `DataTestApi` to add methods specific to JCAMP-DX files:

- `findParsedData(name, convertFn)`
- `getParsedData(relativePath, convertFn)`
- `findXYData(name, convertFn)`
- `getXYData(relativePath, convertFn)`

```js
import { jcampFiles } from 'jcamp-data-test';

const filename = 'Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx';

const file = await jcampFiles.findFile(filename);
const jcampBuffer = await file.buffer();
//or
const buffer = await jcampFiles.findData(filename);
```

## acknowledgements

The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.

```console
% tree data
data
├── ir
│   └── ethylbenzene.jdx
├── mass
│   ├── ethylbenzene_ei.jdx
│   └── ethylbenzene_hrms.jdx
└── nmr
    ├── aspirin
    │   ├── 1h.dx
    │   └── 1h.fid.dx
    ├── indometacin
    │   ├── 1h.dx
    │   ├── cosy.dx
    │   ├── hmbc.dx
    │   ├── hsqc.dx
    │   └── structure.mol
    ├── nanalysis
    │   ├── 1h.jdx
    │   └── pseudoT1.jdx
    ├── naphtoicAcid
    │   ├── 1h.dx
    │   └── 1h.fid.dx
    ├── oxfordInstruments
    │   ├── 1h.jdx
    │   ├── cosy.jdx
    │   └── hsqc-me.jdx
    ├── qmagnetics
    │   └── ibuprofen_j_ave_qmagnetics.jdx
    ├── rutin
    │   ├── 13c.jdx
    │   ├── cosy.jdx
    │   ├── hmbc.jdx
    │   ├── hsqc.jdx
    │   └── qH.jdx
    └── simulated
        ├── d1-1.2_j7.jdx
        ├── d1-2-3-4-5-6-7-8.jdx
        ├── d1-2-3-4-5-6-7-8HR.jdx
        ├── d1-2-3-4-5-6-7-8_baseline.jdx
        ├── d1-2-3_j16-10-2.jdx
        ├── d1-2_j7.jdx
        └── d1-7_j7.jdx

12 directories, 30 files
```

NB: the `data` folder is `jcampFiles.root`.
