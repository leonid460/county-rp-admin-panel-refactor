export function makeArray<T>(length: number, creatingCallback: (index: number) => T) {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(creatingCallback(i));
  }

  return array;
}
