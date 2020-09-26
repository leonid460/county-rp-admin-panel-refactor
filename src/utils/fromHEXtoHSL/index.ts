import { fromHexToRGB, fromRGBtoHSL } from 'utils';

export function fromHEXtoHSL(hex: string): [number, number, number] {
  const [red, green, blue] = fromHexToRGB(hex);

  return fromRGBtoHSL(red, green, blue);
}
