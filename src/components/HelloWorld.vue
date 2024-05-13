<script setup lang="ts">
import { ref } from 'vue'
import StackedHome from "./application-ui/page-examples/home-screens/stacked-home.vue";
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <stacked-home></stacked-home>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
