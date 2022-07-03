<script setup>
  import { useStore } from '../store';
  import { format } from 'date-fns'

  const store = useStore();

  function formatDate(date) {
    return format(date, 'PP pp');
  };
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
        <th># Runs</th>
        <th>Date</th>
        <th>Previous Run Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="response in store.history">
        <td>{{ response.number }}</td>
        <td>{{ response.value }}</td>
        <td>{{ response.occurrences }}</td>
        <td>{{ formatDate(response.datetime) }}</td>
        <td>{{ formatDate(response.last_datetime) }}</td>
      </tr>
    </tbody>
  </table>
</template>