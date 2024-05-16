<template>
  <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1 items-center gap-x-6">
        <button type="button" class="-m-3 p-3 md:hidden" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      </div>
      <nav class="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
        <a v-for="(item, itemIdx) in navigation" :key="itemIdx" :href="item.href">{{ item.name }}</a>
      </nav>
      <div class="flex flex-1 items-center justify-end gap-x-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </a>
      </div>
    </div>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
        <div class="-ml-0.5 flex h-16 items-center gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div class="-ml-0.5">
            <a href="#" class="-m-1.5 block p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>
        </div>
        <div class="mt-2 space-y-2">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <div class="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
    <aside class="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
      <nav class="flex-none px-4 sm:px-6 lg:px-0">
        <ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
          <li v-for="item in secondaryNavigation" :key="item.name">
            <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold']">
              <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
      <div class="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Projet
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-500">
            Modifiez les informations du projet.
          </p>

          <dl class="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
            <div class="pt-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Titre
              </dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">
                  Gros bangala project
                </div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Editer
                </button>
              </dd>
            </div>
            <div class="pt-6 sm:flex">
              <dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                Date butoire
              </dt>
              <dd class="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                <div class="text-gray-900">
                  10/10/2020
                </div>
                <button type="button" class="font-semibold text-indigo-600 hover:text-indigo-500">Editer</button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {Dialog, DialogPanel} from '@headlessui/vue'
import { Bars3Icon } from '@heroicons/vue/20/solid'
import {
  BellIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Task', href: '/task' },
]
const secondaryNavigation = [
  { name: 'Général', href: '/', icon: UserCircleIcon, current: true },
  { name: 'Equipe', href: '/team', icon: UsersIcon, current: false },
]

const mobileMenuOpen = ref(false)
</script>