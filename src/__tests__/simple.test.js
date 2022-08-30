import { getList } from "..";

describe("simple test", () => {
  it("check one name", async () => {
    const list = await getList();

    expect(list).toContain("aspirin-1h.dx");
  });
});
