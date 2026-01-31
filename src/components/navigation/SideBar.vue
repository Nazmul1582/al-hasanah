<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCategories } from '../../composables/useCategories'

defineEmits(['onCategory', 'onSubCategory', 'onSubSubCategory'])

const router = useRouter()
const { items, loading } = useCategories({ first: 12 })
const nodes = computed(() =>
  (items.value || []).map((edge) => (edge && edge.node ? edge.node : edge))
)

const goCategory = (item) => {
  if (!item) return
  if (item.isExternal && item.external) {
    window.open(`https://${item.external}`, '_blank')
    return
  }
  router.push(`/category/${item.slug || item.title}/${item.hid || item.id}/`)
}
</script>

<template>
  <aside class="sidebar-panel">
    <h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
      Categories
    </h3>
    <p v-if="loading" class="text-sm text-slate-500">Loading...</p>
    <ul v-else class="space-y-3 text-sm text-slate-700">
      <li
        v-for="item in nodes"
        :key="item.id"
        class="flex cursor-pointer items-center gap-3"
        @click="goCategory(item)"
      >
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
