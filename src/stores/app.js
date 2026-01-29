import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    initialized: false,
  }),
  actions: {
    markReady() {
      this.initialized = true
    },
  },
})
