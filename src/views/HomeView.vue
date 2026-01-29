<template>
  <section class="page">
    <header class="hero">
      <BaseBadge label="Al-Hasanah" />
      <h1>Modern storefront, built for learning.</h1>
      <p class="lead">
        This is the starting point. We will replace this with a real product feed
        from the Bponi GraphQL API.
      </p>
      <div class="actions">
        <BaseButton label="Browse coming soon" />
        <BaseButton variant="ghost" label="Track progress" />
      </div>
    </header>
    <BaseCard>
      <h2>Up next</h2>
      <p class="lead">
        We will build products, cart, and checkout step-by-step. Each feature lives
        in its own layer so it is easy to find and update.
      </p>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseBadge from '../components/ui/BaseBadge.vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseCard from '../components/ui/BaseCard.vue'
</script>
