import { join } from 'node:path';

import type { DataXY } from 'cheminfo-types';
import type { AbsolutePath, Path } from 'data-test-api';
import { DataTestApi } from 'data-test-api';
import type { convert } from 'jcampconverter';
import { xEnsureFloat64, xySortX } from 'ml-spectra-processing';

type ConvertFn = typeof convert;
type ConvertResult = ReturnType<ConvertFn>;

const path = join(import.meta.dirname, '../data/') as AbsolutePath;

export class JCampDataTestApi<
  RootPath extends Path<string>,
> extends DataTestApi<RootPath> {
  async getParsedData(
    relativePath: string,
    convertFn: ConvertFn,
  ): Promise<ConvertResult> {
    const file = await this.getFile(relativePath);
    const buffer = await file.buffer();
    return convertFn(buffer, { noContour: true });
  }

  async findParsedData(
    name: string,
    convertFn: ConvertFn,
  ): Promise<ConvertResult> {
    const file = await this.findFile(name);
    const buffer = await file.buffer();
    return convertFn(buffer, { noContour: true });
  }

  async getXYData(
    relativePath: string,
    convertFn: ConvertFn,
  ): Promise<DataXY<Float64Array>> {
    const parsed = await this.getParsedData(relativePath, convertFn);
    const { x, y } = parsed.flatten[0].spectra[0].data;
    return xySortX({
      x: xEnsureFloat64(x),
      y: xEnsureFloat64(y),
    });
  }

  async findXYData(
    name: string,
    convertFn: ConvertFn,
  ): Promise<DataXY<Float64Array>> {
    const parsed = await this.findParsedData(name, convertFn);
    const { x, y } = parsed.flatten[0].spectra[0].data;
    return xySortX({
      x: xEnsureFloat64(x),
      y: xEnsureFloat64(y),
    });
  }
}

export const jcampFiles = new JCampDataTestApi(path);
