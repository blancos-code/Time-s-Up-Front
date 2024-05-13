<template>
  <header class="relative isolate pt-16">
    <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div class="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
        <div class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
             style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"/>
      </div>
      <div class="absolute inset-x-0 bottom-0 h-px bg-gray-900/5"/>
    </div>

    <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
        <div class="flex items-center gap-x-6">
          <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt=""
               class="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"/>
          <h1>
            <div class="text-sm leading-6 text-gray-500">Tâche <span class="text-gray-700">#00011</span></div>
            <div class="mt-1 text-base font-semibold leading-6 text-gray-900">
              Corriger faute d'orthographe dans section "Nos projets"
            </div>
          </h1>
        </div>
        <div class="flex items-center gap-x-4 sm:gap-x-6">
          <button type="button" class="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">
            Copier l'URL
          </button>
          <Menu as="div" class="relative sm:hidden">
            <MenuButton class="-m-3 block p-3">
              <span class="sr-only">Plus</span>
              <EllipsisVerticalIcon class="h-5 w-5 text-gray-500" aria-hidden="true"/>
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                  class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <button type="button"
                          :class="[active ? 'bg-gray-50' : '', 'block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900']">
                    Copier l'URL
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Modifier</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>

import {ref} from "vue";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";

const mobileMenuOpen = ref(false)

const status = ref('');

</script>