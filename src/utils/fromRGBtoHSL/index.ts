export function fromRGBtoHSL(R: number, G: number, B: number): [number, number, number] {
  R /= 255;
  G /= 255;
  B /= 255;

  const cmin = Math.min(R, G, B);
  const cmax = Math.max(R, G, B);
  const delta = cmax - cmin;
  let [h, s, l] = [0, 0, 0];

  if (delta == 0) h = 0;
  else if (cmax == R) h = ((G - B) / delta) % 6;
  else if (cmax == G) h = (B - R) / delta + 2;
  else h = (R - G) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}
