<template>
  <Dialog v-model:visible="modalVisible">
      <h5>Modal Header</h5>

    <div>
      Modal body
    </div>
    <template #footer>
      <Button @click="$emit('close-modal')">Close</Button>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import {ref} from "vue";

const modalVisible = ref(true)
</script>