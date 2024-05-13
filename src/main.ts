import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from './assets/presets/aura';
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HelloWorld.vue'
import Task from './components/TaskView.vue';
import Test from './components/application-ui/page-examples/settings-screens/stacked.vue';
const routes = [
  { path: '/', component: HomeView },
  {path: '/test', component: Test},
  { path: '/task', component: Task },
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
