<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // type inference enabled
  props: {
    msg: Number,
  },
  setup(props) {
    props.msg; // type: string | undefined
  },
});
</script>

<template>
  <v-row>
    <h1>Demo 03</h1>
  </v-row>
</template>
