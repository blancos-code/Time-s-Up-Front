<template>
    <header class="pb-4 pt-6 sm:pb-6">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
        <h1 class="text-base font-semibold leading-7 text-gray-900">Les zouzous</h1>
        <div
            class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
          <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href"
             :class="item.current ? 'text-indigo-600' : 'text-gray-700'">{{ item.name }}</a>
        </div>
        <a href="/"
           class="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <PlusSmallIcon class="-ml-1.5 h-5 w-5" aria-hidden="true"/>
          Nouvelle équipe
        </a>
      </div>
    </header>
  </template>
  <script setup>
  import {ref} from 'vue'
  
  import {PlusSmallIcon} from '@heroicons/vue/24/outline'
  
  
  const secondaryNavigation = [
    {name: 'Tableau de bord', href: '/', current: false},
    {name: 'Equipe', href: '/team', current: true},
  ]
  
  const mobileMenuOpen = ref(false)
  </script>