<template>
   <main class="mx-auto max-w-7xl">
    <div class="relative isolate overflow-hidden pt-16">
      <TeamNavigation/>
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
  import TeamHeader from "./TeamHeader.vue";
  import TeamNavigation from "../components/TeamNavigation.vue";
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
  