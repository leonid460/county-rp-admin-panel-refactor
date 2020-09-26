import { fromHSLToHex } from './index';

describe('utils: test "fromHSLtoHEX"', () => {
  it('converts HSL to HEX successfully', () => {
    expect(fromHSLToHex(195, 100, 50)).toBe('#00bfff');
    expect(fromHSLToHex(64, 100, 19)).toBe('#5a6100');
  });
});
