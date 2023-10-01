import { defineStore, acceptHMRUpdate } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
	const state = ref({ counter: 0 });
	//    const state={ user: useLocalStorage('pinia/auth/login', 'bob') };

	function increment() {
		state.value.counter++;
	}

	function decrement() {
		state.value.counter--;
	}

	return { state, increment, decrement };
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
