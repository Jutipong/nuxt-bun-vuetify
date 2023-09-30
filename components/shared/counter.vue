<script setup lang="ts">
const { counter, increment, decrement } = useGlobal();
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>
