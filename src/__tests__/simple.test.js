import { getFile, getFileList, getList } from "..";

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
  it("check getFileList", async () => {
    const fileList = await getFileList();
    expect(fileList.map((f) => f.name)).toContain(filename);
  });
});
