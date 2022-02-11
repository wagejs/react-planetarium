export function delimeterThousand(x: number, nullState: string, unit: string) {
  if (!x) {
    return nullState;
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +" "+unit;
}