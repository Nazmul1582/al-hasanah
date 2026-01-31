<script setup>
import { computed } from 'vue'
import { useProducts } from '../../composables/useProducts'

const props = defineProps({
  plainSearch: {
    type: String,
    default: '',
  },
})

const { items, loading, error } = useProducts({
  search: computed(() => props.plainSearch || null),
})

const nodes = computed(() =>
  (items.value || []).map((edge) => (edge && edge.node ? edge.node : edge))
)
</script>

<template>
  <div class="panel-surface">
    <p v-if="loading" class="lead">Loading products...</p>
    <p v-else-if="error" class="lead">Could not load products yet.</p>
    <p v-else-if="nodes.length === 0" class="lead">No products found.</p>
    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="item in nodes"
        :key="item.id"
        class="panel-surface-compact"
      >
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title || item.slug"
          class="mb-3 h-44 w-full rounded-xl object-cover"
        />
        <h3 class="text-base font-semibold">{{ item.title || item.slug }}</h3>
        <p class="text-sm text-slate-500">{{ item.currency || 'BDT' }}</p>
      </article>
    </div>
  </div>
</template>
