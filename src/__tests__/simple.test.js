import { getFile, getFileCollection, getList } from "..";

describe("simple test", () => {
  const filename = "aspirin-1h.dx";
  it("check one name", async () => {
    const list = await getList();

    expect(list).toContain(filename);
  });
  it("check getFile", async () => {
    const file = await getFile(filename);
    expect(file.name).toBe(filename);
  });
  it("check getFileCollection", async () => {
    const fileCollection = await getFileCollection();
    expect(fileCollection.files.map((f) => f.name)).toContain(filename);
  });
});
