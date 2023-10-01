import { defineStore } from 'pinia';
import { Auth } from '~/types/auth';

export const useAuthStore = defineStore('auth', () => {
	const state = reactive({ loading: false });

	async function logIn(payload: Auth) {
		const { data }: any = await useFetch('https://dummyjson.com/auth/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: payload,
		});

		state.loading = true;

		if (data.value) {
			sessionStorage.setItem('token', data?.value?.token);

			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				state.loading = false;
				navigateTo('/');
			}, 1000);
		}
	}

	function logOut() {
		sessionStorage.removeItem('token');
		navigateTo('/login');
	}

	function isLogin() {
		return sessionStorage.getItem('token') ? true : false;
	}

	function getToken() {
		return sessionStorage.getItem('token');
	}

	return {
		state,
		isLogin,
		getToken,
		logIn,
		logOut,
	};
});
