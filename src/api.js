import calculatorService from "./calculatorService";

const api = {
  async getCalculatedValue(input) {
    // This is a placeholder for:
    // const response = await someApiLibrary.request(....);
    const response = await calculatorService.calculate(JSON.stringify({input: input}));
    return response;
  }
}

export default api;