<script setup lang="ts">
import { ref } from 'vue'
import StackedHome from "./application-ui/page-examples/home-screens/stacked-home.vue";
import StackedDetails from "./application-ui/page-examples/detail-screens/stacked-details.vue";
import Split_screen from "./application-ui/forms/sign-in-forms/split_screen.vue";
import SimpleSignIn from "./application-ui/forms/sign-in-forms/simple-sign-in.vue";
import Simple_card from "./application-ui/forms/sign-in-forms/simple_card.vue";
import Simple_no_labels from "./application-ui/forms/sign-in-forms/simple_no_labels.vue";
import Simple_on_dark from "./marketing/sections/stats-sections/simple_on_dark.vue";
import Simple_on_dark_sign from "./application-ui/forms/sign-in-forms/simple_on_dark_sign.vue";
import SimpleSignUp from "./application-ui/forms/sign-in-forms/simple-sign-up.vue";
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <simple-sign-up></simple-sign-up>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
