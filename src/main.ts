import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from './assets/presets/aura';
import router from './router/index';
const app = createApp(App);
app.use(router)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});

app.mount('#app')
