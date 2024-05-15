<template>
  <header class="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex flex-1 items-center gap-x-6">
        <button type="button" class="-m-3 p-3 md:hidden" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-5 w-5 text-gray-900" aria-hidden="true"/>
        </button>
        <a href="/" class="flex gap-x-6">
          <img class="h-8 w-auto" src="https://www.svgrepo.com/show/101461/time-management-clock.svg" alt="Time's Up"/>
          <h1 class="text-2xl">Time's Up</h1>
        </a>

      </div>
      <div class="flex flex-1 items-center justify-end gap-x-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true"/>
        </button>
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your profile</span>
          <img class="h-8 w-8 rounded-full bg-gray-800"
               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
               alt=""/>
        </a>
      </div>
    </div>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50"/>
      <DialogPanel
          class="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
        <div class="-ml-0.5 flex h-16 items-center gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
          <div class="-ml-0.5">
            <a href="/" class="-m-1.5 block p-1.5">
              <span class="sr-only">Time's Up</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                   alt="times up"/>
            </a>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <router-view></router-view>
    <AppFooter></AppFooter>
</template>

<script setup lang="ts">
import {BellIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import AppFooter from "./AppFooter.vue";
import Simple_with_icons from "../components/templates/application-ui/lists/feeds/simple_with_icons.vue";
import With_comments from "../components/templates/application-ui/lists/feeds/with_comments.vue";
import SimpleStack from "../components/templates/application-ui/lists/stacked-lists/simple-stack.vue";
import SimpleFeature from "../components/templates/marketing/sections/feature-sections/simple-feature.vue";
import Offset_with_feature_list
  from "../components/templates/marketing/sections/feature-sections/offset_with_feature_list.vue";
import With_four_tiers from "../components/templates/marketing/page-examples/pricing-pages/with_four_tiers.vue";
import Left_aligned from "../components/templates/marketing/elements/banners/left_aligned.vue";
import Left_alignedList
  from "../components/templates/application-ui/data-display/description-lists/left_aligned-list.vue";
import Full_width_bar from "../components/templates/application-ui/navigation/breadcrumbs/full_width_bar.vue";
import Contained from "../components/templates/application-ui/navigation/breadcrumbs/contained.vue";
import Simple_with_slashes from "../components/templates/application-ui/navigation/breadcrumbs/simple_with_slashes.vue";
</script>
