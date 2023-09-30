<script lang="ts" setup>
	definePageMeta({ layout: 'empty' });
	const router = useRouter();

	const form = ref(false);
	const username = ref('admin');
	const password = ref('ssfs546$4654dfs5');
	const loading = ref(false);
	const visible = ref(false);
	function onSubmit() {
		if (!form.value) return;
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
			router.push('/');
		}, 2000);
	}
	function required(v: string) {
		return !!v || 'Field is required';
	}
</script>

<template>
	<div
		fluid
		class="d-flex fill-height align-center justify-center">
		<v-row>
			<v-col>
				<v-card
					class="mx-auto pa-12 pb-8"
					elevation="8"
					max-width="450"
					rounded="lg">
					<v-form
						v-model="form"
						@submit.prevent="onSubmit">
						<v-img
							class="mx-auto my-6"
							max-width="228"
							src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

						<v-text-field
							density="compact"
							placeholder="User Name"
							prepend-inner-icon="mdi-account"
							variant="outlined"
							v-model="username">
						</v-text-field>

						<v-text-field
							:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
							:type="visible ? 'text' : 'password'"
							density="compact"
							placeholder="Enter your password"
							prepend-inner-icon="mdi-lock-outline"
							variant="outlined"
							@click:append-inner="visible = !visible"
							v-model="password">
						</v-text-field>

						<v-btn
							type="submit"
							block
							class="mb-8"
							color="blue"
							size="large"
							variant="tonal"
							:loading="loading">
							Log In
						</v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>
