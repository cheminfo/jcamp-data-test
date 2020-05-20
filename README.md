# jcamp-data-test

provides JCAMP-DX NMR data files for testing purposes.

## usage

```js
import { jcamp } from 'jcamp-data-test';
console.log(Ohject.keys(jcamp)); // to get a list
console.log(jcamp['Rutin_3080ug200uL_DMSOd6_qHNMR_400MHz_JDX.jdx']); // to get a string with proton data
```
## acknowledgements
The original data were found [here](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/ZAZDNM) thanks to Jonathan and Guido.
