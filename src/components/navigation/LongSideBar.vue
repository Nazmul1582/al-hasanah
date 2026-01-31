<script setup>
import { computed } from 'vue'
import { useCategories } from '../../composables/useCategories'

defineEmits(['onCategory', 'onSubCategory', 'onSubSubCategory'])

const { items, loading } = useCategories({ first: 20 })
const nodes = computed(() =>
  (items.value || []).map((edge) => (edge && edge.node ? edge.node : edge))
)
</script>

<template>
  <aside class="sidebar-panel">
    <h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
      Categories
    </h3>
    <p v-if="loading" class="text-sm text-slate-500">Loading...</p>
    <ul v-else class="space-y-3 text-sm text-slate-700">
      <li v-for="item in nodes" :key="item.id" class="flex items-center gap-3">
        <img
          v-if="item.image"
          :src="item.image"
          :alt="item.title"
          class="h-8 w-8 rounded-lg object-cover"
        />
        <span class="font-medium">{{ item.title }}</span>
      </li>
    </ul>
  </aside>
</template>
