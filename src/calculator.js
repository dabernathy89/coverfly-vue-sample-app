import db from "./database";
const database = db.inputs;

// difference between:
// (a) the sum of the squares of the first n natural numbers and (b) the square of the sum of the first n natural numbers, where n is an integer greater than 0 and less than or equal to 100

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

function addToHistory(input, result, now) {
  if (typeof database[input] === 'undefined') {
    database[input] = {result: result, history: [now]};
    return;
  }

  database[input].history.push(now);
}

function validate(num) {
  if (!Number.isInteger(num) || num < 0 || num > 100) {
    throw 'Invalid input: number should be between 1 and 100.'
  }
}

function buildResponse(now, result, input) {
  const occurrences = database[input].history.length;
  const last_datetime = occurrences > 1
    ? database[input].history[occurrences - 2]
    : now;

  return {
    datetime: now,
    value: result,
    number: input,
    occurrences: occurrences,
    last_datetime: last_datetime,
  }
}

const calculator = {
  calculate(body) {
    const input = JSON.parse(body).input;
    validate(input);

    const now = new Date();
    const result = typeof database[input] !== 'undefined'
      ? database[input].result
      : getResult(input);

    addToHistory(input, result, now);

    const response = buildResponse(now, result, input);

    // Imitate HTTP request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response);
      }, 100);
    });
  }
}

export default calculator;