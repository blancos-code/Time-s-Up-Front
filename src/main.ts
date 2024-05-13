import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from './assets/presets/aura';
import { createMemoryHistory, createRouter } from 'vue-router'
import Home from "./views/Home.vue";
import TaskDetails from "./views/TaskDetails.vue";

const routes = [
  { path: '/', component: Home },
  //{path: '/test', component: Test},
  { path: '/task', component: TaskDetails },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App);
app.use(router)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.mount('#app')
