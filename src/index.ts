import { join } from 'path';

import { DataXY } from 'cheminfo-types';
import { FileCollection } from 'file-collection';
import { convert } from 'jcampconverter';
import { xySortX } from 'ml-spectra-processing';

const path = join(__dirname, '../data/');

type ConvertResult = ReturnType<typeof convert>;

async function getFileCollection(): Promise<FileCollection> {
  const fileCollection = new FileCollection();
  await fileCollection.appendPath(path);
  fileCollection.files.forEach((file) => {
    file.relativePath = file.relativePath.replace('data/', '');
  });
  return fileCollection;
}

export async function getList(): Promise<string[]> {
  const fileCollection = await getFileCollection();
  return fileCollection.files.map((f) => f.relativePath);
}

export async function getFile(relativePath: string) {
  const fileCollection = await getFileCollection();
  const file = fileCollection.files.find(
    (d) => d.relativePath === relativePath,
  );
  if (!file) {
    throw new Error(`There is not a file with name: ${relativePath} `);
  }
  return file;
}

export async function getParsedFile(name: string): Promise<ConvertResult> {
  const file = await getFile(name);
  const jcamp = await file.text();
  return convert(jcamp, { noContour: true });
}

export async function getXY(name: string): Promise<DataXY> {
  const parsed = await getParsedFile(name);
  const firstSpectrum = parsed.flatten[0]?.spectra[0]?.data;
  return xySortX(firstSpectrum);
}
