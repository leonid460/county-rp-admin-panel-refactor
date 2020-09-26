import { fromRGBtoHSL } from 'utils';

describe('utils: test "fromRGBtoHSL"', () => {
  it('converts RGB to HSL successfully', () => {
    expect(fromRGBtoHSL(222, 94, 194)).toEqual([313, 66, 62]);
  });
});
