<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';

// const { counter, increment, decrement } = useGlobal();
const { state, increment, decrement } = useCounterStore();
</script>

<template>
  <div>
    Counter: {{ state.counter }}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>
