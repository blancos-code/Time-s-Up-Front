<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
      </select>
      <ProjectTaskSearchField></ProjectTaskSearchField>
    </div>
    <div class="hidden sm:block">
      <nav class="flex justify-between" aria-label="Tabs">
        <nav class="flex space-x-4" aria-label="Tabs">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
             :class="[tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700', 'rounded-md px-3 py-2 text-sm font-medium']"
             :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
        <ProjectTaskSearchField></ProjectTaskSearchField>
      </nav>
    </div>
  </div>
</template>

<script setup>


import ProjectTaskSearchField from "./ProjectTaskSearchField.vue";

const tabs = [
  { name: 'Tableau', href: '#', current: true },
  { name: 'Kanban', href: '#', current: false },
  { name: 'Gantt', href: '#', current: false },
]
</script>