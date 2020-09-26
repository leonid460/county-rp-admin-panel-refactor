export function fromHexToRGB(hex: string): [number, number, number] {
  let [red, green, blue] = ['0', '0', '0'];

  if (hex.length == 4) {
    red = '0x' + hex[1] + hex[1];
    green = '0x' + hex[2] + hex[2];
    blue = '0x' + hex[3] + hex[3];
  } else if (hex.length == 7) {
    red = '0x' + hex[1] + hex[2];
    green = '0x' + hex[3] + hex[4];
    blue = '0x' + hex[5] + hex[6];
  }

  return [Number(red), Number(green), Number(blue)];
}
