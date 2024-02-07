import { join } from "path";

import { FileCollection } from "file-collection";
import { convert } from "jcampconverter";

const path = join(__dirname, "../data/");


async function getFileCollection() {
  const fileCollection = new FileCollection()
  await fileCollection.appendPath(path)
  fileCollection.files.forEach((file) => {
    file.relativePath = file.relativePath.replace('data/', '');
  });
  return fileCollection
}

export async function getList() {
  const fileCollection = await getFileCollection();
  return fileCollection.files.map((f) => f.relativePath);
}

export async function getFile(relativePath) {
  const fileCollection = await getFileCollection();
  const file = fileCollection.files.find((d) => d.relativePath === relativePath);

  if (!file) {
    throw new Error(`There is not a file with name: ${relativePath} `);
  }

  return file;
}

export async function getParsedFile(name) {
  const file = await getFile(name);
  const jcamp = await file.text()
  return convert(jcamp, { noContour: true })
}
