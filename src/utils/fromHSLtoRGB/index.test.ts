import { fromHSLtoRGB } from 'utils';

describe('utils: test "fromHSLtoRGB"', () => {
  it('converts HSL to RGB successfully', () => {
    expect(fromHSLtoRGB(313, 66, 62)).toEqual([222, 94, 194]);
  });
});
