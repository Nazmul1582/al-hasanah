import { computed, unref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { STORE_PRODUCTS } from '../gql/products'
import { useSiteStore } from '../stores/site'

export const useProducts = (options = {}) => {
  const siteStore = useSiteStore()
  const variables = computed(() => ({
    siteId: [siteStore.siteId],
    first: unref(options.first) ?? 12,
    after: unref(options.after) ?? null,
    search: unref(options.search) ?? null,
    isActive: true,
    isFlash: unref(options.isFlash) ?? null,
    isNew: unref(options.isNew) ?? null,
    categoryId: unref(options.categoryId) ?? null,
  }))

  const { result, loading, error, fetchMore, refetch } = useQuery(
    STORE_PRODUCTS,
    variables,
    {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    }
  )

  const items = computed(() => {
    const storeProducts = result.value?.storeProducts
    return (
      storeProducts?.edges ??
      storeProducts?.nodes ??
      storeProducts?.data ??
      []
    )
  })
  const pageInfo = computed(() => result.value?.storeProducts?.pageInfo ?? {})

  return {
    items,
    pageInfo,
    loading,
    error,
    fetchMore,
    refetch,
  }
}
