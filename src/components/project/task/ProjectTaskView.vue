<template>
  <div class="px-4 sm:px-6 lg:px-8 pt-8 ml-16 pl-8 mr-32">
    <ProjectTaskViewHeader></ProjectTaskViewHeader>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Titre</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date butoire</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Priorité</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(person, personIdx) in people" :key="person.email" :class="personIdx % 2 === 0 ? undefined : 'bg-gray-50'">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{{ person.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.title }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.email }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >
                    Modifier
                    <span class="sr-only">, {{ person.name }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import ProjectTaskViewHeader from "./ProjectTaskViewHeader.vue";

const people = [
  { name: 'Trier le tableau', title: 'Faut trier olala sinon kapout', email: 'avant maintenant', role: '3' },
  // More people...
]
</script>