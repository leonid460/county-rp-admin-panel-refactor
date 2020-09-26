import { fromHSLtoRGB } from 'utils';

function convertRGBChannelsToHex(red: number, green: number, blue: number) {
  return [red, green, blue].map((channel) => channel.toString(16));
}

function normalizeHexChannel(red: string, green: string, blue: string) {
  return [red, green, blue].map((channel) => (channel.length === 1 ? '0' + channel : channel));
}

export function fromHSLToHex(h: number, s: number, l: number): string {
  const [red, green, blue] = fromHSLtoRGB(h, s, l);

  let [stringR, stringG, stringB] = convertRGBChannelsToHex(red, green, blue);

  [stringR, stringG, stringB] = normalizeHexChannel(stringR, stringG, stringB);

  return '#' + stringR + stringG + stringB;
}
