function total(addCount, addPrice, currentTotal) {
  let result = 0;
  if (currentTotal === undefined) {
      currentTotal = 0;
  }
  result = currentTotal + addCount * addPrice
  return result = Number(result.toFixed(2));

}

let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);

console.log(sum);
