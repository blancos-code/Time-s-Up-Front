import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Header.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue')
        },
        {
          path: '/task',
          name: 'task',
          component: () => import('../views/TaskDetails.vue')
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/auth/SignIn.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUp.vue')
    }
  ]
})

export default router