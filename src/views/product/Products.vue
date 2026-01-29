<template>
  <main class="page">
    <div class="home-layout">
      <LongSideBar />
      <section class="home-content">
        <header class="hero">
          <BaseBadge label="Products" />
          <h1>Search results</h1>
          <p class="lead">
            This page will mirror demo-store search and filtering.
          </p>
        </header>
        <ProductList />
        <SideFilter />
      </section>
    </div>
  </main>
</template>

<script setup>
import BaseBadge from '../../components/ui/BaseBadge.vue'
import LongSideBar from '../../components/navigation/LongSideBar.vue'
import ProductList from '../../components/catalog/ProductList.vue'
import SideFilter from '../../components/catalog/SideFilter.vue'
</script>
