import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
	const state = reactive({ loading: false });
	const user_login = 'user_login';

	async function logIn(payload: IAuth) {
		const { data }: any = await useFetch<IUserLogin>('https://dummyjson.com/auth/login', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: payload,
		});

		state.loading = true;

		if (data.value) {
			sessionStorage.setItem(user_login, JSON.stringify(data.value));

			const timeout = setTimeout(() => {
				clearTimeout(timeout);
				state.loading = false;
				navigateTo('/');
			}, 4000);
		}
	}

	function logOut() {
		sessionStorage.removeItem(user_login);
		navigateTo('/login');
	}

	function _getUserInfo(): IUserLogin {
		const userLoin = sessionStorage.getItem(user_login);
		if (!userLoin) {
			navigateTo('/login');
			return null;
		}

		const user: IUserLogin = JSON.parse(userLoin);
		return user;
	}

	function isLogin(): boolean {
		const result = _getUserInfo() ? true : false;
		return result;
	}

	function getUserInfo(): IUserLogin {
		const userInfo = _getUserInfo();
		return userInfo;
	}

	function getToken(): string {
		const { token }: IUserLogin = _getUserInfo();
		return token;
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
