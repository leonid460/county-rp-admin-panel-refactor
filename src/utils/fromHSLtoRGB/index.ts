export function fromHSLtoRGB(h: number, s: number, l: number): [number, number, number] {
  s /= 100;
  l /= 100;

  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - chroma / 2;

  let [red, green, blue] = [0, 0, 0];

  switch (true) {
    case 0 <= h && h < 60:
      [red, green, blue] = [chroma, x, 0];
      break;
    case 60 <= h && h < 120:
      [red, green, blue] = [x, chroma, 0];
      break;
    case 120 <= h && h < 180:
      [red, green, blue] = [0, chroma, x];
      break;
    case 180 <= h && h < 240:
      [red, green, blue] = [0, x, chroma];
      break;
    case 240 <= h && h < 300:
      [red, green, blue] = [x, 0, chroma];
      break;
    case 300 <= h && h < 360:
      [red, green, blue] = [chroma, 0, x];
      break;
  }

  red = Math.round((red + m) * 255);
  green = Math.round((green + m) * 255);
  blue = Math.round((blue + m) * 255);

  return [red, green, blue];
}
