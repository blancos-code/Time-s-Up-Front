<template>
  <div class="border-b border-gray-200 ml-16 pl-8 pt-8">
    <div class="sm:flex sm:items-baseline">
      <div class="mt-4 sm:mt-0">
        <nav class="-mb-px flex space-x-8">
          <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const tabs = [
  {name: 'Tableau de bord', href: '/', current: true},
  {name: 'Membres', href: '/', current: false},
  {name: 'Paramètres', href: '/', current: false},
]
</script>