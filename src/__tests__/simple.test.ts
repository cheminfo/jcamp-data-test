import { convert } from 'jcampconverter';
import { describe, expect, it } from 'vitest';

import { jcampFiles } from '../index.js';

describe('simple test', () => {
  const relativePath = 'nmr/aspirin/1h.dx';
  it('check one name', async () => {
    const list = await jcampFiles.files();
    expect(list.map((f) => f.relativePath)).toContain(relativePath);
  });
  it('check getFile', async () => {
    await expect(jcampFiles.getFile(relativePath)).resolves.toMatchObject({
      relativePath,
    });
  });
  it('check getParsedFile', async () => {
    const parsed = await jcampFiles.getParsedData(relativePath, convert);
    expect(parsed.flatten).toHaveLength(1);
  });
  it('check getXY', async () => {
    const dataXY = await jcampFiles.getXYData(relativePath, convert);
    expect(dataXY.x[0]).toBeLessThan(dataXY.x[1]);
    expect(dataXY.x).toHaveLength(32768);
    expect(dataXY.y).toHaveLength(32768);
  });

  it('should findParsedData', async () => {
    await expect(
      jcampFiles.findParsedData('ethylbenzene_ei.jdx', convert),
    ).resolves.toBeDefined();
  });

  it('should findXYData', async () => {
    await expect(
      jcampFiles.findXYData('ethylbenzene_ei.jdx', convert),
    ).resolves.toBeDefined();
  });
});
