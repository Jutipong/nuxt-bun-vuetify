export default defineNuxtRouteMiddleware((to, from) => {
	if (to?.name === 'login') return;

	const { isLogin } = useAuthStore();

	if (!isLogin()) {
		abortNavigation();
		return navigateTo('/login');
	}
});
