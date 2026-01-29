<template>
  <section class="page">
    <header class="hero">
      <BaseBadge label="Products" />
      <h1>Product discovery starts here.</h1>
      <p class="lead">
        This view will load live items from the Bponi GraphQL API and support
        search, filters, and sorting.
      </p>
    </header>
    <div class="product-grid">
      <BaseCard v-for="card in 6" :key="card">
        <h3>Placeholder item</h3>
        <p class="lead">Waiting for real data.</p>
        <BaseButton variant="ghost" label="View details" />
      </BaseCard>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
</script>
