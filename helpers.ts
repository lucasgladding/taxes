export function round(value: number, digits: number = 2) {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}
