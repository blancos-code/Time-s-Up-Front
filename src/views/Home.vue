<template>
  <main>
    <div class="relative isolate overflow-hidden pt-16">
      <HomeNavigation/>

      <div
        v-if="hasATeam"
      >
        <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
          <dl class="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
            <div v-for="(stat, statIdx) in stats" :key="stat.name"
                 :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8']">
              <dt class="text-sm font-medium leading-6 text-gray-500">{{ stat.name }}</dt>
              <dd :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700', 'text-xs font-medium']">
                {{ stat.change }}
              </dd>
              <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{{
                  stat.value
                }}
              </dd>
            </div>
          </dl>
        </div>

        <div
            class="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
            aria-hidden="true">
          <div class="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
               style="clip-path: polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)"/>
        </div>
      </div>
    </div>

    <div
        v-if="hasATeam"
        class="space-y-16 py-16 xl:space-y-20"
    >
      <div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">Projets</h2>
        </div>
        <div class="mt-6 overflow-hidden border-t border-gray-100">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <table class="w-full text-left">
                <thead class="sr-only">
                <tr>
                  <th>Montant</th>
                  <th class="hidden sm:table-cell">Client</th>
                  <th>Plus de détails</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="project in projets" :key="project.dateTime">
                  <tr class="text-sm leading-6 text-gray-900">
                    <th scope="colgroup" colspan="3" class="relative isolate py-2 font-semibold">
                      <time :datetime="project.dateTime">{{ project.date }}</time>
                      <div class="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"/>
                      <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"/>
                    </th>
                  </tr>
                  <tr v-for="project in project.data" :key="project.id">
                    <td class="relative py-5 pr-6">
                      <div class="flex gap-x-6">
                        <component :is="project.icon" class="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                   aria-hidden="true"/>
                        <div class="flex-auto">
                          <div class="flex items-start gap-x-3">
                            <div class="text-sm font-medium leading-6 text-gray-900">{{ project.amount }}</div>
                            <div
                                :class="project.status ? [statuses[project.status], 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'] : ''">
                              {{ project.status }}
                            </div>
                          </div>
                          <div v-if="project.tax" class="mt-1 text-xs leading-5 text-gray-500">{{ project.tax }}

                          </div>
                        </div>
                      </div>
                      <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100"/>
                      <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100"/>
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell">
                      <div class="text-sm leading-6 text-gray-900">{{ project.client }}</div>
                      <div class="mt-1 text-xs leading-5 text-gray-500">{{ project.description }}</div>
                    </td>
                    <td class="py-5 text-right">
                      <div class="flex justify-end">
                        <a :href="project.href"
                           class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                        >Voir<span class="hidden sm:inline"> le projet</span><span
                            class="sr-only">, invoice #{{ project.invoiceNumber }}, {{ project.client }}</span></a
                        >
                      </div>
                    </td>
                  </tr>
                </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NoTeamMessage
      v-if="!hasATeam"
    />
  </main>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {ClockIcon, ExclamationTriangleIcon,} from '@heroicons/vue/20/solid'

import HomeNavigation from "../components/HomeNavigation.vue";
import {getUserInfos} from "../apiRequests/user.ts";
import NoTeamMessage from "./NoTeamMessage.vue";

const secondaryNavigation = [
  {name: 'Tableau de bord', href: '/', current: true},
  {name: 'Equipe', href: '/team', current: false},
]
const stats = [
  {name: 'Cummul des charges', value: '540H', change: '', changeType: 'positive'},
  {name: 'Nombre de membres', value: '17', change: '', changeType: 'negative'},
]
const statuses = {
  Surcharge: 'text-red-700 bg-red-50 ring-red-600/10',
}
const projets = [
  {
    date: 'Actifs',
    dateTime: '2023-03-22',
    data: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '/project',
        amount: 'CTF',
        tax: '300H',
        client: 'Capture du drapeau',
        description: 'Date butoire: 01/11/2028',
        icon: ClockIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '/project',
        amount: 'Tailwind de ouf',
        tax: '23H',
        client: 'Du front',
        description: 'Date butoire: 23/10/2026',
        icon: ClockIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '/project',
        amount: 'The muerte project',
        tax: '3H',
        status: 'Surcharge',
        client: 'La muerte',
        description: 'Date butoire: 23/10/2026',
        icon: ExclamationTriangleIcon,
      },
    ],
  },
  {
    date: 'Terminés',
    dateTime: '2023-03-22',
    data: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '/project',
        amount: 'Monchibre Corp.',
        tax: '300H',
        client: 'Une entreprise',
        description: 'Date butoire: 23/10/2022',
      },
    ],
  },
]

const mobileMenuOpen = ref(false)

const userInfos = ref({})

const hasATeam = computed(() => {
  return userInfos.value?.teams?.length
})


onMounted(async () => {
    getUserInfos().then(response => {
    userInfos.value = response.data
    console.log(userInfos.value)
    console.log(userInfos.value.teams.length)
  })
})

</script>