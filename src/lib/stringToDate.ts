function yyyymmToDayAII(val: string): string {
  if (val.length != 6) {
    console.error(`Use yyyymm form for value ${val}`);
    return val;
  }
  let date = new Date(parseInt(val.slice(0, 4)), parseInt(val.slice(4)));
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

export { yyyymmToDayAII };
