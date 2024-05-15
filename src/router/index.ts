import { createRouter, createWebHistory } from 'vue-router'
import { AuthGuard } from '../config/api/authGard.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/project',
          name: 'project',
          component: () => import('../views/ProjectDetails.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/task',
          name: 'task',
          component: () => import('../views/TaskDetails.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue')
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !AuthGuard.isAuthenticated()) {
    return { name: 'login' }
  }
})

export default router