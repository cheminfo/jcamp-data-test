import { join } from "path";

import { fileCollectionFromPath } from "filelist-utils";

const path = join(__dirname, "../data/");

const cache = {};

async function loadFileList(path) {
  if (cache[path]) {
    return cache[path];
  }

  cache[path] = await fileCollectionFromPath(path, {
    unzip: { zipExtensions: [] },
    ungzip: { gzipExtensions: [] },
  });

  return cache[path];
}

export function getFileList() {
  return loadFileList(path);
}

export async function getList() {
  const fileCollection = await getFileList();
  return fileCollection.files.map((file) => file.name);
}

export async function getFile(name) {
  const fileCollection = await getFileList();
  const file = fileCollection.files.find((d) => d.name === name);

  if (!file) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return file;
}
export async function getData(name) {
  return (await getFile(name)).arrayBuffer();
}
