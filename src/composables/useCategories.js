import { computed, unref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { STORE_CATEGORIES } from '../gql/categories'
import { useSiteStore } from '../stores/site'

export const useCategories = (options = {}) => {
  const siteStore = useSiteStore()

  const variables = computed(() => ({
    siteId: [siteStore.siteId],
    first: unref(options.first) ?? 12,
    after: unref(options.after) ?? null,
    search: unref(options.search) ?? null,
    isActive: unref(options.isActive) ?? true,
    isPrivate: unref(options.isPrivate) ?? null,
  }))

  const { result, loading, error } = useQuery(STORE_CATEGORIES, variables, {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  })

  const items = computed(() => result.value?.storeCategories?.edges ?? [])

  return {
    items,
    loading,
    error,
  }
}
