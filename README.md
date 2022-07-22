# jcamp-data-test

provides JCAMP-DX NMR data files for testing purposes.

## usage

```js
import { getData, getFileList, getList } from 'jcamp-data-test';
console.log(getList()); // to get a list of file names
console.log(getFileList('Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx')) // to get an array of fileList.
const buffer = getData('Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx'); // to get a promise of the arrayBuffer of the file.
```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
