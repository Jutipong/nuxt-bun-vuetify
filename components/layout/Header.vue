<template>
	<v-app-bar
		color="primary"
		density="compact">
		<v-app-bar-title>Title</v-app-bar-title>

		<template v-slot:append>
			<v-btn icon="mdi-dots-vertical"></v-btn>
		</template>
	</v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped></style>
