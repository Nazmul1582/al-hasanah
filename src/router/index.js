import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from './routes/public'
import { checkoutRoutes } from './routes/checkout'
import { userRoutes } from './routes/user'
import { authRoutes } from './routes/auth'

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

export default router
export const keepAliveComponents = routes
  .filter((route) => (route.meta ? route.meta.keepalive : false))
  .map((route) => route.name)
