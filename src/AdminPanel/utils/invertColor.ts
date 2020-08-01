export function invertColor(hexColor: string) {
  return (Number(`0x1${hexColor}`) ^ 0xffffff)
    .toString(16)
    .substr(1)
    .toUpperCase();
}
