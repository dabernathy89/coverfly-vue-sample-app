function sumOfSquares(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += Math.pow(i, 2);
  }

  return sum;
}

function squareOfSums(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return Math.pow(sum, 2);
}

function getResult(num) {
  return squareOfSums(num) - sumOfSquares(num);
}

export {
    sumOfSquares,
    squareOfSums
};
export default getResult;
