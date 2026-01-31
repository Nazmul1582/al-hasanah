<script setup>
import { computed } from 'vue'
import { useProducts } from '../../composables/useProducts'

const props = defineProps({
  title: {
    type: String,
    default: 'Product Slider',
  },
  isFlash: {
    type: Boolean,
    default: false,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  first: {
    type: Number,
    default: 12,
  },
})

const { items, loading } = useProducts({
  isFlash: computed(() => (props.isFlash ? true : null)),
  isNew: computed(() => (props.isNew ? true : null)),
  first: computed(() => props.first),
})

const nodes = computed(() =>
  (items.value || []).map((edge) => (edge && edge.node ? edge.node : edge))
)
</script>

<template>
  <section class="panel-surface">
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-lg font-semibold text-slate-700">{{ title }}</h2>
      <span class="text-sm text-slate-400">See all</span>
    </div>
    <p v-if="loading" class="text-sm text-slate-500">Loading...</p>
    <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="item in nodes"
        :key="item.id"
        class="panel-surface-compact"
      >
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.title || item.slug"
          class="mb-3 h-36 w-full rounded-xl object-cover"
        />
        <h3 class="text-sm font-semibold">{{ item.title || item.slug }}</h3>
        <p class="text-xs text-slate-500">{{ item.currency || 'BDT' }}</p>
      </article>
    </div>
  </section>
</template>
