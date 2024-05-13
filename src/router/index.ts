import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import SignIn from '../views/auth/simple-sign-in.vue';
import SignUp from '../views/auth/simple-sign-up.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {path: '/signin', name: 'signin', component: SignIn},
    {path: '/signup', name: 'signup', component: SignUp},
    {
      path: '/task',
      name: 'task',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TaskDetails.vue')
    }
  ]
})

export default router