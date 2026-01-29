<script setup>
import PlaceholderBlock from '../placeholders/PlaceholderBlock.vue'

defineProps({
  title: {
    type: String,
    default: 'Product Slider',
  },
})
</script>

<template>
  <div class="panel">
    <PlaceholderBlock :title="title" body="Carousel placeholder." />
  </div>
</template>
