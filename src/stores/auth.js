import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.token),
  },
  actions: {
    setSession({ user, token }) {
      this.user = user
      this.token = token
    },
    clearSession() {
      this.user = null
      this.token = null
    },
  },
})
