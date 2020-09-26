import { fromHEXtoHSL } from 'utils';

describe('utils: test "fromHEXtoHSL"', () => {
  it('converts HEX to HSL successfully', () => {
    expect(fromHEXtoHSL('#00bfff')).toEqual([195, 100, 50]);
    expect(fromHEXtoHSL('#5a6100')).toEqual([64, 100, 19]);
  });
});
