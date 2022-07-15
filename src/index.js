import { join, resolve } from 'path';

import { fileListFromPath } from 'filelist-utils';

const path = resolve(join(__dirname, '../data/'));
const fileList = fileListFromPath(path);

export function getList() {
  return fileList.map((d) => d.name);
}

export function getFileList(name) {
  const result = fileList.filter((d) => d.name === name);

  if (result.length < 1) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result[0];
}

export function getData(name) {
  return getFileList(name).arrayBuffer();
}