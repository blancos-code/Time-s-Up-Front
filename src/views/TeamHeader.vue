<template>
    <ProjectDetailsHeader></ProjectDetailsHeader>
</template>
  <script setup>
  
  import {ref} from "vue";
  import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
  import ProjectDetailsHeader from "../components/ProjectDetailsHeader.vue";
  const mobileMenuOpen = ref(false)
  
  const status = ref('');
  
  async function copyUrlToClipboard(){
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error(error.message);
    }
  }
  </script>