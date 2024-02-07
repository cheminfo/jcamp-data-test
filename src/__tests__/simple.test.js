import { getFile, getList, getParsedFile } from "..";

describe("simple test", () => {
  const relativePath = "aspirin/1h.dx";
  it("check one name", async () => {
    const list = await getList();
    expect(list).toContain(relativePath);
  });
  it("check getFile", async () => {
    const file = await getFile(relativePath);
    expect(file.relativePath).toBe(relativePath);
  });
  it("check getParsedFile", async () => {
    const parsed = await getParsedFile(relativePath);
    expect(parsed.flatten).toHaveLength(1);
  });
});
