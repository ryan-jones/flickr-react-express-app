
export const abbreviateString = (input: string, value: number) => {
  if (!input) { return };
  return input.length > value ? `${input.slice(0, value)}...` : input
}