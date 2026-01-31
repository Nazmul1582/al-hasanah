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
  <div class="panel">
    <p v-if="loading" class="lead">Loading products...</p>
    <p v-else-if="error" class="lead">Could not load products yet.</p>
    <p v-else-if="nodes.length === 0" class="lead">No products found.</p>
    <div v-else class="product-grid">
      <article v-for="item in nodes" :key="item.id" class="card">
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title || item.slug"
          class="product-thumb"
        />
        <h3>{{ item.title || item.slug }}</h3>
        <p class="lead">{{ item.currency || 'BDT' }}</p>
      </article>
    </div>
  </div>
</template>
