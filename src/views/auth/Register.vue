<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
          class="mx-auto h-10 w-auto"
           src="https://www.svgrepo.com/show/101461/time-management-clock.svg"
          alt="Time's Up"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Inscription
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
          @submit.prevent="tryToRegister"
          class="space-y-6"
          method="POST"
      >
        <div>
          <label
              for="lastname"
              class="block text-sm font-medium leading-6 text-gray-900"
          >
            Nom
          </label>
          <div class="mt-2">
            <input
                v-model="lastname"
                id="lastname"
                name="lastname"
                type="text"
                autocomplete="nom"
                required="true"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
              for="firstname"
              class="block text-sm font-medium leading-6 text-gray-900"
          >
            Prénom
          </label>
          <div class="mt-2">
            <input
                v-model="firstname"
                id="firstname"
                name="firstname"
                type="text"
                autocomplete="firstname"
                required="true"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
          >
            Adresse email
          </label>
          <div class="mt-2">
            <input
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required="true"
                class="block w-full rounded-md border-0
                py-1.5 text-gray-900 shadow-sm ring-1
                ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
              Mot de passe
            </label>
          </div>
          <div class="mt-2">
            <input
                v-model="password"
                id="password"
                name="password"
                type="password"
                autocomplete="password"
                required="true"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label
                for="repeatpassword"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
              Répétez le mot de passe
            </label>
          </div>
          <div class="mt-2">
            <input
              v-model="repeatpassword"
                id="repeatpassword"
                name="repeatpassword"
                type="password"
                autocomplete="repeatpassword"
                required="true"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5
              text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          >
            S'inscrire
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Déjà inscrit ?
        {{ ' ' }}
        <a
            href="/login"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Connectez vous
        </a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from "../../router";
import {ref} from "vue";
import {register} from "../../apiRequests/auth.ts";
import {displayErrorToast} from "../../toast/toast.ts";

const lastname = ref('')
const firstname = ref('')
const email = ref('')
const password = ref('')
const repeatpassword = ref('')

function tryToRegister() {
  if(repeatpassword.value !== password.value){
    displayErrorToast("Les 2 mots de passe ne sont pas identiques");
    return;
  }
  register(lastname.value, firstname.value, email.value, password.value)
      .then((response : any) => {
        router.push({name: 'home'})
      })
      .catch(() => {
        displayErrorToast("Erreur lors de l'inscription")
      });
}
</script>