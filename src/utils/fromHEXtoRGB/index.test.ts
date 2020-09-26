import { fromHexToRGB } from './index';

describe('utils: test "fromHEXtoRGB"', () => {
  it('converts HEX to RGB successfully', () => {
    expect(fromHexToRGB('#00bfff')).toEqual([0, 191, 255]);
    expect(fromHexToRGB('#5a6100')).toEqual([90, 97, 0]);
  });
});
