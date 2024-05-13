<script setup lang="ts">
import SimpleSignUp from "./application-ui/forms/sign-in-forms/simple-sign-up.vue";
import StackedSettings from "./application-ui/page-examples/settings-screens/stacked-settings.vue";
defineProps<{ msg: string }>()

</script>

<template>
  <stacked-settings></stacked-settings>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>