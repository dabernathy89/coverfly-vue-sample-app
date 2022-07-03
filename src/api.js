import calculator from "./calculator";

const api = {
  async getCalculatedValue(input) {
    // This is a placeholder for:
    // const response = await someApiLibrary.request(....);
    const response = await calculator.calculate(JSON.stringify({input: input}));
    return response;
  }
}

export default api;