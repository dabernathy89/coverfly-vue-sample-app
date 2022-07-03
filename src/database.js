import { defineStore } from 'pinia';
import pinia from './pinia';

const databaseStore = defineStore('database', {
  state() {
    return {
        inputs: {},
    }
  },
});

const database = databaseStore(pinia);

export default database;