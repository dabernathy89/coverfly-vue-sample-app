import { defineStore } from 'pinia';
import api from './api';

export const useStore = defineStore('main', {
  state() {
    return {
      history: [],
    }
  },
  actions: {
    async handleCalculation(input) {
      const response = await api.getCalculatedValue(input);
      this.history.push(response);
    },
  }
});
