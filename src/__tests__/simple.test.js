import { getFile, getList, getParsedFile, getXY } from '..';

describe('simple test', () => {
  const relativePath = 'aspirin/1h.dx';
  it('check one name', async () => {
    const list = await getList();
    expect(list).toContain(relativePath);
  });
  it('check getFile', async () => {
    const file = await getFile(relativePath);
    expect(file.relativePath).toBe(relativePath);
  });
  it('check getParsedFile', async () => {
    const parsed = await getParsedFile(relativePath);
    expect(parsed.flatten).toHaveLength(1);
  });
  it('check getXY', async () => {
    const dataXY = await getXY(relativePath);
    expect(dataXY.x[0]).toBeLessThan(dataXY.x[1]);
    expect(dataXY.x).toHaveLength(32768);
    expect(dataXY.y).toHaveLength(32768);

  });
});
