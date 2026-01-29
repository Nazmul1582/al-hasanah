<template>
  <main class="page">
    <div class="home-layout">
      <SideBar />
      <section class="home-content">
        <header class="hero">
          <BaseBadge label="Al-Hasanah" />
          <h1>Modern storefront, built for learning.</h1>
          <p class="lead">
            This will mirror the demo-store homepage: hero, sliders, campaigns,
            and curated lists.
          </p>
          <div class="actions">
            <BaseButton label="Browse coming soon" />
            <BaseButton variant="ghost" label="Track progress" />
          </div>
        </header>

        <ProductListSlider title="Flash deals" />
        <ProductListSlider title="New arrivals" />
        <BrandListSlider />
        <ShopListSlider />
      </section>
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
