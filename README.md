# jcamp-data-test

provides JCAMP-DX NMR data files for testing purposes.

## usage

```js
import { getData, getFile, getList } from "jcamp-data-test";
const listOfFilenames = await getList();

const filename = "Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx";

const file = await getFile(filename);
const jcampString = await file.text();
const jcampBuffer = await file.arrayBuffer();
//or
const buffer = await getData(filename);
```

## acknowledgements

The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
