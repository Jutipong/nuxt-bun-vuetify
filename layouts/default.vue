<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/44.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"></v-list-item>
        </v-list>

        <v-divider />

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-folder"
            title="Home"
            value="index"
            to="/" />

          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Demo 01"
            value="demo01"
            to="/demo01" />

          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred" />
        </v-list>
      </v-navigation-drawer>

      <LayoutHeader />

      <v-main>
        <slot></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
// import { RouterView } from 'vue-router';
// import { ref } from 'vue';
// const title = ref('Modernize - Nuxt3 Typescript based Free Admin Dashboard Template');

// definePageMeta({
//   title: 'My home page'
// })

// useHead({
//   meta: [{ content: title }],
//   titleTemplate: titleChunk => {
//     return titleChunk
//       ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
//       : 'Modernize - Nuxt3 Typescript based Free Admin Dashboard Template';
//   },
// });
</script>
