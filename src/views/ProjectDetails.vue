<template>
  <main class="mx-auto max-w-7xl">
    <div class="relative isolate overflow-hidden pt-16">

      <ProjectDetailsHeader></ProjectDetailsHeader>
      <ProjectDetailsNavigation></ProjectDetailsNavigation>
      <ProjectTaskView></ProjectTaskView>
    </div>

  </main>
</template>

<script setup>


import ProjectDetailsHeader from "../components/ProjectDetailsHeader.vue";
import ProjectDetailsNavigation from "../components/ProjectDetailsNavigation.vue";
import ProjectTaskView from "../components/ProjectTaskView.vue";

const stats = [
  {name: 'Cummul des charges', value: '10H', change: '47%', changeType: 'positive'},
  {name: 'Capacité de charges', value: '23H', change: '', changeType: 'positive'},
  {name: 'Cummul des surchages', value: '1H', change: '', changeType: 'negative'},
  {name: 'Nombre de membres', value: '3', change: '', changeType: 'negative'},
]

</script>