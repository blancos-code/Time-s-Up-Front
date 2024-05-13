<script setup lang="ts">
import { ref } from 'vue'
import StackedHome from "./application-ui/page-examples/home-screens/stacked-home.vue";
import StackedDetails from "./application-ui/page-examples/detail-screens/stacked-details.vue";
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<!--  <stacked-home></stacked-home> -->
  <stacked-details></stacked-details>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
