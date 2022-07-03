import { defineStore } from 'pinia';

function processInput(input) {
  const sampleResponse = {
    datetime: new Date(),
    value: 123,
    number: input,
    occurrences: 5,
    last_datetime: new Date(),
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sampleResponse);
    }, 5000);
  });
}

export const useStore = defineStore('main', {
  state() {
    return {
      history: [],
    }
  },
  actions: {
    async handleCalculation(input) {
      const response = await processInput(input);
      this.history.push(response);
    },
  }
});
