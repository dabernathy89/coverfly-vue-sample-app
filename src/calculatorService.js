import db from "./database";
import getResult from './calculator';
const database = db.inputs;


function addToHistory(input, result, now) {
  if (typeof database[input] === 'undefined') {
    database[input] = {result: result, history: [now]};
    return;
  }

  database[input].history.push(now);
}

function validate(num) {
  if (!Number.isInteger(num) || num < 1 || num > 100) {
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