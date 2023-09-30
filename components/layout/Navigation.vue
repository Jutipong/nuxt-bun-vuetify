<template>
	<!-- rail -->
	<v-navigation-drawer
		elevation="2"
		expand-on-hover
		rail
		@update:rail="(val) => (isRail = val)"
		:close-delay="2000">
		<v-list density="compact">
			<v-list-item
				prepend-avatar="https://randomuser.me/api/portraits/women/44.jpg"
				title="ABC"
				subtitle="abc@gmail.com"></v-list-item>
		</v-list>

		<v-divider />

		<v-list
			v-model:opened="open"
			color="primary"
			density="compact"
			variant="plain"
			:lines="false"
			nav>
			<v-list-item
				prepend-icon="mdi-home"
				title="Home"
				value="/"
				to="/"></v-list-item>

			<v-list-group value="Users">
				<template v-slot:activator="{ props }">
					<v-list-item
						v-bind="props"
						prepend-icon="mdi-test-tube"
						title="Menu 1"></v-list-item>
				</template>
				<!-- <v-list-subheader>REPORTS</v-list-subheader> -->

				<v-list-item
					v-for="([title, icon, to], i) in cruds"
					:key="i"
					:value="to"
					:to="to"
					:title="title">
				</v-list-item>
			</v-list-group>

			<v-list-group value="Users2">
				<template v-slot:activator="{ props }">
					<v-list-item
						v-bind="props"
						prepend-icon="mdi-test-tube"
						title="Menu 2"></v-list-item>
				</template>
				<!-- <v-list-subheader>REPORTS</v-list-subheader> -->

				<v-list-item
					v-for="([title, icon, to], i) in cruds2"
					:key="i"
					:value="to"
					:to="to"
					:title="title">
				</v-list-item>
			</v-list-group>
		</v-list>

		<template v-slot:append>
			<div class="pa-2">
				<v-btn
					block
					color="red"
					@click="logout()">
					{{ isRail ? '' : 'Logout' }} <v-icon>mdi-logout</v-icon>
				</v-btn>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
	const router = useRouter();

	const open = ref(['Users']);
	const isRail = ref(true);

	const cruds = [
		['Demo1', 'mdi-chevron-right', '/demo01'],
		['Demo2', 'mdi-chevron-right', '/demo02'],
	];
	const cruds2 = [['Demo03', 'mdi-chevron-right', '/demo03']];

	function logout() {
		router.push('/login');
	}
</script>
