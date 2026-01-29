<script setup>
defineProps({
  title: {
    type: String,
    default: 'Placeholder',
  },
  body: {
    type: String,
    default: 'This block will be replaced by a real feature.',
  },
})
</script>

<template>
  <div class="placeholder-block">
    <h3>{{ title }}</h3>
    <p class="lead">{{ body }}</p>
  </div>
</template>
