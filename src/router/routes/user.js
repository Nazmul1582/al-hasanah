export const userRoutes = [
  { path: '/user/', name: 'User', component: () => import('../../views/user/User.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/order/', name: 'UserOrder', component: () => import('../../views/user/Order.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/order/invoice', name: 'UserOrderInvoice', component: () => import('../../views/user/OrderInvoice.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/payment/', name: 'UserPayment', component: () => import('../../views/user/Payment.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/payment/invoice/', name: 'UserPaymentInvoice', component: () => import('../../views/user/PaymentInvoice.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/reseller/', name: 'UserResell', component: () => import('../../views/user/Reseller.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/affiliate/', name: 'UserAffiliate', component: () => import('../../views/user/Affiliate.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/wholesale/', name: 'UserWholesale', component: () => import('../../views/user/Wholesale.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/wishlist/', name: 'UserWishlist', component: () => import('../../views/user/Wishlist.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/store/', name: 'UserStore', component: () => import('../../views/user/Store.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/setting/', name: 'UserSetting', component: () => import('../../views/user/Setting.vue'), meta: { keepalive: false, requiresAuth: true } },
  { path: '/user/password/', name: 'UserPassword', component: () => import('../../views/user/Password.vue'), meta: { keepalive: false, requiresAuth: true } },
]
