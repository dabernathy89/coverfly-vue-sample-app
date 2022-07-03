<script setup>
  import { ref } from 'vue';
  import { useStore } from './store';
  import History from './components/History.vue';

  const store = useStore();

  const input = ref(1);
  const waiting = ref(false);
  const failed = ref(false);

  async function submit() {
    failed.value = false;
    waiting.value = true;
    try {
      await store.handleCalculation(input.value);
    } catch (err) {
      console.log({err});
      failed.value = true;
      input.value = 1;
    }
    waiting.value = false;
  }
</script>

<template>
  <form @submit.prevent="submit">
    <label for="calculator-input">Provide your input number here:</label><br>
    <input :disabled="waiting" id="calculator-input" v-model="input" type="number" />
    <input type="submit" :disabled="waiting" value="Submit">
  </form>

  <p v-if="failed">
    Please enter a number between 1 and 100.
  </p>

  <hr>

  <History />
</template>

<style>
</style>
