import { defineStore } from 'pinia'

const parseSiteId = (value) => {
  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) ? 1 : parsed
}

export const useSiteStore = defineStore('site', {
  state: () => ({
    siteId: parseSiteId(import.meta.env.VITE_SITE_ID),
  }),
  actions: {
    setSiteId(id) {
      this.siteId = Number.parseInt(id, 10)
    },
  },
})
