export const authRoutes = [
  { path: '/login/', name: 'Login', component: () => import('../../views/Login.vue'), meta: { keepalive: true, requiresAuth: false } },
  { path: '/logout/', name: 'Logout', component: () => import('../../views/Login.vue'), meta: { keepalive: false, requiresAuth: false } },
]
