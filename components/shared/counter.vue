<script setup lang="ts">
	const { state, increment, decrement } = useCounterStore();
</script>

<template>
	<div>
		Counter: {{ state.counter }}
		<button @click="increment()">+</button>
		<button @click="decrement()">-</button>
	</div>
</template>
