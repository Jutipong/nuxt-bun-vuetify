import { defineStore } from 'pinia';
import { UserLogin } from '~/types/auth';

export const useAuthStore = defineStore('auth', () => {
	const router = useRouter();
	const state = reactive({ loading: false });
	const user_login = 'user_login';

	async function logIn(username: string, password: string) {
		state.loading = true;

		const { data }: any = await useFetch<UserLogin>('https://dummyjson.com/auth/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: { username, password },
		});

		if (data.value) {
			sessionStorage.setItem(user_login, JSON.stringify(data.value));

			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				state.loading = false;
				// navigateTo('/');
				router.replace('/');
			}, 4000);
		} else {
			state.loading = false;
		}
	}

	function logOut(): void {
		const timeout = setTimeout(() => {
			sessionStorage.removeItem(user_login);
			clearTimeout(timeout);
		}, 200);
		router.replace('/login');
	}

	function _getUserInfo(): UserLogin | null {
		const userLoin = sessionStorage.getItem(user_login);
		if (!userLoin) return null;

		const user: UserLogin = JSON.parse(userLoin);
		return user;
	}

	function isLogin(): boolean {
		let userInfo = _getUserInfo();
		return userInfo ? true : false;
	}

	function getUserInfo(): UserLogin {
		const userInfo = _getUserInfo()!;
		return userInfo;
	}

	function getToken(): string | null {
		const userInfo = _getUserInfo();
		if (!userInfo) return null;

		return userInfo.token;
	}

	return {
		state,
		isLogin,
		getToken,
		getUserInfo,
		logIn,
		logOut,
	};
});
