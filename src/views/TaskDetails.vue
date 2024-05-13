<template>
  <main>
    <TaskHeader/>

    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- Invoice summary -->
        <div class="lg:col-start-3 lg:row-end-1">
          <h2 class="sr-only">Résumé</h2>
          <div class="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
            <dl class="flex flex-wrap">
              <div class="flex-auto pl-6 pt-6">
                <dt class="text-sm font-semibold leading-6 text-gray-900">Temps consigné</dt>
                <InputText type="number" v-model="status" />
              </div>
              <div class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                <dt class="flex-none">
                  <span class="sr-only">Rapporteur</span>
                  <UserCircleIcon class="h-6 w-5 text-gray-400 mt-2" aria-hidden="true" />
                </dt>

                <Dropdown v-model="selectedMember" :options="teamMembers" optionLabel="name" placeholder="Assignez la tâche" :highlightOnSelect="false" class="w-full md:w-14rem" />

              </div>
              <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt class="flex-none">
                  <span class="sr-only">Date de création</span>
                  <CalendarDaysIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd class="text-sm leading-6 text-gray-500">
                  <time datetime="2023-01-31">January 31, 2023</time>
                </dd>
              </div>
              <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                <dt class="flex-none">
                  <span class="sr-only">Status</span>
                  <CreditCardIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                </dt>
                <dd class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">A faire</dd>              </div>
            </dl>
            <div class="mt-6 border-t border-gray-900/5 px-6 py-6">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true">←</span> Retour au projet</a>
            </div>
          </div>
        </div>

        <!-- Invoice -->
        <div class="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
          <h2 class="text-base font-semibold leading-6 text-gray-900">Tâche</h2>
          <dl class="mt-3 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
            <div class="sm:pr-4">
              <dt class="inline text-gray-500">créée le</dt>
              {{ ' ' }}
              <dd class="inline text-gray-700"><time datetime="2023-23-01">January 23, 2023</time></dd>
            </div>
            <div class="mt-2 sm:mt-0 sm:pl-4">
              <dt class="inline text-gray-500">date de fin estimée</dt>
              {{ ' ' }}
              <dd class="inline text-gray-700"><time datetime="2023-31-01">January 31, 2023</time></dd>
            </div>
          </dl>
          <dl class="mt-4 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
            <div class="mt-2 border-t border-gray-900/5 pt-6 sm:pr-4">
              <dt class="font-semibold text-gray-900">Rapporteur</dt>
              <div class="mt-6 flex w-full flex-none gap-x-4 border-gray-900/5">
                <UserCircleIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                <dd class="text-sm font-medium leading-6 text-gray-900">Sacha Blanco</dd>
              </div>
            </div>

            <div class="mt-2 border-t border-gray-900/5 pt-6 sm:pr-4">
              <dt class="font-semibold text-gray-900">Assigné à</dt>
              <div class="mt-6 flex w-full flex-none gap-x-4 border-gray-900/5">
                <UserCircleIcon class="h-6 w-5 text-gray-400" aria-hidden="true" />
                <dd class="text-sm font-medium leading-6 text-gray-900">Alex Curren</dd>
              </div>
            </div>
          </dl>
          <dl class="mt-2 grid grid-cols-1 text-sm leading-6">
            <div class="mt-6 border-t border-gray-900/5 pt-6">
              <dt class="font-semibold text-gray-900">Description</dt>
              <p>Merci de corriger la faute d'orthographe dans le paragraphe "Nos projets". <br>Il n'y a pas de "e" à "contrôle continu".</p>
            </div>
          </dl>
        </div>

        <div class="lg:col-start-3">
          <!-- Activity feed -->
          <h2 class="text-sm font-semibold leading-6 text-gray-900">Activity</h2>
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id" class="relative flex gap-x-4">
              <div :class="[activityItemIdx === activity.length - 1 ? 'h-6' : '-bottom-6', 'absolute left-0 top-0 flex w-6 justify-center']">
                <div class="w-px bg-gray-200" />
              </div>
              <template v-if="activityItem.type === 'commented'">
                <img :src="activityItem.person.imageUrl" alt="" class="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" />
                <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                  <div class="flex justify-between gap-x-4">
                    <div class="py-0.5 text-xs leading-5 text-gray-500">
                      <span class="font-medium text-gray-900">{{ activityItem.person.name }}</span> commented
                    </div>
                    <time :datetime="activityItem.dateTime" class="flex-none py-0.5 text-xs leading-5 text-gray-500">{{ activityItem.date }}</time>
                  </div>
                  <p class="text-sm leading-6 text-gray-500">{{ activityItem.comment }}</p>
                </div>
              </template>
              <template v-else>
                <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                  <CheckCircleIcon v-if="activityItem.type === 'paid'" class="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  <div v-else class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                </div>
                <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                  <span class="font-medium text-gray-900">{{ activityItem.person.name }}</span> {{ activityItem.type }} the invoice.
                </p>
                <time :datetime="activityItem.dateTime" class="flex-none py-0.5 text-xs leading-5 text-gray-500">{{ activityItem.date }}</time>
              </template>
            </li>
          </ul>

          <!-- New comment form -->
          <div class="mt-6 flex gap-x-3">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-50" />
            <form action="#" class="relative flex-auto">
              <div class="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                <label for="comment" class="sr-only">Add your comment</label>
                <textarea rows="2" name="comment" id="comment" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add your comment..." />
              </div>

              <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                <div class="flex items-center space-x-5">
                  <div class="flex items-center">
                    <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                      <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                      <span class="sr-only">Attach a file</span>
                    </button>
                  </div>
                  <div class="flex items-center">
                    <Listbox as="div" v-model="selected">
                      <ListboxLabel class="sr-only">Your mood</ListboxLabel>
                      <div class="relative">
                        <ListboxButton class="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                          <span class="flex items-center justify-center">
                            <span v-if="selected.value === null">
                              <FaceSmileIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                              <span class="sr-only">Add your mood</span>
                            </span>
                            <span v-if="!(selected.value === null)">
                              <span :class="[selected.bgColor, 'flex h-8 w-8 items-center justify-center rounded-full']">
                                <component :is="selected.icon" class="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                              </span>
                              <span class="sr-only">{{ selected.name }}</span>
                            </span>
                          </span>
                        </ListboxButton>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <ListboxOptions class="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                            <ListboxOption as="template" v-for="mood in moods" :key="mood.value" :value="mood" v-slot="{ active }">
                              <li :class="[active ? 'bg-gray-100' : 'bg-white', 'relative cursor-default select-none px-3 py-2']">
                                <div class="flex items-center">
                                  <div :class="[mood.bgColor, 'flex h-8 w-8 items-center justify-center rounded-full']">
                                    <component :is="mood.icon" :class="[mood.iconColor, 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                                  </div>
                                  <span class="ml-3 block truncate font-medium">{{ mood.name }}</span>
                                </div>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                  </div>
                </div>
                <button type="submit" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from 'vue'
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import {
  CalendarDaysIcon,
  CreditCardIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/vue/20/solid'
import {CheckCircleIcon} from '@heroicons/vue/24/solid'

import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import TaskHeader from "./TaskHeader.vue";

const selectedMember = ref();
const teamMembers = ref([
  {
    name: 'Jérémy',
    optionValue : 'Jérémy'
  },
  {
    name : 'Estelle',
    optionValue  : 'Estelle'
  },
  {
    name : 'Sacha',
    optionValue  : 'Sacha'
  },
  {
    name : 'Valentin',
    optionValue  : 'Valentin'
  }
]);

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tâches', href: '/tasks' }
]
const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
}
const activity = [
  { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]
const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

const mobileMenuOpen = ref(false)
const selected = ref(moods[5])

const status = ref('');

</script>
