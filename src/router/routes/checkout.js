export const checkoutRoutes = [
  { path: '/checkout/', name: 'Checkout', component: () => import('../../views/checkout/Checkout.vue'), meta: { keepalive: false, requiresAuth: false } },
  { path: '/checkout/success', name: 'CheckoutSuccess', component: () => import('../../views/checkout/Success.vue'), meta: { keepalive: false, requiresAuth: false } },
  { path: '/quotation/', name: 'Quotation', component: () => import('../../views/checkout/Quotation.vue'), meta: { keepalive: false, requiresAuth: false } },
]
