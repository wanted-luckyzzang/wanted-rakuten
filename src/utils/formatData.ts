export const roundToTwo = (num: number) => {
  if (num >= 1024 ** 2) {
    const m = Number(((Math.abs(num) / 1024 ** 2) * 100).toPrecision(15));
    return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}MB`;
  } else if (num >= 1024) {
    const m = Number(((Math.abs(num) / 1024) * 100).toPrecision(15));
    return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}KB`;
  }
  const m = Number((Math.abs(num) * 100).toPrecision(15));
  return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}BYTE`;
};
