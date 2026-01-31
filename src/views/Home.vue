<template>
  <main class="page-shell">
    <div class="page-container">
      <div class="page-grid">
        <SideBar class="hidden md:block" />
        <section class="page-section">
          <header class="panel-surface mb-6">
            <BaseBadge label="Al-Hasanah" />
            <h1 class="text-3xl font-semibold sm:text-4xl">
              Modern storefront, built for learning.
            </h1>
            <p class="mt-3 text-base text-slate-600">
              This will mirror the demo-store homepage: hero, sliders, campaigns,
              and curated lists.
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <BaseButton label="Browse coming soon" />
              <BaseButton variant="ghost" label="Track progress" />
            </div>
          </header>

          <div class="space-y-5">
            <ProductListSlider title="Flash deals" :is-flash="true" />
            <ProductListSlider title="New arrivals" :is-new="true" />
            <BrandListSlider />
            <ShopListSlider />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import SideBar from '../components/navigation/SideBar.vue'
import ProductListSlider from '../components/catalog/ProductListSlider.vue'
import BrandListSlider from '../components/catalog/BrandListSlider.vue'
import ShopListSlider from '../components/catalog/ShopListSlider.vue'
</script>
