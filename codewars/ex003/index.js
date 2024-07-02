function squareDigits(num) {
  const numStr = num.toString();
  let result = "";
  for (let i = 0; i < numStr.length; i++) {
    const digit = numStr[i];
    const squared = Math.pow(parseInt(digit), 2);
    result += squared.toString();
  }
  return parseInt(result);
}
