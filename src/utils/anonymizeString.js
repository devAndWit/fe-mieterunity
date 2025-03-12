export const anonymizeString = (str) => {
  if (str.length <= 4) {
    return "***";
  }
  const middle = str.slice(1, -1);
  return `***${middle}***`;
}
