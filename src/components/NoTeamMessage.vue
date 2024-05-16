<template>
  <div class="flex justify-center items-center mt-4">
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Vous n'avez pas encore rejoint d'équipe</h2>
      <p class="text-gray-600 mb-4">Pour commencer à utiliser l'application, veuillez rejoindre une équipe existante ou
        en créer une nouvelle.</p>
      <div class="flex justify-center space-x-4">
        <button @click="createTeam" class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-blue-600">Créer une
          équipe
        </button>
        <button @click="joinTeam"
                class="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white">
          Rejoindre une équipe
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NoTeamMessage'
}
</script>