const { getList } = require('../../lib/index');

describe('simple test', () => {
  it('check one name', () => {
    const list = getList();

    expect(list).toContain('aspirin-1h.dx');
  });
});
