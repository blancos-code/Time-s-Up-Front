<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
          class="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/101461/time-management-clock.svg"
          alt="Time's Up"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Connexion
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
          @submit.prevent="tryToLogin"
          class="space-y-6">
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
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
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
            <div class="text-sm">
              <a
                  href="/forgotpassword"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          <div class="mt-2">
            <input
                id="password"
                v-model="password"
                name="mot de passe"
                type="password"
                autocomplete="current-password"
                required="true"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3
              py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
          >
            Se connecter
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Pas encore inscrit ?
        {{ ' ' }}
        <a href="register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Créez un compte
        </a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import router from "../../router";
import {login} from "../../apiRequests/auth.ts";
import {displayErrorToast} from "../../toast/toast.ts";

const email = ref('')
const password = ref('')

function tryToLogin() {
  login(email.value, password.value)
      .then(response => {

        const token = response.data.token;
        const userId = response.data.id;
        const lastname = response.data.lastname;
        const firstname = response.data.firstname;
        const email = response.data.email;

        localStorage.setItem('accessToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('firstname', firstname);
        localStorage.setItem('email', email);
        router.push({name: 'home'})
      })
      .catch(error => {
        displayErrorToast('Mauvais identifiants')
        console.error(error);
      });
}

</script>