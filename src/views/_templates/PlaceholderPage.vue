<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: 'This view will be aligned with demo-store and upgraded with best practices.',
  },
})
</script>

<template>
  <section class="page">
    <header class="hero">
      <h1>{{ title }}</h1>
      <p v-if="subtitle" class="lead">{{ subtitle }}</p>
      <p class="lead">{{ hint }}</p>
    </header>
  </section>
</template>
