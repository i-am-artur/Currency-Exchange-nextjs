export function round(number: number, decimals: number) {
  const decimalPlaces = Math.pow(10, decimals);
  return (Math.round(number * decimalPlaces) / decimalPlaces).toFixed(2);
}
