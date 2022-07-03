<script setup>
  import { ref } from 'vue';
  import { useStore } from './store';

  const store = useStore();

  const input = ref(0);
  const waiting = ref(false);

  async function submit() {
    waiting.value = true;
    await store.handleCalculation(input.value);
    waiting.value = false;
  }
</script>

<template>
  <label for="calculator-input">Provide your input number here:</label><br>
  <input id="calculator-input" v-model="input" type="number" />
  <button :disabled="waiting" @click="submit">Submit</button>
</template>

<style>
</style>
