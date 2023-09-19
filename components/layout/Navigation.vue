<template>
  <!-- rail -->
  <v-navigation-drawer elevation="2" rail expand-on-hover>
    <v-list density="compact">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/44.jpg"
        title="ABC"
        subtitle="abc@gmailcom"></v-list-item>
    </v-list>

    <v-divider />

    <v-list v-model:opened="open" color="primary" density="compact" variant="plain">
      <!-- <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item> -->

      <v-list-group fluid value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-test-tube" title="Users"></v-list-item>
        </template>
        <!-- <v-list-subheader>REPORTS</v-list-subheader> -->

        <v-list-item
          class="text-xl-subtitle-1"
          density="compact"
          v-for="([title, icon, to], i) in cruds"
          :key="i"
          :value="to"
          :to="to"
          :title="title"
          :prepend-icon="icon">
        </v-list-item>
      </v-list-group>

      <v-list-group fluid value="Users2">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-test-tube" title="Users2"></v-list-item>
        </template>
        <!-- <v-list-subheader>REPORTS</v-list-subheader> -->

        <v-list-item
          class="text-xl-subtitle-1"
          density="compact"
          v-for="([title, icon, to], i) in cruds2"
          :key="i"
          :value="to"
          :to="to"
          :title="title"
          :prepend-icon="icon">
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const open = ref(['Users']);

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
];
const cruds = [
  ['Demo1', 'mdi-circle-small', '/demo01'],
  ['Demo2', 'mdi-circle-small', '/demo02'],
  // ['Update', 'mdi-update','/demo03'],
  // ['Delete', 'mdi-delete','/demo04'],
  // ['Read', 'mdi-file-outline'],
  // ['Update', 'mdi-update'],
  // ['Delete', 'mdi-delete'],
];
const cruds2 = [['Home', 'mdi-circle-small', '/']];
</script>
