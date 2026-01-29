import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from './routes/public'
import { checkoutRoutes } from './routes/checkout'
import { userRoutes } from './routes/user'
import { authRoutes } from './routes/auth'
import { useAuthStore } from '../stores/auth'

const routes = [
  ...publicRoutes,
  ...authRoutes,
  ...checkoutRoutes,
  ...userRoutes,
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: { keepalive: false },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active-link',
  linkExactActiveClass: '',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  if (to.meta?.requiresAuth && !authStore.isAuthenticated) {
    return {
      path: '/login/',
      query: { redirect: to.fullPath },
    }
  }
  if (to.name === 'Logout') {
    authStore.clearSession()
    return { path: '/login/' }
  }
  return true
})

export default router
export const keepAliveComponents = routes
  .filter((route) => (route.meta ? route.meta.keepalive : false))
  .map((route) => route.name)
