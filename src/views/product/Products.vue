<template>
  <main class="page-shell">
    <div class="page-container">
      <div class="page-grid">
        <LongSideBar class="hidden md:block" />
        <section class="page-section">
          <header class="panel-surface mb-6">
            <BaseBadge label="Products" />
            <h1 class="text-3xl font-semibold sm:text-4xl">Search results</h1>
            <p class="mt-3 text-base text-slate-600">
              This page will mirror demo-store search and filtering.
            </p>
          </header>
          <div class="space-y-4">
            <ProductList />
            <SideFilter />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import BaseBadge from '../../components/ui/BaseBadge.vue'
import LongSideBar from '../../components/navigation/LongSideBar.vue'
import ProductList from '../../components/catalog/ProductList.vue'
import SideFilter from '../../components/catalog/SideFilter.vue'
</script>
