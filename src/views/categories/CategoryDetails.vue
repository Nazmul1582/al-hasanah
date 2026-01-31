<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseBadge from '../../components/ui/BaseBadge.vue'
import ProductList from '../../components/catalog/ProductList.vue'

const route = useRoute()
const categoryId = computed(() => Number(route.params.id))
</script>

<template>
  <main class="page-shell">
    <div class="page-container">
      <div class="page-grid">
        <section class="page-section">
          <header class="panel-surface mb-6">
            <BaseBadge label="Category" />
            <h1 class="text-3xl font-semibold sm:text-4xl">
              {{ route.params.slug }}
            </h1>
            <p class="mt-3 text-base text-slate-600">
              Products filtered by category.
            </p>
          </header>
          <ProductList :category-id="categoryId" />
        </section>
      </div>
    </div>
  </main>
</template>
